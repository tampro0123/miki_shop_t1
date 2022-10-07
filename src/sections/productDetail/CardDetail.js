import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from 'src/components/Button';
import { Add, Sub } from 'src/components/Icons';
import { RatingReview } from 'src/components/Rating';
import { cartState } from 'src/recoils/cartState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { dataUser } from 'src/recoils/dataUser.js';
import { useRecoilValue } from 'recoil';
import { toasts } from 'src/recoils/toasts';
import { showToast } from 'src/utils/showToast';
import FormatPrice from 'src/utils/formatPrice';
import addProductToCart from 'src/utils/addProductToCart';
import { useRouter } from 'next/router';

export default function CardDetail({ product }) {
  const router = useRouter()
  const initProductState = {
    id: product._id,
    name: product.name,
    size: null,
    quantity: 0,
    price: product.storage[0].price,
    image: product.images[0].src,
  };
  
  const inforUser = useRecoilValue(dataUser);
  const [cart, setCart] = useRecoilState(cartState);
  
  const [productState, setProductState] = useState(initProductState);

  const [mainImg, setMainImg] = useState(product.images[0].src);
  
  // State click size
  const [sizeQuantity, setSizeQuantity] = useState(null);
  const [stocking, setStocking] = useState(product.storage[0].quantity);
  const [sizeIndex, setSizeChecked] = useState(null);
  
  // const [warning, setWarning] = useState({ warningMaxAmount: false, warningChooseSize: false });
  
  useEffect(() => {
    setMainImg(product.images[0].src);
    setSizeChecked(null);
    setProductState(initProductState);
  }, [product.slug]);

  // toast
  const setToast = useSetRecoilState(toasts);

  async function handleBuyNowProduct() {
    addProductToCart( inforUser.id, productState, product.category, product.description, cart, setCart, setToast )
    setTimeout( () => {
      router.push('/cart')
    }, 1000)
  }

  async function handleGetProduct() {
    addProductToCart( inforUser.id, productState, product.category, product.description,cart, setCart, setToast )
  }
  
  const handleSubAmount = () => {
    productState.quantity > 0 &&
      setProductState((prev) => {
        return {
          ...prev,
          quantity: prev.quantity--,
        };
      });
  };
  const handleAddAmount = () => {
    if (!productState.size) {
      // setWarning({ ...warning, warningChooseSize: true });
      // setTimeout(() => {
      //   setWarning({ ...warning, warningChooseSize: false });
      // }, 3000);
      showToast('warning', 'Thất bại', 'Vui lòng chọn size', 3000, setToast);
    }
    if (productState.quantity == Number(sizeQuantity)) {
      // setWarning({ ...warning, warningMaxAmount: true });
      // setTimeout(() => {
      //   setWarning({ ...warning, warningMaxAmount: false });
      // }, 3000);
      showToast('warning', 'Thất bại', 'Vượt quá số lượng hàng tồn kho', 3000, setToast);
    }
    productState.quantity < sizeQuantity &&
      productState.size &&
      setProductState((prev) => {
        return {
          ...prev,
          quantity: prev.quantity++,
        };
      });
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col ">
        {product.images.length < 3 ? (
          <div></div>
        ) : product.images.length < 4 ? (
          <div className="flex flex-col min-h-[485px] justify-between">
            <div className="mb-[12px] shadow-md overflow-hidden rounded-8 bg-white">
              <Image
                src={product.images[0].src}
                width="156"
                height="107"
                objectFit="cover"
                onClick={() => setMainImg(product.images[0].src)}
              />
            </div>
            <div className="mb-[12px] shadow-md overflow-hidden rounded-8 bg-white">
              <Image
                src={product.images[1].src}
                width="156"
                height="107"
                objectFit="cover"
                onClick={() => setMainImg(product.images[1].src)}
              />
            </div>
            <div className="shadow-md overflow-hidden rounded-8 bg-white">
              <Image
                src={product.images[2].src}
                width="156"
                height="107"
                objectFit="cover"
                onClick={() => setMainImg(product.images[2].src)}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-[12px] shadow-md overflow-hidden rounded-8 bg-white">
              <Image
                src={product.images[0].src}
                width="156"
                height="107"
                objectFit="cover"
                onClick={() => setMainImg(product.images[0].src)}
              />
            </div>
            <div className="mb-[12px] shadow-md overflow-hidden rounded-8">
              <Image
                src={product.images[1].src}
                width="156"
                height="107"
                objectFit="cover"
                onClick={() => setMainImg(product.images[1].src)}
              />
            </div>
            <div className="mb-[12px] shadow-md overflow-hidden rounded-8 bg-white">
              <Image
                src={product.images[2].src}
                width="156"
                height="107"
                objectFit="cover"
                onClick={() => setMainImg(product.images[2].src)}
              />
            </div>
            <div className="shadow-md overflow-hidden rounded-8">
              <Image
                src={product.images[3].src}
                width="156"
                height="107"
                objectFit="cover"
                onClick={() => setMainImg(product.images[3].src)}
              />
            </div>
          </div>
        )}
      </div>
      <div className="mx-10 shadow-md overflow-hidden rounded-16 bg-white">
        <Image src={mainImg} width="450" height="485" />
      </div>
      <div className="flex-1 relative">
        <div className="flex items-start mb-2">
          <span className="text-32 font-bold leading-10"> {product.name} </span>
        </div>
        <div className="mb-3">
          <span className="text-sm opacity-50 mr-2">{product?.rating.rate}</span>
          {!product?.rating.rate ? <span>Chưa có đánh giá</span> : <RatingReview value={product?.rating.rate} />}
          <span className="ml-4 mr-2">{'|'}</span>
          <span>{`${product.rating.count} đã bán`}</span>
          <p className="ml-[96px] inline-block font-bold">
            {!stocking ? (
              <span className="text-red-500">Hết hàng</span>
            ) : stocking <= 10 ? (
              <span className="text-red-500">Sắp hết hàng</span>
            ) : (
              <span className="text-[#58C27D]">Còn hàng</span>
            )}
          </p>
        </div>
        <div className="h-[120px]">
          {!product?.discount ? (
            <p className="text-price-text text-5xl font-bold mt-4">{new Intl.NumberFormat('vi-VN').format(price)} đ</p>
          ) : (
            <div>
              <span className="text-Neutral/2 text-2xl line-through">
                {new Intl.NumberFormat('vi-VN').format(productState?.price)} đ
              </span>
              <div className="inline-block ml-[18px] mr-4 w-[2px] h-[16px] bg-Neutral/2 "></div>
              <span className="text-white bg-[#A18A68] rounded-[4px] py-[4px] px-[7px] ">{`${product.discount} %`}</span>
              <p className="text-price-text text-5xl font-bold mt-4">
                <FormatPrice price={productState?.price} discount={product?.discount ? product.discount : 0} />
              </p>
            </div>
          )}
        </div>
        <div className="flex mb-4 min-h-[100px]">
          <span className="text-lg w-[150px] mr-[40px]">Kích thước:</span>
          <div className="inline-block">
            {product?.storage.map((e, index) => (
              <span
                key={e.size}
                className={
                  e.quantity > 0
                    ? index == sizeIndex
                      ? 'inline-block w-[42px] text-center bg-black text-white py-2 ml-[32px] rounded-8 border mb-2'
                      : 'py-2 inline-block w-[42px] text-center ml-[32px] rounded-8 border-solid border border-primary-text bg-white cursor-pointer mb-2'
                    : 'py-2 inline-block w-[42px] text-center ml-[32px] bg-[#a09d9d] rounded-8 mb-2'
                }
                onClick={() => {
                  if (e.quantity > 0) {
                    setSizeQuantity(e.quantity);
                    setSizeChecked(index);
                    setStocking(e.quantity);
                    // setPrice(e.price);
                    // setSize(e.size);
                    setProductState((prev) => {
                      return {
                        ...prev,
                        price: e.price,
                        size: e.size,
                        quantity:0,
                      };
                    });
                  }
                }}
              >
                {e.size}
              </span>
            ))}
          </div>
        </div>
        <div className="flex">
          <span className="text-lg">Số lượng:</span>
          <div className="ml-[150px] flex items-center">
            <button className="active:bg-black active:rounded-full" onClick={handleSubAmount}>
              <Sub />
            </button>
            <p className="text-[20px] font-bold leading-7 w-7 text-center mx-4">{productState.quantity}</p>
            <button className="active:bg-black active:rounded-full" onClick={handleAddAmount}>
              <Add />
            </button>
          </div>
        </div>
        {/* {warning.warningMaxAmount && <span className="text-red-700 text-xs">Vượt quá số lượng trong kho</span>}
        {warning.warningChooseSize && <span className="text-red-700 text-xs">Vui lòng chọn size</span>} */}
        <div className="flex absolute bottom-0">
          <Button primary onClick={() => handleBuyNowProduct()} className="hover-btn-primary mr-[48px] shadow-md">
            Mua ngay
          </Button>
          <Button secondary onClick={() => handleGetProduct()} className="border-2 border-solid border-btn shadow-md">
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </div>
  );
}
