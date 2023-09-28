"use client";

import { useState } from "react";
import SubMenuBar from "./SubMenuBar";
import DropDownRequire from "./DropDownRequire";
import Link from "next/link";

const targets = [
  "대상선택",
  "제한없음",
  "대학생",
  "구직",
  "재직",
  "이직준비",
  "시험준비",
  "프리랜서",
  "기타",
];

const ages = ["연령선택", "19 - 24", "25 - 29", "30 - 34", "35 - 39"];

export default function Head() {
  const [target, setTarget] = useState("대상선택");
  const [age, setAge] = useState("연령선택");

  return (
    <div className="flex flex-col space-y-[10px] mb-[10px]">
      <div className="flex items-center justify-between w-full px-[25px] h-[32px]">
        <div className="space-x-[12px]">
          <DropDownRequire
            list={targets}
            selected={target}
            setSelected={setTarget}
          />
          <DropDownRequire list={ages} selected={age} setSelected={setAge} />
        </div>
        <Link href={"search"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[20px] cursor-pointer"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
        </Link>
      </div>
      <SubMenuBar />
    </div>
  );
}
