import Image from "next/image";
import Link from "next/link";

export default function PolicyBoxAtHome() {
  return (
    <Link href={"/detail/3"}>
      <div className="w-[164px] cursor-pointer">
        <div className="w-[164px] h-[164px] flex justify-center items-center bg-[#E8F5FF] rounded-[12px]">
          <Image
            src="https://i2-prod.liverpoolecho.co.uk/incoming/article26829395.ece/ALTERNATES/s1200/1_County-Cat-Rescue-and-Sanctuary-in-Walton-Photo-by-Colin-Lane.jpg"
            width={164}
            height={164}
            alt="cat"
          />
        </div>

        <div className="flex space-x-[8px] mt-[8px]">
          <p className="py-[2px] px-[8px] bg-[#E8F5FF] rounded-[40px] text-[12px] font-bold text-[#3592FF]">
            {"생활지원"}
          </p>
          <p className="py-[2px] px-[8px] bg-[#E8F5FF] rounded-[40px] text-[12px] font-bold text-[#3592FF]">
            {"19 - 24세"}
          </p>
        </div>
        <p className="font-bold text-[14px] mt-[6px] overflow-hidden whitespace-nowrap overflow-ellipsis leading-[22px] mb-[8px]">
          {"청년 대중교통비 지원 사업"}
        </p>
        <p className="text-[12px] text-[#8E8E93] font-normal">
          {"신청기간| 23.03.28 - 23.05.31"}
        </p>
      </div>
    </Link>
  );
}
