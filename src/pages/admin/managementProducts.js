import Link from 'next/link';
import Button from 'src/components/Button';
import OverLay from 'src/layouts/managementPage/overlay/OverLay.js';
import deleteProduct from 'src/sections/handleAction/functionHandle/deleteProduct.js'
import { useProducts } from 'src/hooks'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSetRecoilState } from 'recoil'
import { inforProduct } from 'src/recoils/inforProduct.js'
export default function managementProducts() {
  const router = useRouter()
  const setProductState = useSetRecoilState(inforProduct)
  const [checkAll, setCheckAll] = useState(false)
  const { product: products } = useProducts('all')
  return (
    <OverLay>
      <div className='mt-[30px]'>
        <div className="flex shadow-md justify-between h-[80px] items-center bg-white mx-[20px] rounded-8 px-[30px]">
          <h3 className='text-[20px] font-bold'>Quản lí sản phẩm</h3>
          <div className='flex justify-between'>
            <input type='text' placeholder='Search' className='border-[1px] 
              border-solid border-[#ccc] px-[10px] mr-[10px] rounded-8 w-[350px]'/>
            <Link href="/admin/addProduct">
              <a target="_blank">
                <Button primary className='hover-btn-primary'>
                  Thêm mới
                </Button>
              </a>
            </Link>
            <Button primary className='hover-btn-primary ml-[10px] bg-[#AC3131]'>
              Xóa
            </Button>
          </div>
        </div>

        <div className='mt-[30px] mx-[20px] p-[30px] bg-white rounded-8 shadow-md'>
          <table className='border-[1px] border-solid border-[#ccc] w-full'>
            <thead>
              <tr className='border-[1px] border-solid border-[#ccc] p-[15px]'>
                <th>
                  <input type='checkbox' onClick={() => setCheckAll(!checkAll)} />
                </th>
                <th >#</th>
                <th >Tên sản phẩm</th>
                <th >Ảnh minh họa</th>
                <th>Kích cỡ</th>
                <th >Giá sản phẩm</th>
                <th >Loại</th>
                <th >Thay đổi</th>
              </tr>
            </thead>
            {products?.product.map((product, index) => {
              return (
                <tbody key={index}>
                  <tr className='border-[1px] py-[40px] border-solid border-[#ccc] text-center'>
                    <td rowSpan={product.storage.length}>
                      <input type='checkbox' checked={checkAll ? checkAll : null} />
                    </td>
                    <td rowSpan={product.storage.length} className='w-[30px]' >{index + 1}</td>
                    <td rowSpan={product.storage.length} className='max-w-[40px]'>{product.name}</td>
                    <td rowSpan={product.storage.length} className=''>
                      <img src={product.images[0].src}
                        className='max-w-[150px] w-full py-[80px] mx-auto' alt="" />
                    </td>
                    <td>{product.storage[0]?.size}</td>
                    <td className='text-[#AC3131]'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(product.storage[0]?.price)}</td>
                    <td rowSpan={product.storage.length}>{product.category}</td>
                    <td rowSpan={product.storage.length} className='p-[10px w-[180px] px-[20px]'>
                      <div className='flex flex-col items-center'>
                        <Button
                          className='hover-btn-primary max-w-[180px] w-full bg-[#1E74A4]
                          text-white mb-[5px] p-[10px]'

                          onClick={() => {
                            setProductState({
                              name: product.name,
                              images: product.images,
                              storage: product.storage,
                              category: product.category,
                              description: product.description,
                              discount: product.discount ? product.discount : 0,
                            })
                            router.push(`/management/updateProduct?id=${product._id}`)
                          }
                          }

                        >
                          Cập nhật
                        </Button>
                        <Button className='hover-btn-primary max-w-[180px] w-full bg-[#AC3131] text-white p-[10px]'
                          onClick={() => {
                            let decision = confirm("Bạn muốn xóa sản phẩm này không ? ")
                            if (decision) {
                              return deleteProduct(product._id)
                            }
                          }}
                        >
                          Xóa
                        </Button>
                      </div>
                    </td>
                  </tr>
                  {product.storage.slice(1).map((item, index) => (
                    <tr key={index} className='border-[1px] py-[40px] border-solid border-[#ccc] text-center'>
                      <td>{item?.size}</td>
                      <td className='text-[#AC3131]'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(item?.price)}</td>
                    </tr>
                  ))
                  }

                </tbody>
              )
            })}
          </table>
        </div>
      </div>
    </OverLay>
  )
}

