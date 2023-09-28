import Image from "next/image";

export default function OneLineCommentContent() {
  return (
    <div className="shrink-0 max-w-[360px] w-[calc(100vw-50px)]">
      <div className="w-full h-[47px] rounded-t-[15px] border-[1px] border-b-0 border-[#3592FF] bg-[#E8F5FF] flex justify-center items-center text-[15px] text-[#3592FF] font-bold">
        <p>청년활력 프로그램 운영 (청년활동지원센터 운영)</p>
      </div>
      <div className="w-full h-[197px] rounded-b-[15px] border-[1px] border-[#3592FF] py-[12px] px-[16px] flex flex-col">
        <div className="flex">
          <Image
            className="rounded-[50%]"
            src={
              "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_800,h_800/https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-2.jpg"
            }
            width={56}
            height={56}
            alt="profile"
          />
          <div className="ml-[8px]">
            <p className="text-[12px] text-[#8E8E93] font-normal mt-[1px]">
              2023년 신청자
            </p>
            <p className="text-[16px] text-[#1C1C1E] font-bold">
              김*정(서울,24세)
            </p>
          </div>
        </div>
        <p className="mt-[3px] text-[15px] text-[#3A3A3C]">
          텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍(48자이내)
        </p>
        <div className="flex mt-[12px] space-x-[8px]">
          <p className="text-[14px] text-[#3592FF] font-bold">{"#일자리"}</p>
          <p className="text-[14px] text-[#3592FF] font-bold">{"#강추!"}</p>
          <p className="text-[14px] text-[#3592FF] font-bold">
            {"#재신청_희망"}
          </p>
        </div>
      </div>
    </div>
  );
}
