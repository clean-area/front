import Image from "next/image";
import { BluePhrase, PurplePhrase } from "./Emphasis";

export default function PolicyBoxAtCategory() {
  return (
    <div className="w-full px-[12px] py-[18px]">
      <div className="flex">
        <div className="min-w-[104px] h-[104px] flex justify-center items-center bg-[#E8F5FF] rounded-[12px]">
          <Image
            src="https://i2-prod.liverpoolecho.co.uk/incoming/article26829395.ece/ALTERNATES/s1200/1_County-Cat-Rescue-and-Sanctuary-in-Walton-Photo-by-Colin-Lane.jpg"
            width={104}
            height={104}
            alt="cat"
          />
        </div>
        <div className="ml-[8px]">
          <div className="flex space-x-[8px]">
            <BluePhrase phrase={"생활지원"} />
            <BluePhrase phrase={"19 - 24세"} />
            <PurplePhrase phrase={"신청기간!"} />
          </div>
          <div className="whitespace-normal break-words">
            <p className="font-bold text-sm mt-1 leading-5 mb-2 leading-[22.4px]">
              청년활력 프로그램 운영 (청년활동지원센터 운영)
            </p>
            <p className="text-[12px] text-[#8E8E93] font-normal">
              {"신청기간 | 23.03.28 - 23.05.31"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
