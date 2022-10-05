import Image from "next/image";
import FormatDate from "src/utils/formatDate";
import { RatingReview } from "../Rating";

export default function FeedbackItem({ Star,  feedbacks ,thisIndex, tabRateIndex }) {

  // split Stars feedback item
  let RatingStar = feedbacks;
  Star && (RatingStar = feedbacks.filter((feedback) => feedback.rate == Star) )
  
  return (
    <div>
      <div className={tabRateIndex == thisIndex ? 'block' : 'hidden'}>
        {RatingStar.length != 0
          && RatingStar?.map((feedback) => {
              return (
                <div key={Math.random()} className="w-full mb-5">
                  <div className="flex">
                    <div className=" overflow-hidden w-14">
                      <Image
                        src={feedback?.user?.avatar}
                        width="54"
                        height="54"
                        placeholder="empty"
                        objectFit="cover"
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p>{feedback?.user.username}</p>
                      <RatingReview value={feedback?.rate} />
                      <p>
                        <FormatDate date={feedback?.updatedAt} />
                      </p>
                    </div>
                    <div className="w-[2px] mx-4 h-[65px] bg-Neutral/2"></div>
                    <div>
                      <p className="font-bold">Nội dung bình luận:</p>
                      <p className="pl-3">{feedback.content}</p>
                    </div>
                  </div>
                  <div className="ml-[270px] mt-2">
                    {feedback?.media.type == 'image' && (
                      <a target={'blank'} href={feedback?.media.src}>
                        <Image
                          src={feedback.media.src}
                          width="100"
                          height="100"
                          placeholder="empty"
                          objectFit="cover"
                        />
                      </a>
                    )}
                    { feedback?.media.type == 'video' &&
                      (
                        <a target={'blank'} href={feedback?.media.src}>
                          <video className="w-[100px] h-[100px]">
                            <source src={feedback?.media.src} type="video/mp4"></source>
                          </video>
                        </a>
                      )
                    }
                  </div>
                </div>
              );
            })
          }
        {!Star && RatingStar.length == 0 && (
          <p className="font-bold text-32 text-yellow-500 mt-6">
            Hiện chưa có bình luận nào! Hãy trở thành người bình luận đầu tiên.{' '}
          </p>
        )}
      </div>
    </div>
  );
}
