'use client';

import RecommendPolicy from '@/app/components/RecommendPolicy';
import ImgSlider from './etc/ImgSlider';
import SectionBox from './etc/SectionBox';
import PolicyBoxAtHome from './etc/PolicyBoxAtHome';
import OneLineCommentPreViewBox from './etc/OneLineCommentPreViewBox';
import OneLineCommentContent from './etc/OneLineCommentContent';
import DropDownSort from './etc/DropDownSort';
import PolicyBoxAtCategory from './etc/PolicyBoxAtCategory';
import { useState } from 'react';
import useQueryParam from '../hook/useQueryParam';

export default function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const [sort, setSort] = useState('추천순');
  const { search } = useQueryParam('category');
  if (search === 'all' || search === null)
    return (
      <>
        {searchParams?.recommend && <RecommendPolicy />}
        <ImgSlider />
        <SectionBox
          title={
            <p className="text-[16px] font-semibold text-[#1C1C1E]">
              곧 <span className="text-[#3592FF]">마감</span>되는 정책들이
              있어요!
            </p>
          }
          url={'/hello'}>
          <div className="flex space-x-[16px] overflow-auto">
            <div className="min-w-[9px]" />
            <PolicyBoxAtHome />
            <PolicyBoxAtHome />
            <PolicyBoxAtHome />
            <PolicyBoxAtHome />
            <PolicyBoxAtHome />
          </div>
        </SectionBox>
        <SectionBox
          title={
            <p className="text-[16px] font-semibold text-[#1C1C1E]">
              사람들이 <span className="text-[#3592FF]">주목</span>하고 있는
              정책들이 있어요!
            </p>
          }
          url={'/hello'}>
          <div className="flex space-x-[16px] overflow-auto">
            <div className="min-w-[9px]" />
            <PolicyBoxAtHome />
            <PolicyBoxAtHome />
            <PolicyBoxAtHome />
            <PolicyBoxAtHome />
            <PolicyBoxAtHome />
          </div>
        </SectionBox>
        <OneLineCommentPreViewBox
          title={
            <p className="text-[16px] font-semibold text-[#1C1C1E]">
              사용자들의 <span className="text-[#3592FF]">한줄평 리뷰</span>를
              확인해보세요!
            </p>
          }
          comment={
            '다른 사용자들의 리뷰를 통해, 나에게 맞는 정책을 찾아보세요!'
          }>
          <div className="flex space-x-[24px] overflow-auto">
            <div className="min-w-[3px]" />
            <OneLineCommentContent />
            <OneLineCommentContent />
            <OneLineCommentContent />
            <OneLineCommentContent />
          </div>
        </OneLineCommentPreViewBox>
        <div className="h-[50px]"></div>
      </>
    );

  return (
    <div className="w-full max-w-[410px] flex-col px-[25px]">
      <div className="mb-[2px] flex w-full justify-end">
        {/* <DropDownSort list={list} selected={sort} setSelected={setSort} /> */}
      </div>
      <div className="w-full flex-col divide-y-[1px] divide-[#D1D1D6]">
        <PolicyBoxAtCategory />
        <PolicyBoxAtCategory />
        <PolicyBoxAtCategory />
        <PolicyBoxAtCategory />
        <PolicyBoxAtCategory />
        <div className="flex w-full flex-col items-center justify-center pb-[50px] pt-[16px]">
          <p className="text-[14px] text-[#8E8E93]">
            OO구역은 여기까지예요! 다른 구역도 알아보시겠어요?
          </p>
          <p className="border-b-[2px] border-[#3592FF] pb-[6px] pt-[4px] text-[14px] font-bold text-[#3592FF]">
            OO구역으로 이동하기
          </p>
        </div>
      </div>
    </div>
  );
}
