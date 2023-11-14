import EmptyStar from '@/app/detail/etc/EmptyStar';
import FillStar from '@/app/detail/etc/FillStar';
import { Dispatch, SetStateAction } from 'react';

interface SetStarRating {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

export default function SetStarRating({ score, setScore }: SetStarRating) {
  return (
    <div className="mt-[28.5px] flex space-x-[17.76px]">
      <div onClick={() => setScore(1)}>
        {score > 0 ? <FillStar bigSize /> : <EmptyStar bigSize />}
      </div>
      <div onClick={() => setScore(2)}>
        {score > 1 ? <FillStar bigSize /> : <EmptyStar bigSize />}
      </div>
      <div onClick={() => setScore(3)}>
        {score > 2 ? <FillStar bigSize /> : <EmptyStar bigSize />}
      </div>
      <div onClick={() => setScore(4)}>
        {score > 3 ? <FillStar bigSize /> : <EmptyStar bigSize />}
      </div>
      <div onClick={() => setScore(5)}>
        {score > 4 ? <FillStar bigSize /> : <EmptyStar bigSize />}
      </div>
    </div>
  );
}
