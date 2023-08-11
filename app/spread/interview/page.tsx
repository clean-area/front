'use client';

import ProgressBar from '../../components/ProgressBar';
import { questions } from './questions';
import { useState } from 'react';

export default function Interview() {
  const [level, setLevel] = useState(0);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex min-h-[72px] items-center justify-center space-x-2 border-b-8 border-gray-1">
        <ProgressBar width={'70%'} percent={(level / questions.length) * 100} />
        <p className="text-xs text-gray-7">건너뛰기</p>
      </div>

      <div className="flex min-h-[450px] flex-col items-start px-6 py-9">
        <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-4 bg-gray-1 px-3 py-3">
          {questions[level].phrases}
        </div>
        <div className="relative flex w-full justify-center">
          {questions[level].meonji}
        </div>
      </div>

      <div
        className={`${
          !questions[level].pick && 'cursor-pointer'
        } flex h-full flex-col items-center justify-center space-y-4 bg-[#D9D9D9]`}
        role="bottomBox"
        onClick={() => {
          setLevel((e) => e + 1);
        }}>
        {questions[level].pick?.map((el, idx) => (
          <button
            key={idx}
            className="w-[calc(100%-48px)] rounded-lg border-2 border-dashed border-gray-4 bg-gray-1 py-6 hover:border-blue-0 hover:text-blue-0">
            {el.show}
          </button>
        ))}
        {!questions[level].pick && (
          <p className="absolute bottom-5 text-xs text-gray-7">
            해당 영역을 터치하여 대사를 스킵하세요
          </p>
        )}
      </div>
    </div>
  );
}
