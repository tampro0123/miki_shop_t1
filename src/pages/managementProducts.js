import axios from 'axios';
import { useLayoutEffect, useState } from 'react';
import Button from 'src/components/Button';
import OverLay from 'src/layouts/managementPage/overlay/OverLay.js';
import Link from 'next/link'
export default function managementProducts() {
  const fakeArr = ['1','2','3']
  const [products, setProducts] = useState([])
  useLayoutEffect(() =>{
    const data = axios.get('https://fakestoreapi.com/products/')
    .then(res =>{
      setProducts(res.data)
    })
  },[])
  return (
     <OverLay>
        <div className='mt-[30px]'>
          <div className="flex shadow-md justify-between h-[80px] items-center bg-white mx-[20px] rounded-8 px-[30px]">
            <h3 className='text-[20px] font-bold'>Quản lí sản phẩm</h3>
            <div className='flex justify-between'>
              <input type='text' placeholder='Search' className='border-[1px] 
              border-solid border-[#ccc] px-[10px] mr-[10px] rounded-8 w-[350px]'/>
              <Link href="/createProduct">
                <a>
                  <Button primary className='hover-btn-primary'>
                    Thêm mới
                  </Button>
                </a>
              </Link>
            </div>
          </div>  

          <div className='mt-[30px] mx-[20px] p-[30px] bg-white rounded-8 shadow-md'>
            <table className ='border-[1px] border-solid border-[#ccc] w-full'>
              <thead>
                <tr className ='border-[1px] border-solid border-[#ccc] p-[15px]'>
                  <th>#</th>
                  <th>Tên sản phẩm</th>
                  <th>Ảnh minh họa</th>
                  <th>Giá sản phẩm</th>
                  <th>Mô tả</th>
                  <th>Thay đổi</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => {
                  return <tr className ='border-[1px] border-solid border-[#ccc] text-center' key={product.id}>
                  <td className='w-[50px]'>{product.id}</td>
                  <td className ='w-[120px]'>{product.title}</td>
                  <td className='flex justify-center items-center'>
                   <img src={product.image}
                    className='max-w-[150px] w-full p-[10px]' alt ="" />
                  </td>
                  <td className='text-[#AC3131]'>{product.price} $</td>
                  <td className='max-w-[450px]'>{product.description}</td>
                  <td className='p-[10px w-[180px] px-[20px]'>
                    <div className='flex flex-col items-center'>
                      <Button  className='hover-btn-primary max-w-[180px] w-full bg-[#1E74A4] text-white mb-[5px] p-[10px]'>
                        Cập nhật
                      </Button>
                      <Button  className='hover-btn-primary max-w-[180px] w-full bg-[#AC3131] text-white p-[10px]'>
                        Xóa
                      </Button>
                    </div>
                  </td>
                </tr>
                })}
                
                
              </tbody>
            </table>
          </div>
        </div>
    </OverLay>
  )
}
