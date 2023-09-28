import EmptyStar from "./EmptyStar";
import FillHalfStar from "./FillHalfStar";
import FillStar from "./FillStar";

export default function ReviewBox() {
  return (
    <div className="py-[32px] px-[10px]">
      <div className="flex space-x-[8px]">
        <div className="w-[56px] h-[56px] bg-[#D9D9D9] rounded-[50%]"></div>
        <div className="grow">
          <div>
            <div className="flex justify-between items-center mt-[3px]">
              <p className="text-[12px] text-[#8E8E93]">2023년 신청자</p>
              <div className="flex justify-end space-x-[5px] grow">
                <FillStar />
                <FillStar />
                <FillStar />
                <FillHalfStar />
                <EmptyStar />
              </div>
            </div>
            <p className="text-[16px] text-[#1C1C1E] font-bold">
              김*정(서울,24세)
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-[8px] mt-[8px]">
        <p className="text-[14px] text-[#3592FF] font-bold">#강추!</p>
        <p className="text-[14px] text-[#3592FF] font-bold">#재신청_희망</p>
      </div>
      <p className="text-[14px] text-[#3A3A3C] font-bold mt-[8px]">
        텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍(48자이내)
      </p>
      <p className="text-[14px] text-[#3A3A3C] mt-[12px]">
        텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트
      </p>
    </div>
  );
}
