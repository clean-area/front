import Image from 'next/image';

export default function Spread() {
  return (
    <div className="flex h-full flex-col items-center py-[100px]">
      <p className="font-bold text-blue-2">청년 정책 후기 플랫폼</p>
      <h1 className="mt-2 text-5xl font-bold text-blue-0">청정구역</h1>
      <p className="mt-6">
        청정구역과 함께 정책들을 <span className="font-bold">싹쓸이</span>
        해봐요!
      </p>
      <div className="relative mt-[70px]">
        <Image
          className="relative left-2 "
          src="/meonji-character_greeting brightly.png"
          width={214}
          height={214}
          alt="meonji"
        />
        <div className="absolute left-2 top-[-10px] flex h-[34px] w-[84px] items-center justify-center rounded-lg border-2 border-dashed border-gray-4 bg-gray-1">
          <p className="text-[15px] font-bold">반가워요!</p>
          <Image
            className="absolute right-[-20px] top-[-20px] rotate-[25deg]"
            src="/meonji-component_ soles.png"
            width={40}
            height={40}
            alt="foot"
          />
        </div>
      </div>
      <button className="absolute bottom-[100px] flex h-12 w-[calc(100%-50px)] max-w-[450px] items-center justify-center space-x-3 rounded-lg bg-[#FFE500] active:bg-[#FADA0A]">
        <Image
          className=""
          src="/kakao icon.png"
          width={26}
          height={24}
          alt="foot"
        />
        <p className="font-semibold leading-[25.6px] text-[#3C1E1E]">
          카카오로 5초만에 시작하기
        </p>
      </button>
    </div>
  );
}
