import React from 'react'
import { ArrowRightIcon , FaceBook , Instagram , TikTok , Vector} from '../../components/Icons/icons.js'
import AboutUs from '../../components/AboutUs/index.js'
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="px-[154px]">
      <div className ='grid grid-cols-2 pb-[40px]'>
        <div>
          <h3 className="text-[32px] line-[40px] font-bold text-primary-text mb-[40px]">Đăng kí để nhận khuyến mãi</h3>
          <div className="flex items-center justify-between max-w-[412px] w-full bg-white h-[48px] border-[1px] border-primary-text px-[16px] rounded-8">
            <input type="text" placeholder="Nhập Email" className="h-[40px] w-full outline-0"/>
            <ArrowRightIcon />
          </div>

        </div>
        <div className ='text-right'>
          <h3 className="text-[32px] line-[40px] font-bold text-primary-text mb-[40px]">Kết nối với chúng tôi tại</h3>
          <div className ='flex w-full justify-end gap-[33px]'>
            <FaceBook/>
            <Instagram />
            <TikTok />
            <Vector />
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div className ='pt-[40px] border-t-[1px] border-t-#6E5544 grid grid-cols-[1.5fr,2fr]'>
        <div className ='max-w-[368px]'>
          <h1 className ='font-plf text-[48px] font-bold text-primary-text mb-[28px]'>MIKI JEWLERY</h1>
          <ul className='grid gap-[10px]'>
            <li>Số GCNĐKDN: 2500150335</li>
            <li>Cấp lần đầu: Ngày 26/03/2007</li>
            <li>Đăng ký thay đổi lần thứ 16: Ngày 07/05/2018</li>
            <li>Cơ quan cấp: Sở kế hoạch và đầu tư tỉnh Vĩnh Phúc</li>
            <li>Địa chỉ: Phường Phúc Thắng, Thành phố Phúc Yên, Tỉnh Vĩnh Phúc, Việt Nam</li>
          </ul>
        </div>

        <div className="grid grid-cols-3">
          <AboutUs title='Về chúng tôi' arr={['Thương hiệu', 'Lịch sử', 'Tuyển dụng']} />
          <AboutUs title='Tài khoản' arr={['Lịch sử mua hàng', 'Giỏ hàng', 'Thông tin']} />
          <AboutUs title='Dịch vụ khách hàng' arr={['Thanh toán', 'Cẩm nang sử dụng', 'Câu hỏi thường gặp']} />
        </div>
      </div>
      <div className="flex justify-center items-center py-[16px]">
        <p>MikiShop © 2022</p>
      </div>
    </footer>
  )
}

