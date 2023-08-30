'use client';

import Image from 'next/image';
import ProgressBar from '../../components/ProgressBar';
import { questions } from './questions';
import { useState } from 'react';
import { investigation } from '../interview/investigation';

export default function Interview() {
  const [level, setLevel] = useState(0);

  return (
    <div className="flex h-screen flex-col">
      <div className="flex min-h-[72px] items-center justify-center space-x-2 border-b-8 border-gray-1">
        <ProgressBar
          width={'70%'}
          percent={(level / questions.length + investigation.length) * 100}
        />
        <p className="text-xs text-gray-7">건너뛰기</p>
      </div>

      {level < 4 && (
        <>
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
            } relative flex h-full flex-col items-center justify-center space-y-4`}
            role="bottomBox"
            style={{ backgroundColor: questions[level].bottomBarImage.bgColor }}
            onClick={
              !questions[level].pick ? () => setLevel((e) => e + 1) : undefined
            }>
            <Image
              src={questions[level].bottomBarImage.url}
              alt={'meonji'}
              width={450}
              height={500}
              className="absolute bottom-0 w-full"
            />
            {questions[level].pick?.map((el, idx) => (
              <button
                key={idx}
                onClick={() => setLevel(el.setLevel)}
                className="z-10 w-[calc(100%-48px)] rounded-lg border-2 border-dashed border-gray-4 bg-[rgba(248,248,251,0.8)] py-6 hover:border-blue-0 hover:text-blue-0">
                {el.show}
              </button>
            ))}
            {!questions[level].pick && (
              <p className="absolute bottom-5 text-xs text-[#7059FF]">
                해당 영역을 터치하여 대사를 스킵하세요
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
