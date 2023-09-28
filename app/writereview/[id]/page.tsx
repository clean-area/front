import EmptyStar from '@/app/detail/etc/EmptyStar';

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
        <div className="mt-[24px] grid w-full grid-cols-3 gap-[20px]">
          <div className="flex aspect-square flex-col items-center justify-center rounded-[8px] border-[1px] border-[#D1D1D6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[35px]"
              fill="#D1D1D6">
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 11C10 11 8.33333 11.3333 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C15.6667 11.3333 14 11 12 11ZM8.5 7C7.34792 7 6.37786 7.77929 6.08818 8.8395L6.04989 9.00057H10.9501C10.7187 7.85917 9.70968 7 8.5 7ZM15.5 7C14.3479 7 13.3779 7.77929 13.0882 8.8395L13.0499 9.00057H17.9501C17.7187 7.85917 16.7097 7 15.5 7Z"></path>
            </svg>
            <p className="mt-[7px] text-[14px] font-bold text-[#8E8E93]">
              강추!
            </p>
          </div>
          <div className="flex aspect-square flex-col items-center justify-center rounded-[8px] border-[1px] border-[#D1D1D6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[35px]"
              fill="#D1D1D6">
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM8 14V16H16V14H8ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"></path>
            </svg>
            <p className="mt-[7px] text-[14px] font-bold text-[#8E8E93]">
              추천
            </p>
          </div>
          <div className="flex aspect-square flex-col items-center justify-center rounded-[8px] border-[1px] border-[#D1D1D6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[35px]"
              fill="#D1D1D6">
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 17H9C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17H17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"></path>
            </svg>
            <p className="mt-[7px] text-[14px] font-bold text-[#8E8E93]">
              아쉬움
            </p>
          </div>
          <div className="flex aspect-square flex-col items-center justify-center rounded-[8px] border-[1px] border-[#D1D1D6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[35px]"
              fill="#D1D1D6">
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM8 13C8 15.2091 9.79086 17 12 17C14.2091 17 16 15.2091 16 13H8Z"></path>
            </svg>

            <p className="mt-[7px] text-[14px] font-bold text-[#8E8E93]">
              재신청_희망
            </p>
          </div>
          <div className="flex aspect-square flex-col items-center justify-center rounded-[8px] border-[1px] border-[#D1D1D6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[35px]"
              fill="#D1D1D6">
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13H15C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13H7ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"></path>
            </svg>
            <p className="mt-[7px] text-[14px] font-bold text-[#8E8E93]">
              기대중!
            </p>
          </div>
          <div className="flex aspect-square flex-col items-center justify-center rounded-[8px] border-[1px] border-[#D1D1D6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[35px]"
              fill="#D1D1D6">
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 13.6169 21.6162 15.1442 20.9348 16.4958C20.8633 16.2175 20.7307 15.9523 20.5374 15.7206L20.4142 15.5858L19 14.1716L17.5858 15.5858L17.469 15.713C16.8069 16.4988 16.8458 17.6743 17.5858 18.4142C18.014 18.8424 18.588 19.0358 19.148 18.9946C17.3323 20.8487 14.8006 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 15C10.6199 15 9.37036 15.5592 8.46564 16.4633L8.30009 16.6368L9.24506 17.4961C10.035 17.1825 10.982 17 12 17C12.9049 17 13.7537 17.1442 14.4859 17.3965L14.7549 17.4961L15.6999 16.6368C14.7853 15.6312 13.4664 15 12 15ZM8.5 10C7.67157 10 7 10.6716 7 11.5C7 12.3284 7.67157 13 8.5 13C9.32843 13 10 12.3284 10 11.5C10 10.6716 9.32843 10 8.5 10ZM15.5 10C14.6716 10 14 10.6716 14 11.5C14 12.3284 14.6716 13 15.5 13C16.3284 13 17 12.3284 17 11.5C17 10.6716 16.3284 10 15.5 10Z"></path>
            </svg>
            <p className="mt-[7px] text-[14px] font-bold text-[#8E8E93]">
              사용_어려움
            </p>
          </div>
        </div>
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
