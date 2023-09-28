import { BluePhrase, PurplePhrase } from '@/app/main/etc/Emphasis';
import FillStar from '../etc/FillStar';
import FillHalfStar from '../etc/FillHalfStar';
import EmptyStar from '../etc/EmptyStar';
import ReviewBox from '../etc/ReviewBox';
import Image from 'next/image';
import Link from 'next/link';

interface DetailPageProps {
  params: {
    id: number;
  };
}

export default function DetailPage({ params }: DetailPageProps) {
  return (
    <div className="divide-y-[1px] divide-[#D1D1D6]">
      <div className="pb-[16px] pt-[20px]">
        <div className="mb-[8px] flex space-x-[8px]">
          <BluePhrase phrase="일자리" />
          <BluePhrase phrase="19 - 39세" />
          <PurplePhrase phrase="신청기간!" />
        </div>
        <div className="flex flex-col items-center justify-center rounded-[12px] bg-[#E8F5FF] py-[26px]">
          <p className="w-[80%] text-center text-[16px] font-semibold text-[#3592FF]">
            청년활력 프로그램 운영
          </p>
          <p className="mt-[4px] w-[80%] text-center text-[14px] text-[#48484A]">
            (청년활동지원센터 운영)
          </p>
        </div>
      </div>

      <div className="px-[14px] py-[20px]">
        <p className="text-[14px] text-[#48484A]">
          자율적인 구직활동과 사회참여, 심리/정서지원 등 청년활력 프로그램 운영
          및 서울청년센터 지원을 통해 청년안전망 구축
        </p>
      </div>

      <div className="space-y-[36px] py-[36px]">
        <div>
          <div className="flex items-center space-x-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="inline w-[20px]">
              <path d="M17 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3ZM4 9V19H20V9H4ZM6 11H8V13H6V11ZM11 11H13V13H11V11ZM16 11H18V13H16V11Z"></path>
            </svg>
            <p className="text-[16px] font-bold text-[#3A3A3C]">신청기간</p>
          </div>
          <ul className="ml-[7px] mt-[16px] list-disc pl-4 text-[14px] text-[#48484A]">
            <li>수시모집(미정)</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-[10px]">
            <Image
              src={'/icon/person.png'}
              alt={'person'}
              width={20}
              height={20}
            />
            <p className="text-[16px] font-bold text-[#3A3A3C]">지원대상</p>
          </div>
          <ul className="ml-[7px] mt-[16px] list-disc space-y-[8px] pl-4 text-[14px] text-[#48484A]">
            <li>{'연령 : 만 19세 - 39세'}</li>
            <li>{'학력 : 제한없음'}</li>
            <li>{'전공 : 제한없음'}</li>
            <li>{'취업상태 : 제한없음'}</li>
            <li>{'특화분야 : 제한없음'}</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="inline w-[20px]">
              <path d="M20 2C20.5523 2 21 2.44772 21 3V6.757L19 8.757V4H5V20H19V17.242L21 15.242V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20ZM21.7782 8.80761L23.1924 10.2218L15.4142 18L13.9979 17.9979L14 16.5858L21.7782 8.80761ZM13 12V14H8V12H13ZM16 8V10H8V8H16Z"></path>
            </svg>
            <p className="text-[16px] font-bold text-[#3A3A3C]">신청방법</p>
          </div>
          <ul className="ml-[7px] mt-[16px] list-disc space-y-[8px] pl-4 text-[14px] text-[#48484A]">
            <li>{'사이트 접속 후 프로그램 별 개별 접수 진행'}</li>
          </ul>
          <button className="mt-[12px] w-full rounded-[8px] border-[1px] border-[#3592FF] py-[6px] text-[15px] font-semibold leading-[24px] text-[#3592FF] hover:bg-[#3592FF] hover:text-white">
            신청 사이트로 이동하기
          </button>
        </div>

        <div>
          <div className="flex items-center space-x-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="inline w-[20px]">
              <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
            </svg>

            <p className="text-[16px] font-bold text-[#3A3A3C]">구비서류</p>
          </div>
          <ul className="ml-[7px] mt-[16px] list-disc space-y-[8px] pl-4 text-[14px] text-[#48484A]">
            <li>{'공고 참조'}</li>
          </ul>
        </div>
      </div>
      <div className="py-[28px]">
        <p className="text-[16px] font-semibold text-[#1C1C1E]">
          정책 후기 <span className="font-normal">(5)</span>
        </p>
        <p className="mt-[4px] text-[14px] text-[#48484A]">
          청년활력 프로그램 운영 (청년활동지원센터 운영)
        </p>
        <div className="mb-[20px] mt-[28px] flex justify-center space-x-[17.76px]">
          <FillStar bigSize />
          <FillStar bigSize />
          <FillStar bigSize />
          <FillHalfStar bigSize />
          <EmptyStar bigSize />
        </div>
        <p className="mb-[28px] text-center text-[14px] text-[#8E8E93]">
          <span className="text-[#3592FF]">4.7</span> / 5
        </p>
        <Link href={'/writereview/2'}>
          <button className="w-full rounded-[8px] bg-[#3592FF] py-[6px] text-[15px] font-semibold leading-[24px] text-[white]">
            후기 작성하기
          </button>
        </Link>
      </div>

      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
      <ReviewBox />
    </div>
  );
}
