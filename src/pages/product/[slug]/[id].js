import Image from 'next/image';
import Page from 'src/components/Page';
import Footer from 'src/layouts/footer';
import Header from 'src/layouts/header';
import Button from 'src/components/Button';
import { useState } from 'react';
import { Add, ImgAndVideo, Separate, Sub } from 'src/components/Icons';
import axios from 'axios';
import { RatingReview, RatingStar, ratingValue } from 'src/components/Rating/Rating';
import { useRecoilValue } from 'recoil';
import convertToBase64 from 'src/sections/handleAction/functionHanle/convertImg';

const DetailProduct = ({ product, productList, feedbacks }) => {
  const Images = product.images;
  const Rate1Star = feedbacks.filter((feedback) => feedback.rate == 1);
  const Rate2Star = feedbacks.filter((feedback) => feedback.rate == 2);
  const Rate3Star = feedbacks.filter((feedback) => feedback.rate == 3);
  const Rate4Star = feedbacks.filter((feedback) => feedback.rate == 4);
  const Rate5Star = feedbacks.filter((feedback) => feedback.rate == 5);

  const Tabs = ['Mô tả', 'Bảo hành và Hoàn trả', 'Vận chuyển', `Đánh giá`];
  const Rates = ['Tất cả', `5 Sao`, `4 Sao`, `3 Sao`, `2 Sao`, `1 Sao`];
  const [amount, setAmount] = useState(0);
  const [mainImg, setMainImg] = useState(Images[0].src);
  const rating = useRecoilValue(ratingValue);
  const [lengthText, setLengthText] = useState(0);
  const [textValue, setTextVaLue] = useState();
  const [sizeIndex, setSizeIndex] = useState();
  const [size, setSize] = useState();
  const [sizeQuantity, setSizeQuantity] = useState();
  const [stocking, setStocking] = useState(product.storage[0].quantity);
  let [price, setPrice] = useState(product.storage[0].price);
  const [warningMaxAmount, setWarningMaxAmount] = useState(false);
  const [warningChooseSize, setWarningChooseSize] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [rateIndex, setRateIndex] = useState(0);
  const [mediaCmt, setMediaCmt] = useState([]);
  const [typeCmt, setTypeCmt] = useState('');
  const [errSend, setErrSend] = useState('');
  const [ratingMessErr, setRatingMessErr] = useState(false);
  const [cmtMessErr, setCmtMessErr] = useState(false);
  const handleSubAmount = () => {
    amount > 0 && setAmount((prev) => prev - 1);
  };

  const handleAddAmount = () => {
    if (amount == Number(sizeQuantity)) {
      setWarningMaxAmount(true);
      setTimeout(() => {
        setWarningMaxAmount(false);
      }, 3000);
    }
    if (!size) {
      setWarningChooseSize(true);
      setTimeout(() => {
        setWarningChooseSize(false);
      }, 3000);
    }
    amount < sizeQuantity && setAmount((prev) => prev + 1);
  };

  const handleTextChange = (event) => {
    setLengthText(event.target.value.length);
    setTextVaLue(event.target.value);
  };

  const handleMouseLeaveImg = () => {
    setMainImg(Images[0].src);
  };
  const countStar = product.rating.rate;
  const handleImgCmt = async (e) => {
    if (e.target.files[0].type.includes('image')  ||  e.target.files[0].type.includes('video')) {
      const type = e.target.files[0].type.includes('image') ? 'image' : 'video';
      setTypeCmt(type);
      const file = e.target.files[0];
      const baseMedia = await convertToBase64(file);
      setMediaCmt(baseMedia);
    } else {
      setTypeCmt("Sai file");
    }
  };

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
      }).catch((err) => {
        setErrSend(err.response.data.message);
        setTimeout(() => {
          setErrSend('');
        }, 3000);
      });
    } else if (!rating) {
      setRatingMessErr(true);
      setTimeout(() => {
        setRatingMessErr(false);
      }, 3000);
    } else {
      setCmtMessErr(true);
      setTimeout(() => {
        setCmtMessErr(false);
      }, 3000);
    }
  };
  // /api/feedback/id
  return (
    <Page title={product.name}>
      <div className="app ">
        <Header />
        <div className="container m-0">
          <div className="flex justify-between">
            <div className="flex flex-col ">
              {Images.length < 3 ? (
                <div></div>
              ) : Images.length < 4 ? (
                <div className="flex flex-col min-h-[485px] justify-between">
                  <div className="mb-[12px] shadow-md overflow-hidden rounded-8 bg-white">
                    <Image src={Images[0].src} width="156" height="107" objectFit="cover" />
                  </div>
                  <div className="mb-[12px] shadow-md overflow-hidden rounded-8 bg-white">
                    <Image
                      src={Images[1].src}
                      width="156"
                      height="107"
                      objectFit="cover"
                      onMouseEnter={() => setMainImg(Images[1].src)}
                      onMouseLeave={handleMouseLeaveImg}
                    />
                  </div>
                  <div className="shadow-md overflow-hidden rounded-8 bg-white">
                    <Image
                      src={Images[2].src}
                      width="156"
                      height="107"
                      objectFit="cover"
                      onMouseEnter={() => setMainImg(Images[2].src)}
                      onMouseLeave={handleMouseLeaveImg}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-[12px] shadow-md overflow-hidden rounded-8 bg-white">
                    <Image src={Images[0].src} width="156" height="107" objectFit="cover" />
                  </div>
                  <div className="mb-[12px] shadow-md overflow-hidden rounded-8">
                    <Image
                      src={Images[1].src}
                      width="156"
                      height="107"
                      objectFit="cover"
                      onMouseEnter={() => setMainImg(Images[1].src)}
                      onMouseLeave={handleMouseLeaveImg}
                    />
                  </div>
                  <div className="mb-[12px] shadow-md overflow-hidden rounded-8 bg-white">
                    <Image
                      src={Images[2].src}
                      width="156"
                      height="107"
                      objectFit="cover"
                      onMouseEnter={() => setMainImg(Images[2].src)}
                      onMouseLeave={handleMouseLeaveImg}
                    />
                  </div>
                  <div className="shadow-md overflow-hidden rounded-8">
                    <Image
                      src={Images[3].src}
                      width="156"
                      height="107"
                      objectFit="cover"
                      onMouseEnter={() => setMainImg(Images[3].src)}
                      onMouseLeave={handleMouseLeaveImg}
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
                <span className="text-sm opacity-50 mr-2">{countStar}</span>
                {!countStar ? <span>Chưa có đánh giá</span> : <RatingReview value={countStar} />}
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
                {!product.discount ? (
                  <p className="text-price-text text-5xl font-bold mt-4">
                    {new Intl.NumberFormat('vi-VN').format(price)} đ
                  </p>
                ) : (
                  <div>
                    <span className="text-Neutral/2 text-2xl line-through">
                      {new Intl.NumberFormat('vi-VN').format(price)} đ
                    </span>
                    <div className="inline-block ml-[18px] mr-4 w-[2px] h-[16px] bg-Neutral/2 "></div>
                    <span className="text-white bg-[#A18A68] rounded-[4px] py-[4px] px-[7px] ">{`${product.discount} %`}</span>
                    <p className="text-price-text text-5xl font-bold mt-4">
                      {new Intl.NumberFormat('vi-VN').format(Math.floor(price -= (price * product.discount) / 100))} đ
                    </p>
                  </div>
                )}
              </div>
              <div className="flex mb-4 min-h-[100px]">
                <span className="text-lg w-[150px]">Kích thước:</span>
                <div className="inline-block ml-[60px]">
                  {product.storage.map((products, index) => (
                    <span
                      key={products.size}
                      className={
                        products.quantity > 0
                          ? index == sizeIndex
                            ? 'inline-block w-[42px] text-center bg-black text-white py-2 ml-[32px] rounded-8 border mb-2'
                            : 'py-2 inline-block w-[42px] text-center ml-[32px] rounded-8 border-solid border border-primary-text bg-white cursor-pointer mb-2'
                          : 'py-2 inline-block w-[42px] text-center ml-[32px] bg-[#a09d9d] rounded-8 mb-2'
                      }
                      onClick={() => {
                        if (products.quantity > 0) {
                          setSizeIndex(index);
                          setPrice(products.price);
                          setSize(products.size);
                          setSizeQuantity(products.quantity);
                          setStocking(products.quantity);
                          setAmount(0);
                        }
                      }}
                    >
                      {products.size}
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
                  <p className="text-[20px] font-bold leading-7 w-7 text-center mx-4">{amount}</p>
                  <button className="active:bg-black active:rounded-full" onClick={handleAddAmount}>
                    <Add />
                  </button>
                </div>
              </div>
              {warningMaxAmount && <span className="text-red-700 text-xs">Vượt quá số lượng trong kho</span>}
              {warningChooseSize && <span className="text-red-700 text-xs">Vui lòng chọn size</span>}
              <div className="flex absolute bottom-0">
                <Button primary className="hover-btn-primary mr-[48px] shadow-md">
                  Mua ngay
                </Button>
                <Button secondary className="outline outline-2 outline-btn shadow-md">
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-[70px]">
            {Tabs.map((tab, index) => (
              <span
                onClick={() => {
                  setTabIndex(index);
                }}
                key={tab}
                className={
                  tabIndex == index
                    ? 'text-xl font-bold text-primary/1 underline underline-offset-8 mr-[120px] cursor-not-allowed'
                    : 'text-xl font-bold text-Neutral/3 mr-[120px] cursor-pointer'
                }
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="mt-[44px]  relative">
            <div className={tabIndex == 0 ? 'block' : 'hidden'}>
              <h3 className="text-xl font-bold mb-2">Sản phẩm:</h3>
              <p className="text-lg text-justify">{product.description}</p>
            </div>
            <div className={tabIndex == 1 ? 'block' : 'hidden'}>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Chính sách bảo hành:</h3>
                  <p>(Áp dụng cho vàng 18k) </p>
                </div>
                <table className="table-fixed border-collapse border-primary-text border">
                  <thead>
                    <tr className="border-collapse border-primary-text border">
                      <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                        Nội dung
                      </th>
                      <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                        Thời gian
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-collapse border-primary-text border p-3">Làm sạch sản phẩm</td>
                      <td className="border-collapse border-primary-text border p-3">Trọn đời</td>
                    </tr>
                    <tr>
                      <td className="border-collapse border-primary-text border p-3">Đánh bóng và xi mới</td>
                      <td className="border-collapse border-primary-text border p-3">05 lần</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between mt-[32px]">
                <div>
                  <h3 className="text-xl font-bold mb-2">Phí bảo hành:</h3>
                </div>
                <table className="table-fixed border-collapse border-primary-text border">
                  <thead>
                    <tr>
                      <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                        Nội dung bảo hành
                      </th>
                      <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[400px] p-3">
                        Chi phí bảo hành (/lần)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-collapse border-primary-text border p-3">
                        Sửa độ rung với sản phẩm Ladanse
                      </td>
                      <td className="border-collapse border-primary-text border p-3">Làm mới sản phẩm</td>
                    </tr>
                    <tr>
                      <td className="border-collapse border-primary-text border p-3">200.000 đ</td>
                      <td className="border-collapse border-primary-text border p-3">50.000 đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lưu ý: </h3>
                <p className="text-red-500 text-lg">
                  Sản pẩm không còn nguyên vẹn hoặc mất hóa đơn, Miki sẽ thâu mua lại với 80% giá trị sản phẩm.
                </p>
                <p className="mt-3 text-red-500 text-lg">
                  Các sản pẩm trang sức bạc, mạ vàng, vòng đá, dây da các loại, chuỗi ngọc trai: Miki không mua lại!
                </p>
              </div>
            </div>
            <div className={tabIndex == 2 ? 'block' : 'hidden'}>
              <h3 className="text-xl font-bold mb-2">Chính sách vận chuyển</h3>
              <p>Với đối tác giao hàng uy tín, có mua bảo hiểm hàng hóa, thời gian giao hàng nhanh và đúng hẹn:</p>
              <table className="table-fixed border-collapse border-primary-text border ml-[90px] mt-6">
                <thead>
                  <tr>
                    <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[200px] p-3">
                      Khu vực
                    </th>
                    <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[300px] p-3">
                      Nội thành Hà Nội/TP Hồ Chí Minh
                    </th>
                    <th className="font-bold text-left text-primary/1 border-collapse border-primary-text border w-[200px] p-3">
                      Các tỉnh khác
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-collapse border-primary-text border p-3">Thời gian giao hàng</td>
                    <td className="border-collapse border-primary-text border p-3">2 ngày</td>
                    <td className="border-collapse border-primary-text border p-3">3-5 ngày</td>
                  </tr>
                </tbody>
              </table>
              <h3 className="text-xl text-[#D2311B] font-bold mb-2 mt-[30px]">***Lưu ý: </h3>
              <p>Với sản phẩm giảm giá khuyến mãi từ 20% trở lên khách hàng sẽ chịu hoàn toàn phí giao hàng.</p>
            </div>
            <div className={tabIndex == 3 ? 'block' : 'hidden'}>
              <div className="flex justify-between">
                <div className="w-[200px]">
                  <h3 className="text-xl font-bold mb-2">Đánh giá sản phẩm</h3>
                  <div className="flex">
                    {!countStar ? (
                      <span>Chưa có đánh giá</span>
                    ) : (
                      <div>
                        <RatingReview size={'h-[20px]'} value={countStar} />
                        <span className="font-bold text-xl ml-5">{product.rating.rate} sao</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap w-[800px]">
                  {Rates.map((rate, index) => (
                    <span
                      onClick={() => {
                        setRateIndex(index);
                      }}
                      key={rate}
                      className={
                        rateIndex == index
                          ? 'px-6 py-2 bg-white border rounded-8 border-primary/1 text-primary/1 mr-6 mb-6 cursor-not-allowed'
                          : 'px-6 py-2 bg-white border rounded-8 text-Neutral/3 border-Neutral/3 mr-6 mb-6 cursor-pointer'
                      }
                    >
                      {rate}
                    </span>
                  ))}
                </div>
              </div>
              {/* tab rating star */}
              <div className="mb-4 mt-5">
                <div className={rateIndex == 0 ? 'block' : 'hidden'}>
                  {feedbacks.length != 0 ? (
                    feedbacks.map((feedback, index) => {
                      return (
                        <div key={feedback.content} className="mb-9 w-full">
                          <div className="flex">
                            <div className="rounded-full overflow-hidden mr-3">
                              <Image
                                src={feedback.user.image}
                                width="54"
                                height="54"
                                placeholder="empty"
                                objectFit="cover"
                              />
                            </div>
                            <div>
                              <p>{feedback.user.username}</p>
                              <RatingReview value={feedback.rate} />
                              <p>{feedback.updatedAt}</p>
                            </div>
                            <div className="w-[2px] mx-4 h-[65px] bg-Neutral/2"></div>
                            <div>
                              <p className="font-bold">Nội dung bình luận:</p>
                              <p className="pl-3">{feedback.content}</p>
                            </div>
                          </div>
                          <div className="ml-[270px] mt-2">
                            {feedback.media.type == 'image' ? (
                              <a target={'blank'} href={feedback.media.src}>
                                <Image
                                  src={feedback.media.src}
                                  width="100"
                                  height="100"
                                  placeholder="empty"
                                  objectFit="cover"
                                />
                              </a>
                            ) : (
                              <a target={'blank'} href={feedback.media.src}>
                                <video className="w-[100px] h-[100px]">
                                  <source src={feedback.media.src} type="video/mp4"></source>
                                </video>
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="font-bold text-32 text-yellow-500 mt-6">
                      Hiện chưa có bình luận nào! Hãy trở thành người bình luận đầu tiên.{' '}
                    </p>
                  )}
                </div>
                <div className={rateIndex == 1 ? 'block' : 'hidden'}>
                  {Rate5Star.length != 0
                    ? Rate5Star.map((feedback, index) => {
                        return (
                          <div key={feedback.user.email} className="mb-9 w-full flex">
                            <div className="rounded-full overflow-hidden mr-3">
                              <Image
                                src={feedback.user.image}
                                width="54"
                                height="54"
                                placeholder="empty"
                                objectFit="cover"
                              />
                            </div>
                            <div>
                              <p>{feedback.user.username}</p>
                              <RatingReview value={feedback.rate} />
                              <p>{feedback.updatedAt}</p>
                            </div>
                            <div className="w-[2px] mx-4 h-[65px] bg-Neutral/2"></div>
                            <div>
                              <p className="font-bold">Nội dung bình luận:</p>
                              <p className="pl-3">{feedback.content}</p>
                            </div>
                          </div>
                        );
                      })
                    : ''}
                </div>
                <div className={rateIndex == 2 ? 'block' : 'hidden'}>
                  {Rate4Star.length != 0
                    ? Rate4Star.map((feedback, index) => {
                        return (
                          <div key={feedback.user.birthday} className="mb-9 w-full flex">
                            <div className="rounded-full overflow-hidden mr-3">
                              <Image
                                src={feedback.user.image}
                                width="54"
                                height="54"
                                placeholder="empty"
                                objectFit="cover"
                              />
                            </div>
                            <div>
                              <p>{feedback.user.username}</p>
                              <RatingReview value={feedback.rate} />
                              <p>{feedback.updatedAt}</p>
                            </div>
                            <div className="w-[2px] mx-4 h-[65px] bg-Neutral/2"></div>
                            <div>
                              <p className="font-bold">Nội dung bình luận:</p>
                              <p className="pl-3">{feedback.content}</p>
                            </div>
                          </div>
                        );
                      })
                    : ''}
                </div>
                <div className={rateIndex == 3 ? 'block' : 'hidden'}>
                  {Rate3Star.length != 0
                    ? Rate3Star.map((feedback, index) => {
                        return (
                          <div key={feedback.user.password} className="mb-9 w-full flex">
                            <div className="rounded-full overflow-hidden mr-3">
                              <Image
                                src={feedback.user.image}
                                width="54"
                                height="54"
                                placeholder="empty"
                                objectFit="cover"
                              />
                            </div>
                            <div>
                              <p>{feedback.user.username}</p>
                              <RatingReview value={feedback.rate} />
                              <p>{feedback.updatedAt}</p>
                            </div>
                            <div className="w-[2px] mx-4 h-[65px] bg-Neutral/2"></div>
                            <div>
                              <p className="font-bold">Nội dung bình luận:</p>
                              <p className="pl-3">{feedback.content}</p>
                            </div>
                          </div>
                        );
                      })
                    : ''}
                </div>
                <div className={rateIndex == 4 ? 'block' : 'hidden'}>
                  {Rate2Star.length != 0
                    ? Rate2Star.map((feedback, index) => {
                        return (
                          <div key={feedback.user.username} className="mb-9 w-full flex">
                            <div className="rounded-full overflow-hidden mr-3">
                              <Image
                                src={feedback.user.image}
                                width="54"
                                height="54"
                                placeholder="empty"
                                objectFit="cover"
                              />
                            </div>
                            <div>
                              <p>{feedback.user.username}</p>
                              <RatingReview value={feedback.rate} />
                              <p>{feedback.updatedAt}</p>
                            </div>
                            <div className="w-[2px] mx-4 h-[65px] bg-Neutral/2"></div>
                            <div>
                              <p className="font-bold">Nội dung bình luận:</p>
                              <p className="pl-3">{feedback.content}</p>
                            </div>
                          </div>
                        );
                      })
                    : ''}
                </div>
                <div className={rateIndex == 5 ? 'block' : 'hidden'}>
                  {Rate1Star.length != 0
                    ? Rate1Star.map((feedback, index) => {
                        return (
                          <div key={feedback.user.username.image} className="mb-9 w-full flex">
                            <div className="rounded-full overflow-hidden mr-3">
                              <Image
                                src={feedback.user.image}
                                width="54"
                                height="54"
                                placeholder="empty"
                                objectFit="cover"
                              />
                            </div>
                            <div>
                              <p>{feedback.user.username}</p>
                              <RatingReview value={feedback.rate} />
                              <p>{feedback.updatedAt}</p>
                            </div>
                            <div className="w-[2px] mx-4 h-[65px] bg-Neutral/2"></div>
                            <div>
                              <p className="font-bold">Nội dung bình luận:</p>
                              <p className="pl-3">{feedback.content}</p>
                            </div>
                          </div>
                        );
                      })
                    : ''}
                </div>
              </div>
              <div className="w-full min-h-[350px] bg-white px-[58px] py-[18px] rounded-[10px] shadow-md ">
                <div className="h-[70px]">
                  <h3>Đánh giá sản phẩm này</h3>
                  <RatingStar />
                  {ratingMessErr && <span className="text-red-600">Vui lòng Đánh giá sản phẩm</span>}
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
                  {cmtMessErr && <span className="text-red-600">Vui lòng bình luận sản phẩm</span>}
                  <span className="text-red-500 font-bold">{errSend}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold">Thêm hình ảnh/video sản phẩm nếu có:</span>
                  <input id="image" className="hidden" type="file" onChange={(e) => handleImgCmt(e)}></input>
                  <label htmlFor="image" className="inline-block cursor-pointer">
                    <ImgAndVideo />
                  </label>
                  <span className="font-bold text-xl">( {typeCmt })</span>
                </div>
                <Button onClick={handleSubmitCmt} primary className={'float-right hover-btn-primary shadow-md'}>
                  Gửi
                </Button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[60px]">
            <Separate />
          </div>
          <div className="grid grid-cols-4 gap-10  mt-[70px]">
          {productList.map((product, i) => {
              return (
                <div key={product?.name} className="flex flex-col-reverse text-center font-bold relative z-10 ">
                  <Button primary className="w-full mt-6 hover-btn-primary peer">
                    Thêm vào giỏ hàng
                  </Button>
                  <p className="text-price-text mt-[6px]">
                    {new Intl.NumberFormat('vi-VN').format(
                      Math.floor(product?.storage[0].price - (product?.storage[0].price * product.discount) / 100)
                    )}{' '}
                    đ
                  </p>
                  <p className="text-[20px] mt-6 text-trumcate2">{product.name}</p>
                  <div className="hover:shadow-product hover:scale-[1.01] shadow-md rounded-16 peer-hover:shadow-product relative">
                    <a href={`product/${product.category}/${product._id}`}>
                      <Image
                        src={product.images[0].src}
                        alt="Best seller product"
                        placeholder="empty"
                        width="254"
                        height="300"
                        layout="fixed"
                        className="rounded-16"
                      />
                    </a>
                    {product.discount ? (
                      <p className="absolute top-0 left-0 px-3 inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 ">
                        <span className="relative text-white">Sale</span>
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </Page>
  );
};

// export const getStaticPaths = async () => {
//   const res = await axios.get('http://localhost:3000/api/products/all');
//   const products = await res.data.product;
//   const paths = products.map((product) => {
//     return {
//       params: {
//         id: product._id,
//       },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const targetId = id;
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);
  const feedbacks = await axios.get(`http://localhost:3000/api/feedback/${targetId}`);
  const data = await axios.get('http://localhost:3000/api/products/all?page=1&limit=4');

  return {
    props: {
      productList: data.data.product,
      product: res.data.product,
      feedbacks: feedbacks.data.feedbacks,
    },
  };
};

export default DetailProduct;
