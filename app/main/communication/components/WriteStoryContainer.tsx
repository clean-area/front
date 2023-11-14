'use client';

import { InterestClass } from '@/app/type/interview';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import TagChip from './TagChip';

export default function WriteStoryContainer() {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [tags, setTags] = useState<InterestClass[]>([]);
  useEffect(() => {
    const cur = ref.current;
    function OnInput(this: HTMLTextAreaElement) {
      this.style.height = '0';
      this.style.height = this.scrollHeight + 'px';
    }
    if (cur) {
      cur.setAttribute(
        'style',
        'height:' + cur.scrollHeight + 'px;overflow-y:hidden;'
      );
      cur.addEventListener('input', OnInput, false);
    }
  }, [ref]);

  return (
    <>
      <div className="px-[25px] pb-7 pt-4">
        <form>
          <div className="mb-4 flex flex-wrap gap-x-2 gap-y-[21px]">
            {tags.map((el) => (
              <div key={el}>
                <TagChip tag={el} activate />
              </div>
            ))}
          </div>
          <div className="mb-4 flex justify-between border-b-2 pb-5">
            <div className="h-12 w-12 shrink rounded-[50%] bg-profile-1" />
            <textarea
              ref={ref}
              placeholder="함께 이야기를 나눠보세요"
              className="h-10 w-[calc(100%-72px)] resize-none pt-2 focus:outline-none"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <ImageIcon />
              <button
                className="relative"
                onClick={(e) => {
                  e.preventDefault();
                }}>
                <ListCheckIcon />
                <SelectTagModal tags={tags} setTags={setTags} />
              </button>
            </div>
            <button className="border-1 rounded-2xl border border-blue-0 px-4 py-1 font-semibold text-blue-0">
              업로드하기
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function ImageIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6">
        <path
          d="M2.9918 21C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918ZM20 15V5H4V19L14 9L20 15ZM20 17.8284L14 11.8284L6.82843 19H20V17.8284ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"
          fill="#3592FF"></path>
      </svg>
    </>
  );
}

function ListCheckIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6">
        <path
          d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z"
          fill="#3592FF"></path>
      </svg>
    </>
  );
}

const TAG: InterestClass[] = [
  '일자리',
  '주거',
  '금융복지',
  '교육·문화',
  '건강관리',
];

function SelectTagModal({
  tags,
  setTags,
}: {
  tags: InterestClass[];
  setTags: Dispatch<SetStateAction<InterestClass[]>>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    ref.current?.parentElement?.addEventListener('focus', (e) =>
      setIsOpen(true)
    );
    ref.current?.parentElement?.addEventListener('focusout', (e) => {
      setIsOpen(false);
    });
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`${
          !isOpen && 'hidden'
        } absolute top-8 w-[320px] cursor-auto rounded-xl bg-white p-6 pt-4 drop-shadow-xl`}>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">대표 태그를 선택해 주세요</p>
          <div
            onClick={() => {
              ref.current?.parentElement?.blur();
              setIsOpen(false);
            }}
            className="cursor-pointer">
            <CloseCircleIcon />
          </div>
        </div>
        <div className="my-4 h-[1px] w-full bg-gray-4" />
        <div className="flex flex-wrap gap-x-2 gap-y-[21px]">
          {TAG.map((el) => (
            <div
              key={el}
              className="cursor-pointer"
              onClick={() =>
                setTags((e) => {
                  if (e.includes(el)) return e.filter((t) => t !== el);
                  return [...e, el];
                })
              }>
              <TagChip tag={el} activate={tags.includes(el)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function CloseCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-6 w-6">
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
    </svg>
  );
}
