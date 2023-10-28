'use client';

import { REVIEW_6_LIST } from '@/app/constant/const';
import { Review6 } from '@/app/type/writeReview';
import Image from 'next/image';
import { useState } from 'react';

export default function SelectRecommend() {
  const [alt, setAlt] = useState<Review6 | undefined>(undefined);

  return (
    <div className="mt-[24px] grid w-full grid-cols-3 gap-[20px]">
      {REVIEW_6_LIST.map((el) => (
        <button key={el.ph} onClick={() => setAlt(el.alt)}>
          <div
            className={`${
              alt === el.alt && 'border-blue-0 bg-blue-1'
            } flex aspect-square flex-col items-center justify-center rounded-[8px] border-[1px] border-[#D1D1D6]`}>
            <Image
              src={alt === el.alt ? el.src_color : el.src_gray}
              alt={el.alt}
              width={80}
              height={80}
            />
          </div>
          <p className="mt-[4px] w-full text-center text-[14px] font-bold text-[#8E8E93]">
            {el.ph}
          </p>
        </button>
      ))}
    </div>
  );
}
