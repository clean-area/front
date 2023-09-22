import { NextButtonProps } from '@/app/type/interview';

export default function NextButton({ able, onclick }: NextButtonProps) {
  return (
    <button
      disabled={!able}
      onClick={onclick}
      className={`${
        able ? 'bg-blue-0' : 'bg-gray-1'
      } z-10 mx-6 mt-8 flex h-12 items-center justify-center rounded-lg px-7 py-4`}>
      <p
        className={`${
          able ? 'text-white' : 'text-gray-7'
        } text-base font-semibold`}>
        다음으로 넘어가기
      </p>
    </button>
  );
}
