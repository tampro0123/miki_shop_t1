import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import Button from 'src/components/Button';
import { ImgAndVideo } from 'src/components/Icons';
import { RatingStar, ratingValue } from 'src/components/Rating'
import convertToBase64 from '../handleAction/functionHandle/convertImg';

export default function RatingProduct({ product}) {
    const router = useRouter();
  // value of rating cmt
  const [lengthText, setLengthText] = useState(0);
  const [textValue, setTextVaLue] = useState();
  const [mediaCmt, setMediaCmt] = useState([]);
  const [typeCmt, setTypeCmt] = useState('');
  
  const rating = useRecoilValue(ratingValue);

  const [err, setErr] = useState({ errSend: '', ratingMessErr: false, cmtMessErr: false });

  const handleSubmitCmt = async () => {
    if (rating && textValue) {
      const res = await axios({
        method: 'POST',
        url: '/api/feedback',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          rate: rating,
          content: textValue,
          userId: '62f775840fda632100da4db3',
          targetId: product._id,
          media: { type: typeCmt, src: mediaCmt },
        },
      })
      .then(() => {
        router.reload(undefined,{scroll: false});
      })
      .catch((error) => {
        setErr({...err , errSend: error.response.data.message})
        setTimeout(() => {
            setErr({...err , errSend: ''})

        }, 3000);
      });
    } else if (!rating) {
        setErr({...err , ratingMessErr: true})
      setTimeout(() => {
        setErr({...err , ratingMessErr: false})
      }, 3000);
    } else {
        setErr({...err , cmtMessErr: true})
      setTimeout(() => {
        setErr({...err , cmtMessErr: false})
      }, 3000);
    }
  };

  const handleImgCmt = async (e) => {
    if (e.target.files[0].type.includes('image') || e.target.files[0].type.includes('video')) {
      const type = e.target.files[0].type.includes('image') ? 'image' : 'video';
      setTypeCmt(type);
      const file = e.target.files[0];
      const baseMedia = await convertToBase64(file);
      setMediaCmt(baseMedia);
    } else {
      setTypeCmt('Sai file');
    }
  };
  const handleTextChange = (event) => {
    setLengthText(event.target.value.length);
    setTextVaLue(event.target.value);
  };

  return (
    <div>
        <div className="w-full min-h-[350px] bg-white px-[58px] py-[18px] rounded-[10px] shadow-md ">
            <div className="h-[70px]">
              <h3>Đánh giá sản phẩm này</h3>
              <RatingStar />
              {err.ratingMessErr && <span className="text-red-600">Vui lòng Đánh giá sản phẩm</span>}
            </div>
            <div className="flex justify-between mt-4">
              <span className="font-bold">Bình luận*</span>
              <span>{`Ký tự còn lại: ${250 - lengthText}`}</span>
            </div>
            <div className="h-[95px]">
              <textarea
                maxLength="250"
                className="w-full min-h-[70px] px-3 py-2 rounded-8 border border-l border-black"
                placeholder="Nhập mô tả tại đây"
                onChange={handleTextChange}
              />
              {err.cmtMessErr && <span className="text-red-600">Vui lòng bình luận sản phẩm</span>}
              <span className="text-red-500 font-bold">{err.errSend}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold">Thêm hình ảnh/video sản phẩm nếu có:</span>
              <input id="image" className="hidden" type="file" onChange={(e) => handleImgCmt(e)}></input>
              <label htmlFor="image" className="inline-block cursor-pointer">
                <ImgAndVideo />
              </label>
              <span className="font-bold text-xl">( {typeCmt})</span>
            </div>
            <Button onClick={handleSubmitCmt} primary className={'float-right hover-btn-primary shadow-md'}>
              Gửi
            </Button>
          </div>
    </div>
  )
}
