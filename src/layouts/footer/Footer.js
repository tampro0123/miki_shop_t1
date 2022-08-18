import AboutUs from 'src/components/aboutUs/index.js';
import Link from 'next/link';
import { ArrowRightIcon, Twitter, FaceBook, Instagram, TikTok, Pinterest } from 'src/components/Icons/index.js';
import { useEffect, useState } from 'react';

export default function Footer() {
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
      {windowWidth <= 375 ? (
        <footer className="px-[10px] w-[375px] mt-[64px]">
          <div className="flex flex-col">
            <div>
              <h3 className="text-[23.5px] leading-[32px] font-mon font-semibold text-primary-text mb-[16px]">
                Đăng kí để nhận khuyến mãi
              </h3>
              <div className="flex items-center px-4 justify-between max-w-[412px] w-full bg-white h-[48px] border-[1px] border-primary-text rounded-8">
                <input type="text" placeholder="Email" className="h-[40px] w-full outline-0" />
                <ArrowRightIcon classNameIcon="cursor-pointer hover:scale-90 duration-300" />
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-[24px] leading-[32px] font-mon font-semibold text-primary-text mb-4">
                Kết nối với chúng tôi tại
              </h3>
              <div className="flex w-full">
                <FaceBook classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
                <Twitter classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
                <Instagram classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
                <TikTok classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
                <Pinterest classNameIcon="cursor-pointer hover:scale-90 duration-300 w-6 h-6 mr-6" />
              </div>
            </div>
          </div>

          <div className="pt-[40px]">
            <div className="max-w-[400px]">
              <Link href="/">
                <h1 className="font-plf text-[24px] cursor-pointer leading-[32px] font-bold text-primary-text mb-[16px]">
                  MIKI JEWLLERY
                </h1>
              </Link>
              <ul className="">
                <li>Số GCNĐKDN: 2500150335</li>
                <li>Cấp lần đầu: Ngày 26/03/2007</li>
                <li>Đăng ký thay đổi lần thứ 16: Ngày 07/05/2018</li>
                <li>Cơ quan cấp: Sở kế hoạch và đầu tư tỉnh Vĩnh Phúc</li>
                <li>Địa chỉ: Phường Phúc Thắng, Thành phố Phúc Yên, Tỉnh Vĩnh Phúc, Việt Nam</li>
              </ul>
            </div>

            <div className="mt-[40px]">
              <div className="flex justify-between">
                <div>
                  <AboutUs
                    className="text-base leading-[24px] font-bold mb-4"
                    title="Về chúng tôi"
                    arr={['Thương hiệu', 'Lịch sử', 'Tuyển dụng']}
                  />
                  <AboutUs
                    className="text-base leading-[24px] font-bold mb-4 mt-10"
                    title="Dịch vụ khách hàng"
                    arr={['Thanh toán', 'Cẩm nang sử dụng', 'Câu hỏi thường gặp']}
                  />
                </div>
                <AboutUs
                  className="text-base leading-[24px] font-bold mb-4"
                  title="Tài khoản"
                  arr={['Lịch sử mua hàng', 'Giỏ hàng', 'Thông tin']}
                />
              </div>
            </div>
          </div>
          <div className="flex mt-[40px] justify-center items-center py-[16px]">
            <p>MikiShop © 2022</p>
          </div>
        </footer>
      ) : (
        <footer className="px-[154px] mt-[120px]">
          <div className="grid grid-cols-2 pb-[40px]">
            <div>
              <h3 className="text-[32px] line-[40px] font-bold text-primary-text mb-[40px]">
                Đăng kí để nhận khuyến mãi
              </h3>
              <div className="flex items-center justify-between max-w-[412px] w-full bg-white h-[48px] border-[1px] border-primary-text px-[16px] rounded-8">
                <input type="text" placeholder="Nhập Email" className="h-[40px] w-full outline-0" />
                <ArrowRightIcon classNameIcon="cursor-pointer hover:scale-90 duration-300" />
              </div>
            </div>
            <div className="text-right">
              <h3 className="text-[32px] line-[40px] font-bold text-primary-text mb-[40px]">
                Kết nối với chúng tôi tại
              </h3>
              <div className="flex w-full justify-end gap-[33px]">
                <FaceBook classNameIcon="cursor-pointer hover:scale-90 duration-300" />
                <Twitter classNameIcon="cursor-pointer hover:scale-90 duration-300" />
                <Instagram classNameIcon="cursor-pointer hover:scale-90 duration-300" />
                <TikTok classNameIcon="cursor-pointer hover:scale-90 duration-300" />
                <Pinterest classNameIcon="cursor-pointer hover:scale-90 duration-300" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="pt-[40px] border-t-[1px] border-t-#6E5544 grid grid-cols-[1.5fr,2fr]">
            <div className="max-w-[400px]">
              <Link href="/">
                <h1 className="font-plf text-[48px] cursor-pointer font-bold text-primary-text mb-[28px]">
                  MIKI JEWLLERY
                </h1>
              </Link>
              <ul className="grid gap-[10px]">
                <li>Số GCNĐKDN: 2500150335</li>
                <li>Cấp lần đầu: Ngày 26/03/2007</li>
                <li>Đăng ký thay đổi lần thứ 16: Ngày 07/05/2018</li>
                <li>Cơ quan cấp: Sở kế hoạch và đầu tư tỉnh Vĩnh Phúc</li>
                <li>Địa chỉ: Phường Phúc Thắng, Thành phố Phúc Yên, Tỉnh Vĩnh Phúc, Việt Nam</li>
              </ul>
            </div>

            <div className="grid grid-cols-3">
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
            </div>
          </div>
          <div className="flex justify-center items-center py-[16px]">
            <p>MikiShop © 2022</p>
          </div>
        </footer>
      )}
    </div>
  );
}
