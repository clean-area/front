import { ReactNode } from 'react';
import BackButton from '../main/etc/BackButton';
import OptionButton from './etc/OptionButton';
import Link from 'next/link';

export default function DetailLayout({ children }: { children: ReactNode }) {
  return (
    <div className="absolute top-0 min-h-screen w-full max-w-[410px] bg-white">
      <div className="flex h-[72px] w-full items-center justify-between border-b-[1px] border-[#D1D1D6] px-[25px]">
        <BackButton />
        <p className="text-[16px] font-semibold text-[#1C1C1E]">상세정보</p>
        <OptionButton />
      </div>
      <div className="h-screen w-full px-[25px] pb-[20px]">{children}</div>
      <div className="fixed bottom-0 flex h-16 w-full max-w-[410px] items-center bg-white px-[25px]">
        <Link href={'/writereview/2'} className="w-full">
          <button className="h-12 w-full rounded-lg bg-blue-0 text-gray-1">
            후기 작성하기
          </button>
        </Link>
      </div>
    </div>
  );
}
