import Image from 'next/image'
import React from 'react'
import Img from 'src/assets/Career/career.jpg'
import { Chat, DoneRing, Lamp, Separate, StarLight } from 'src/components/Icons'
import Page from 'src/components/Page'

export default function Career() {
  return (
    <Page title='Career'>
    <div className='app'>
        <div className='container m-0'>
        <h1 className='text-[32px] font-bold leading-10 mb-[32px]'>Cơ hội việc làm tại Miki</h1>
        <Image
        src={Img}
        placeholder='blur'
        />
        <p className='mt-[32px] mb-5'>Tại Miki, chúng tôi tự hào mang đến những giá trị vô hình đến Khách hàng cũng như từng Thành viên.</p>
        <p className='mb-5'>
          <StarLight/>
          <span className=''>Sự hài lòng của nhân viên là ưu tiên hàng đầu và là nền tảng để mang lại sự hài lòng cho khách hàng</span>
        </p>
        <p className='mb-5'>
          <Chat/>
          <span className=''>Không ngừng tập trung vào khách hàng thông qua sự am hiểu tường tận và quan tâm chu đáo</span>
        </p>
        <p className='mb-5'>
            <DoneRing/>
          <span className=''>Tinh thần trách nhiệm đối với những mục tiêu đã cam kết, bất kể những trở ngại và thử thách</span>
        </p>
        <p className='mb-5'>
          <Lamp/>
          <span className=''>Không ngại đưa ra những cải tiến để nâng tầm hiệu quả công việc</span>
        </p>
        <p className="mt-9">Mọi hồ sơ xin việc xin gửi về email:
          <a href='mailto:Mikijewelry@gmail.com'>
            <span className="font-bold"> Mikijewelry@gmail.com</span>
          </a>
        </p>
        <div className='mt-[56px] flex justify-center'>
        <Separate/>
        </div>
        </div>
    </div>
    </Page>
  )
}
