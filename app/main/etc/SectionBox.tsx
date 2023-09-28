import { ReactNode } from "react";

interface SecionBoxProps {
  title: ReactNode;
  url: string;
  children: ReactNode;
}

export default function SectionBox({ title, url, children }: SecionBoxProps) {
  return (
    <div className="w-full flex-col justify-center">
      <div className="px-[25px] w-full mt-[40px] mb-[16px] flex justify-between items-center">
        {title}
        <p className="text-[12px] text-[#8E8E93] cursor-pointer">전체보기</p>
      </div>
      {children}
    </div>
  );
}
