"use client";

import { Dispatch, SetStateAction, useState } from "react";

interface DropDownProps {
  list: string[];
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export default function DropDownSort({
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
          className="inline-flex w-[68px] justify-center gap-x-[3px] rounded-[50px] px-[1px] py-[4.8px] bg-[#F8F8FB] text-[15px] text-[#3A3A3C] font-normal text-gray-900 flex items-center ring-[1px] ring-[#D1D1D6]"
          id="menu-button"
        >
          <p className="text-[12px]">{selected}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
            color="#D1D1D6"
          >
            <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-[#D1D1D6]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="divide-y-[1px] divide-[#D1D1D6]" role="none">
            {list.map((el, idx) => (
              <a
                key={idx}
                className={`${
                  el === selected
                    ? "text-[#3A3A3C] bg-[#D1D1D6]"
                    : "text-[#3A3A3C] bg-white"
                } ${idx === 0 && "rounded-t-xl"}  ${
                  idx === list.length - 1 && "rounded-b-xl"
                } text-gray-700 block px-4 py-2 font-normal text-center text-[12px] cursor-pointer`}
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
