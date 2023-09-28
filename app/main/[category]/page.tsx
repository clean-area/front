"use client";

import { useState } from "react";
import DropDownSort from "../etc/DropDownSort";
import PolicyBoxAtCategory from "../etc/PolicyBoxAtCategory";

interface PageProps {
  params: {
    category: string;
  };
}

const list = ["추천순", "최신순"];

export default function CategoryPage({ params }: PageProps) {
  const [sort, setSort] = useState("추천순");

  return (
    <div className="w-full max-w-[410px] px-[25px] flex-col">
      <div className="w-full flex justify-end mb-[2px]">
        <DropDownSort list={list} selected={sort} setSelected={setSort} />
      </div>
      <div className="w-full flex-col divide-y-[1px] divide-[#D1D1D6]">
        <PolicyBoxAtCategory />
        <PolicyBoxAtCategory />
        <PolicyBoxAtCategory />
        <PolicyBoxAtCategory />
        <PolicyBoxAtCategory />
        <div className="w-full flex flex-col justify-center items-center pt-[16px] pb-[50px]">
          <p className="text-[14px] text-[#8E8E93]">
            OO구역은 여기까지예요! 다른 구역도 알아보시겠어요?
          </p>
          <p className="text-[14px] text-[#3592FF] font-bold border-b-[2px] border-[#3592FF] pb-[6px] pt-[4px]">
            OO구역으로 이동하기
          </p>
        </div>
      </div>
    </div>
  );
}
