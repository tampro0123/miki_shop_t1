import React, { useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { WhiteStar, YellowStar } from 'src/components/Icons';

export function RatingReview({ value, size }) {
  const yellowStar = <YellowStar size={size} />;
  const whiteStar = <WhiteStar size={size} />;
  return (
    <p className="inline-block">
      <span>{value >= 1 ? yellowStar : whiteStar}</span>
      <span>
        <i>{value >= 2 ? yellowStar : whiteStar}</i>
      </span>
      <span>
        <i>{value >= 3 ? yellowStar : whiteStar}</i>
      </span>
      <span>
        <i>{value >= 4 ? yellowStar : whiteStar}</i>
      </span>
      <span>
        <i>{value >= 5 ? yellowStar : whiteStar}</i>
      </span>
    </p>
  );
}


export const ratingValue = atom({
  key: 'ratingValue',
  default: null,
})

export const RatingStar = () => {
  const [rating, setRating] = useRecoilState(ratingValue);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <div
            className="inline-block"
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            key={i}
            onClick={() => {
              setRating(ratingValue);
            }}
          >
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={ratingValue}
            />
            <WhiteStar fill={ratingValue <= (hover || rating) ? '#FBBC05' : '#DADADA'} size={'h-[24px]'} />
          </div>
        );
      })}
    </div>
  );
};
