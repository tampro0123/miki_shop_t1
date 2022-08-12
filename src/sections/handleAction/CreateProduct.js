import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFieldArray } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';
import { FormProviderBox, TextField, TextArea, SlectOption } from 'src/components/hook-form';
import Button from 'src/components/Button';
import { useState } from 'react';
import convertToBase64 from 'src/sections/handleAction/functionHanle/convertImg.js';
export default function createProduct() {
  const schema = yup.object().shape({
    nameProduct: yup.string().required('Nhập tên sản phẩm'),
    imageMain: yup.mixed().required('Vui lòng chọn ảnh chính'),
    desc: yup.string().required('Vui lòng nhập mô tả sản phẩm'),
    dynamicForm: yup.array().of(
      yup.object().shape({
        size: yup.string().required('Vui lòng nhập cỡ'),
        quantity: yup.string().required('Vui lòng số lượng'),
        price: yup.string().required('Vui lòng giá'),
      })
    ),
  });
  const methods = useForm({
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur',
    defaultValues: {
      imageMain: null,
      dynamicForm: [],
    },
  });
  const { handleSubmit, reset, control } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'dynamicForm',
  });

  // Handle Submit
  const [baseMainImg, setBaseImgMain] = useState('');
  const [baseImgs, setBaseImgs] = useState([]);
  const [click, setClick] = useState(false);
  const [errAdd, setErrAdd] = useState('');
  let arr;
  const onChange = (e) => {
    let convertArr = Array.from(e.target.files);
    convertArr.forEach(async (item) => {
      let base64 = await convertToBase64(item);
      setBaseImgs((prevState) => [...prevState, base64]);
    });
  };
  const baseImgMain = (e) => {
    let convertArr = Array.from(e.target.files);
    convertArr.forEach(async (item) => {
      let base64 = await convertToBase64(item);
      setBaseImgMain(base64);
    });
  };
  const onSubmit = (data) => {
    if (!click) {
      return setErrAdd('Vui lòng thêm size');
    }
    if (data && click) {
      const dataAdd = axios({
        method: 'POST',
        url: '/api/products/create',
        data: {
          category: data.category,
          description: data.desc,
          image: baseMainImg,
          name: data.nameProduct,
          storage: data.dynamicForm,
          subImage: baseImgs,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));
      reset({
        category: '',
        desc: '',
        dynamicForm: [],
        imageMain: null,
        image: null,
        nameProduct: '',
      });
    }
  };
  const style = {
    smInput: 'w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid',
    lgInput: 'w-full h-12 p-3  rounded-lg border-solid border-border-1 border-[1px]',
    message: 'text-msgEr text-sm',
    label: 'mt-6 pl-[8px] mb-[8px]',
    area: 'w-full rounded-lg border-solid border-border-1 border-[1px] p-[10px]',
  };
  const optionCategory = ['Nhẫn', 'Vòng cổ', 'Bông tai'];
  return (
    <div>
      <FormProviderBox className="px-10 max-w-[750px] " methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className="flex flex-col"
          label={'Nhập tên sản phẩm: '}
          styleLabel={style.label}
          name="nameProduct"
          styleInput={style.lgInput}
          styleMessage={style.message}
          placeholder="Nhập tên sản phẩm"
        />
        <div>
          {fields.map((item, index) => {
            return (
              <div key={item.id} className="flex gap-[10px] w-full relative">
                <TextField
                  className="flex flex-col "
                  label={'Kích cỡ : '}
                  styleLabel={style.label}
                  // name="size"
                  styleInput={style.lgInput}
                  styleMessage={style.message}
                  placeholder="Size..."
                  type="text"
                  name={`dynamicForm.${index}.size`}
                  isArray
                />
                <TextField
                  className="flex flex-col "
                  label={'Số lượng : '}
                  styleLabel={style.label}
                  styleInput={style.lgInput}
                  styleMessage={style.message}
                  placeholder="Quantity..."
                  type="number"
                  name={`dynamicForm.${index}.quantity`}
                  isArray
                />
                <TextField
                  className="flex flex-col "
                  label={'Giá sản phẩm: '}
                  styleLabel={style.label}
                  styleInput={style.lgInput}
                  styleMessage={style.message}
                  placeholder="Price..."
                  type="number"
                  name={`dynamicForm.${index}.price`}
                  isArray
                />
                <Button
                  type="button"
                  className=" w-[200px] text-base absolute right-[-209px] top-[59px] "
                  primary
                  onClick={() => remove(index)}
                  classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
                >
                  Xóa
                </Button>
              </div>
            );
          })}

          <Button
            type="button"
            onClick={() => {
              setClick(true);
              setErrAdd('');
              append();
            }}
            className="mt-[32px] w-[200px] text-base"
            primary
            name="buttonAddNew"
            classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
          >
            Thêm mới
          </Button>
          {errAdd && <span className={style.message}>{errAdd}</span>}
        </div>

        <TextField
          className="border-none flex flex-col"
          label={'Ảnh sản phẩm: '}
          styleLabel={style.label}
          styleInput={style.lgInput + 'border-none'}
          styleMessage={style.message}
          type="file"
          onChange={(e) => baseImgMain(e)}
          name="imageMain"
        />
        <TextField
          className="mb-4 border-none flex flex-col"
          label={'Ảnh liên quan: '}
          styleLabel={style.label}
          name="image"
          styleInput={style.lgInput + 'border-none'}
          styleMessage={style.message}
          type="file"
          multiple
          onChange={(e) => onChange(e)}
        />
        <TextArea
          className="mb-4 flex flex-col"
          label={'Thông tin sản phẩm: '}
          name="desc"
          styleInput={style.area}
          placeholder="Thông tin của sản phẩm ... "
          styleMessage={style.message}
        />
        <SlectOption
          className=""
          styleInput={style.area}
          valueOption={optionCategory}
          name="category"
          styleMessage={style.message}
        />
        <Button
          className="mt-[32px] w-full text-base"
          primary
          type="submit"
          classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
        >
          Tạo mới
        </Button>
      </FormProviderBox>
    </div>
  );
}
