import React from 'react';
import FeedbackItem from 'src/components/Feedbacks/FeedbackItem';

export default function FeedbackContainer({ feedbacks, tabRateIndex }) {
  // const Rates = ['Tất cả', `5 Sao`, `4 Sao`, `3 Sao`, `2 Sao`, `1 Sao`];
  // Order of Star Rating 
  const Stars = [0 , 5, 4, 3, 2, 1]

  return (
    <div className="mb-4 mt-5">
      {[...Array(6)].map((_, index) => {
        return(
          <FeedbackItem key={index} feedbacks={feedbacks} thisIndex={index} tabRateIndex={tabRateIndex}  Star={Stars[index]}  />
        )
      })}
    </div>
  );
}
