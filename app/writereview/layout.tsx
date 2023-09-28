import { ReactNode } from 'react';
import BackButton from '../main/etc/BackButton';

export default function WriteReviewLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="absolute top-0 min-h-screen w-full max-w-[410px] bg-white">
      <div className="flex h-[72px] w-full items-center justify-between border-b-[1px] border-[#D1D1D6] px-[25px]">
        <BackButton />
        <p className="text-[16px] font-semibold text-[#1C1C1E]">리뷰작성</p>
        <div />
      </div>
      <div className="h-screen w-full px-[25px] pb-[20px]">{children}</div>
    </div>
  );
}
