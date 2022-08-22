import Image from 'next/image';
import React from 'react';
import BestSeller from 'public/static/Home/LatestAlbumSection/latest-album-img.jpg';
import Button from 'src/components/Button';
import { useRouter } from 'next/router';

export default function LatestAlbum() {
  const router = useRouter()
  const handleClickBtn = () => {
    router.push('/aboutus/brandandhistory')
  }
  return (
    <div className="h-[732px] w-full relative mt-[120px] text-white ">
      <Image
        src={BestSeller}
        alt="nice girl"
        layout="fixed"
        width="1440"
        height="732px"
        objectFit="contain"
        className="-z-10 absolute bottom-0"
      />
      <p className="absolute w-[352px] h-[84px] top-[353px] left-[250px] ">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
        velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
      <Button onClick={handleClickBtn} secondary className=" py-3 px-[32px] z-30 absolute left-[250px]  top-[500px]">
        Tìm hiểu thêm
      </Button>
    </div>
  );
}
