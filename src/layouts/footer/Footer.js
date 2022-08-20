import AboutUs from 'src/components/Aboutus/index.js';
import Link from 'next/link';
import { ArrowRightIcon, Twitter, FaceBook, Instagram, TikTok, Pinterest } from 'src/components/Icons/index.js';
import { useEffect, useState } from 'react';

export default function Footer() {
  // Set width window when resize
  const [windowWidth, setWindowWidth] = useState(undefined);
  // Get size window to respondsive
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

      return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
  }, []);
  return (
    <div>
      <footer className="px-[154px] mt-[120px] mobile:mx-[16px] mobile:mt-[64px] mobile:flex mobile:flex-col mobile:items-center">
        <div className="grid grid-cols-2 pb-[40px] mobile:flex mobile:flex-col mobile:items-center mobile:pb-0 mobile:w-[375px]">
          <div>
            <h3 className="text-[32px] line-[40px] font-bold text-primary-text mb-[40px] mobile:text-[23.5px] mobile:leading-[32px] mobile:font-mon mobile:font-semibold mobile:text-primary-text mobile:mb-[16px]">
              Đăng kí để nhận khuyến mãi
            </h3>
            <div className="flex items-center justify-between max-w-[412px] w-full bg-white h-[48px] border-[1px] border-primary-text px-[16px] rounded-8">
              <input type="text" placeholder="Nhập Email" className="h-[40px] w-full outline-0" />
              <ArrowRightIcon classNameIcon="cursor-pointer hover:scale-90 duration-300" />
            </div>
          </div>
          <div className="text-right mobile:w-full mobile:text-left mobile:mt-6" >
            <h3 className="text-[32px] line-[40px] mobile:mx-[16px] font-bold text-primary-text mb-[40px] mobile:text-[24px] mobile:leading-[32px] mobile:font-mon mobile:font-semibold mobile:text-primary-text mobile:mb-4">
              Kết nối với chúng tôi tại
            </h3>
            <div className="flex w-full mobile:mx-[16px] justify-end gap-[33px] mobile:gap-0 mobile:justify-start">
              <FaceBook classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
              <Twitter classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
              <Instagram classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
              <TikTok classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
              <Pinterest classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
            </div>
          </div>
          <div></div>
        </div>
        <div className="pt-[40px] border-t-[1px] border-t-#6E5544 grid grid-cols-[1.5fr,2fr] mobile:flex mobile:flex-col mobile:w-[343px] mobile:justify-center">
          <div className="max-w-[400px] mobile:flex mobile:flex-col mobile:mb-[40px]">
            <Link href="/">
              <h1 className="font-plf text-[48px] cursor-pointer font-bold text-primary-text mb-[28px] mobile:text-[24px] mobile:leading-[32px] mobile:mb-[16px]">
                MIKI JEWLLERY
              </h1>
            </Link>
            <ul className="grid gap-[10px] mobile:flex mobile:flex-col">
              <li>Số GCNĐKDN: 2500150335</li>
              <li>Cấp lần đầu: Ngày 26/03/2007</li>
              <li>Đăng ký thay đổi lần thứ 16: Ngày 07/05/2018</li>
              <li>Cơ quan cấp: Sở kế hoạch và đầu tư tỉnh Vĩnh Phúc</li>
              <li>Địa chỉ: Phường Phúc Thắng, Thành phố Phúc Yên, Tỉnh Vĩnh Phúc, Việt Nam</li>
            </ul>
          </div>
          {/* Responsive Info */}
          {windowWidth <= 480 ? <div className="mobile:flex mobile:flex-col hidden">
            <div className="flex justify-between">
              <AboutUs
                className="font-bold text-[20px] mb-[20px] mobile:font-bold mobile:mb-4"
                title="Về chúng tôi"
                arr={['Thương hiệu', 'Lịch sử', 'Tuyển dụng']}
              />
              <AboutUs
                className="font-bold text-[20px] mb-[20px] mobile:font-bold mobile:mb-4"
                title="Tài khoản"
                arr={['Lịch sử mua hàng', 'Giỏ hàng', 'Thông tin']}
              />
            </div>
            <AboutUs
              className="font-bold text-[20px] mb-[20px] mobile:font-bold mobile:mb-4 mobile:mt-10"
              title="Dịch vụ khách hàng"
              arr={['Thanh toán', 'Cẩm nang sử dụng', 'Câu hỏi thường gặp']}
            />
          </div> : <div className="grid grid-cols-3 mobile:hidden">
            <AboutUs
              className="font-bold text-[20px] mb-[20px]"
              title="Về chúng tôi"
              arr={['Thương hiệu', 'Lịch sử', 'Tuyển dụng']}
            />
            <AboutUs
              className="font-bold text-[20px] mb-[20px]"
              title="Tài khoản"
              arr={['Lịch sử mua hàng', 'Giỏ hàng', 'Thông tin']}
            />
            <AboutUs
              className="font-bold text-[20px] mb-[20px]"
              title="Dịch vụ khách hàng"
              arr={['Thanh toán', 'Cẩm nang sử dụng', 'Câu hỏi thường gặp']}
            />
          </div>}
        </div>
        <div className="flex justify-center items-center mobile:mt-[40px] py-[16px]">
          <p>MikiShop © 2022</p>
        </div>
      </footer>
    </div>
  );
}
