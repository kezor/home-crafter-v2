import React, { ReactElement } from 'react';
import RatingStar from './ratingStar';

interface Props {
  rating: number;
  numberOfVotes: number;
}

const NUMBER_OF_STARS = 5;

export default function Ratings({
  rating,
  numberOfVotes,
}: Props): ReactElement {
  const stars = [];

  for (let index = 0; index < NUMBER_OF_STARS; index++) {
    stars.push(<RatingStar marked={rating >= index + 1} />);
  }

  return (
    <div className='mt-4'>
      <div className='flex items-center space-x-1'>
        {stars}
      </div>
      <p className='mt-1 text-sm text-gray-500'>
          Ocena {rating}/{NUMBER_OF_STARS} ({numberOfVotes} głosów) 
        </p>
    </div>
  );
}
