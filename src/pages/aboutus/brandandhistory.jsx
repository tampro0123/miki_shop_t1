import Image from 'next/image'
import React from 'react'
import Page from 'src/components/Page'
import Footer from 'src/layouts/footer'
import Header from 'src/layouts/header'
import banner from 'src/assets/Brand/banner.png'
import Img1 from 'src/assets/Brand/Rectangle 4169.jpg'
import Img2 from 'src/assets/Brand/Rectangle 4170.png'
import Img3 from 'src/assets/Brand/Rectangle 4171.jpg'

export default function BrandAndHistory() {
  return (
    <Page title={'Brand And History'}>
        <Header/>
        <div className='app'>
            <div className='relative'>
                <Image
                src={banner}
                layout= 'responsive'
                placeholder='blur'
                />
                <h2 className='text-5xl leading-[58px] font-bold w-[535px] absolute top-[86px] left-[156px] tracking-[-0.019em]'>
                “Miki Jewelry - Tales of Happiness”
                </h2>
                <p className='absolute top-[302px] text-[19px] left-[156px] w-[535px]'>
                Lần đầu ra mắt thị trường vào năm 2015, Miki mong muốn mang tới những sản phẩm Nữ trang được đầu tư về thiết kế, minh bạch về thông tin giao dịch hàng hoá và mang đến khách hàng dịch vụ hậu mãi trọn vẹn.
                </p>
            </div>
            <div className="container">
                <div className="grid grid-cols-2 gap-11 mb-[120px]">
                    <div>
                        <h3 className="text-32 leading-10 font-bold mb-[32px]">
                        Phong cách Hàn Quốc
                        </h3>
                        <p className="">
                        Lấy tầm nhìn trở thành “Nhà bán lẻ trang sức dẫn đầu xu hướng", trang sức Miki mang phong cách trẻ trung, hiện đại, liên tục cập nhật những xu hướng mới từ Hàn Quốc. 
                        </p>
                    </div>
                    <div className="drop-shadow-[0_0_86px_rgba(0,0,0,0.1)]">
                    <Image 
                    src={Img1}
                    className="rounded-8 overflow-hidden"
                    layout='responsive'
                    />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-11 mb-[120px]">
                    <div className="drop-shadow-[0_0_86px_rgba(0,0,0,0.1)]">
                    <Image 
                    src={Img2}
                    className="rounded-8 overflow-hidden"
                    layout='responsive'
                    />
                    </div>
                    <div>
                        <h3 className="text-32 leading-10 font-bold mb-[32px]">
                        Những câu chuyện hạnh phúc
                        </h3>
                        <p className="">
                        Mang trong mình sứ mệnh sẽ trở thành bạn đồng hành luôn thấu hiểu và trân trọng từng khoảnh khắc trong cuộc sống của khách hàng, Miki Jewelry là “Tales of Happines” (Câu chuyện của hạnh phúc). Hạnh phúc, tình yêu, kỉ niệm,… được hình hóa thành những món quà ở lại mãi với thời gian... 
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-11">
                    <div>
                        <h3 className="text-32 leading-10 font-bold mb-[32px]">
                        Sản xuất & chế tác
                        </h3>
                        <p className="">
                        Sở hữu xưởng sản xuất rộng hơn 3000m2 tại Vĩnh Phúc dây chuyền sản xuất hiện đại cùng với kinh nghiệm hơn 15 năm trong ngành sản xuất kim hoàn.
                        </p>
                    </div>
                    <div className="drop-shadow-[0_0_86px_rgba(0,0,0,0.1)]">
                    <Image 
                    src={Img3}
                    className="rounded-8 overflow-hidden"
                    layout='responsive'
                    />
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
    </Page>
  )
}
