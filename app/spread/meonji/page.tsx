'use client';

import Image from 'next/image';
import ProgressBar from '../../components/ProgressBar';
import { ZeroOrOne, questions } from './questions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Interview() {
  const [level, setLevel] = useState(0);
  const [yesOrNo, setYesOrNo] = useState<'yes' | 'no' | undefined>(undefined);
  const router = useRouter();

  const checkLevel = (level: number): level is ZeroOrOne => {
    return level === 0 || level === 1;
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="flex min-h-[72px] items-center justify-center space-x-2 border-b-8 border-gray-1">
        <ProgressBar
          width={'70%'}
          percent={(level / (questions.length + 2)) * 100}
        />
        <p className="text-xs text-gray-7">건너뛰기</p>
      </div>

      <>
        <div className="flex min-h-[450px] flex-col items-start px-6 py-9">
          <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-gray-4 bg-gray-1 px-3 py-3">
            {checkLevel(level) && questions[level].phrases}
            {level === 2 &&
              yesOrNo &&
              questions[level][yesOrNo === 'yes' ? 0 : 1].phrases}
          </div>
          <div className="relative flex w-full justify-center">
            {checkLevel(level) && questions[level].meonji}
            {level === 2 &&
              yesOrNo &&
              questions[level][yesOrNo === 'yes' ? 0 : 1].meonji}
          </div>
        </div>
        <div
          className={`${
            checkLevel(level) && !questions[level].pick && 'cursor-pointer'
          } relative flex h-full flex-col items-center justify-center space-y-4`}
          role="bottomBox"
          onClick={
            checkLevel(level)
              ? () => setLevel((e) => e + 1)
              : level === 2
              ? () => router.push('./interview')
              : undefined
          }>
          <Image
            src={'/meonji-purple_spread background_ver2.jpg'}
            alt={'meonji'}
            width={450}
            height={500}
            className="absolute bottom-0 w-full"
          />
          {checkLevel(level) &&
            questions[level].pick?.map((el, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setYesOrNo(el.answer);
                  setLevel((e) => e + 1);
                }}
                className="z-10 w-[calc(100%-48px)] rounded-lg border-2 border-dashed border-gray-4 bg-[rgba(248,248,251,0.8)] py-6 hover:border-blue-0 hover:text-blue-0">
                {el.show}
              </button>
            ))}
          {checkLevel(level) && !questions[level].pick && (
            <p className="absolute bottom-5 text-xs text-[#7059FF]">
              해당 영역을 터치하여 대사를 스킵하세요
            </p>
          )}
        </div>
      </>
    </div>
  );
}
