"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface DropDownProps {
  list: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export default function DropDownRequire({
  list,
  selected,
  setSelected,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen((e) => !e)}
          type="button"
          className="inline-flex w-[102px] justify-center gap-x-1.5 rounded-[50px] px-3 py-[4.8px] bg-[#E8F5FF] text-[15px] text-[#3A3A3C] font-semibold text-gray-900 flex items-center"
          id="menu-button"
        >
          <p className="w-[60px]">{selected}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 bg-[#3592FF] rounded-[50%]"
          >
            <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-[#3592FF]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="divide-y-[1px] divide-[#3592FF]" role="none">
            {list.map((el, idx) => (
              <a
                key={idx}
                className={`${
                  el === selected
                    ? "text-white bg-[#3592FF]"
                    : "text-[#3A3A3C] bg-white"
                } ${idx === 0 && "rounded-t-xl"}  ${
                  idx === list.length - 1 && "rounded-b-xl"
                } text-gray-700 block px-4 py-2 text-sm font-semibold text-center text-[15px] cursor-pointer`}
                role="menuitem"
                id="menu-item-0"
                onClick={() => {
                  setSelected(el);
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 50);
                }}
              >
                {el}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
