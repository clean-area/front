import SelectRecommend from '@/app/components/select/SelectRecommend';
import EmptyStar from '@/app/detail/etc/EmptyStar';
import Image from 'next/image';

export default function WriteReviewPage() {
  const years = [];
  for (let i = 1990; i < 2022; i++) years.push(i);

  return (
    <div className="divide-y-[1px] divide-[#D1D1D6]">
      <div className="flex flex-col items-center justify-center pb-[38px] pt-[20px]">
        <p className="text-[16px] font-semibold text-[#1C1C1E]">
          정책에 대해 만족하셨나요?
        </p>
        <p className="mt-[4px] text-[14px] text-[#48484A]">
          청년활력 프로그램 운영 (청년활동지원센터 운영)
        </p>
        <div className="mt-[28.5px] flex space-x-[17.76px]">
          <EmptyStar bigSize />
          <EmptyStar bigSize />
          <EmptyStar bigSize />
          <EmptyStar bigSize />
          <EmptyStar bigSize />
        </div>
      </div>

      <div className="pb-[38px] pt-[20px]">
        <div className="flex items-center space-x-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="inline w-[20px]">
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
          </svg>
          <p className="text-[16px] font-bold text-[#3A3A3C]">
            회원 정보를 입력해주세요
          </p>
        </div>
        <p className="mt-[8px] text-[12px] text-[#3592FF]">
          * 회원님의 연령과 성별을 통해, 캐릭터 프로필이 생성됩니다!
        </p>
        <input
          type="text"
          placeholder="이름"
          className="mt-[20px] w-full rounded-[8px] border-[1px] border-[#D1D1D6] px-[16px] py-[6px] text-[15px] leading-[24px] text-[#8E8E93]"
        />
        <div className="mt-[16px] flex divide-x-[1px]">
          <div className="flex w-[50%]">
            <div className="relative inline-block w-[95%]">
              <select
                id="birthYear"
                className="w-full appearance-none rounded-[8px] border-[1px] border-[#D1D1D6] bg-transparent px-[12px] py-[6px] text-[15px] leading-[24px] text-[#8E8E93]">
                <option selected>생년(4자)</option>
                {years.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#8E8E93]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[13.5px]"
                  fill="#8E8E93">
                  <path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex w-[50%] justify-end">
            <div className="relative inline-block w-[95%]">
              <select
                id="birthYear"
                className="w-full appearance-none rounded-[8px] border-[1px] border-[#D1D1D6] bg-transparent px-[12px] py-[6px] text-[15px] leading-[24px] text-[#8E8E93]">
                <option selected>성별</option>
                <option value="man">남</option>
                <option value="woman">여</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#8E8E93]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-[13.5px]"
                  fill="#8E8E93">
                  <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-[38px] pt-[20px]">
        <div className="flex items-center space-x-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="inline w-[20px]">
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
          </svg>
          <p className="text-[16px] font-bold text-[#3A3A3C]">
            신청 년도는 어떻게 되나요?
          </p>
        </div>
        <p className="mt-[8px] text-[12px] text-[#3592FF]">
          * 이 정책을 몇년도에 신청하셨나요?
        </p>

        <div className="relative mt-[20px] inline-block w-full">
          <select
            id="birthYear"
            className="w-full appearance-none rounded-[8px] border-[1px] border-[#D1D1D6] bg-transparent px-[12px] py-[6px] text-[15px] leading-[24px] text-[#8E8E93]">
            <option selected>년도(4자)</option>
            {years.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#8E8E93]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[13.5px]"
              fill="#8E8E93">
              <path d="M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="pb-[38px] pt-[20px]">
        <div className="flex items-center space-x-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="inline w-[20px]">
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
          </svg>
          <p className="text-[16px] font-bold text-[#3A3A3C]">
            정책 후기를 남겨주세요!
          </p>
        </div>
        <input
          type="text"
          placeholder="한 줄 요약을 입력해주세요"
          className="mt-[20px] w-full rounded-[8px] border-[1px] border-[#D1D1D6] px-[16px] py-[6px] text-[15px] leading-[24px] text-[#3592FF] placeholder-[#3592FF]"
        />
        <textarea
          placeholder="정책에 대해 상세히 평가해주세요"
          className="mt-[16px] min-h-[120px] w-full resize-none rounded-[8px] border-[1px] border-[#D1D1D6] px-[16px] py-[12px] text-[15px] leading-[24px] text-[#8E8E93]"></textarea>
      </div>

      <div className="flex flex-col items-center justify-center pb-[38px] pt-[20px]">
        <p className="text-[12px] text-[#3592FF]">이제 마지막 단계예요!</p>
        <p className="mt-[8px] text-[16px] font-bold text-[#3A3A3C]">
          이번 정책 어떠셨나요?
        </p>
        <SelectRecommend />
        <button className="mt-[40px] w-full rounded-[8px] bg-[#3592FF] py-[6px] text-[15px] font-semibold leading-[24px] text-[white]">
          후기 작성 완료
        </button>
        <p className="mb-[40px] mt-[12px] text-[12px] text-[#3592FF]">
          소중한 후기 남겨주셔서 감사합니다
        </p>
      </div>
    </div>
  );
}
