'use client';

import { useState } from 'react';

export default function RecommendPolicy() {
  const [open, setIsOpen] = useState(true);

  if (!open) return <></>;
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-[rgb(0,0,0,0.8)]">
      <div className="z-[20] mx-6 mt-10 flex w-full max-w-[410px] flex-col items-center rounded-xl border-2 border-dashed border-gray-4 bg-white px-6 py-8">
        <h1 className="mb-3 text-lg font-semibold">
          털이님께 드리는 추천 정책!
        </h1>
        <p className="mb-6 text-center text-gray-8">
          먼지가 열심히 털어왔어요 🧹
        </p>
        <div className="mb-4 flex w-full flex-col gap-4">
          <Card color="blue" />
          <Card color="purple" />
          <Card color="yellow" />
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className={`mx-6 mt-6 flex h-12 w-full items-center justify-center rounded-lg bg-blue-0 px-7 py-4`}>
          <p className={`text-base font-semibold text-white`}>
            다음으로 넘어가기
          </p>
        </button>
      </div>
    </div>
  );
}

function Card({ color }: { color: 'blue' | 'purple' | 'yellow' }) {
  return (
    <div className="flex w-full">
      <div className="w-full rounded-l-xl bg-white px-4 py-5 drop-shadow-md">
        <h1 className="mb-1 font-semibold text-gray-8">
          청년활력 프로그램 운영
        </h1>
        <p className="mb-3 text-xs text-gray-7">
          신청기간| 23.01.01 - 23.12.31
        </p>
        <div className="flex gap-x-2">
          <p
            className={`${color === 'blue' && 'bg-blue-1 text-blue-0'} ${
              color === 'purple' && 'bg-purple-1 text-purple-3'
            } ${
              color === 'yellow' && 'bg-yellow-1 text-yellow-5'
            } rounded-2xl px-2 py-0.5 text-xs`}>
            일자리
          </p>
          <p
            className={`${color === 'blue' && 'bg-blue-1 text-blue-0'} ${
              color === 'purple' && 'bg-purple-1 text-purple-3'
            } ${
              color === 'yellow' && 'bg-yellow-1 text-yellow-5'
            } rounded-2xl px-2 py-0.5 text-xs`}>
            19 - 39세
          </p>
        </div>
      </div>
      <div
        className={`${color === 'blue' && 'bg-blue-0'} ${
          color === 'purple' && 'bg-purple-3'
        } ${color === 'yellow' && 'bg-yellow-5'} w-[40px] rounded-r-xl`}></div>
    </div>
  );
}
