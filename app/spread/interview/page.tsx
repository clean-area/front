'use client';

import Image from 'next/image';
import ProgressBar from '../../components/ProgressBar';
import { useState } from 'react';
import { questions } from '../meonji/questions';
import MidModal from '@/app/components/MidModal';
import {
  AGE_LIST,
  Age,
  Gender,
  INTERESTS,
  Interest,
  InterestPickprops,
  JOB_LIST,
  Job,
} from '@/app/type/interview';
import Pick from './PickAgeJob';
import NextButton from './NextButton';

export default function Interview() {
  const [level, setLevel] = useState(0);
  const [isOpenAgeModal, setIsOpenAgeModal] = useState(false);
  const [isOpenJobModal, setIsOpenJobModal] = useState(false);

  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<Age | null>(null);
  const [job, setJob] = useState<Job | null>(null);

  const [interests, setInterests] = useState<Interest[]>([]);

  function fillInAll() {
    if (!gender || !age || !job) return false;
    return true;
  }

  return (
    <>
      <div className="relative flex h-screen flex-col">
        <div className="flex min-h-[72px] items-center justify-center space-x-2 border-b-8 border-gray-1">
          <ProgressBar
            width={'70%'}
            percent={((level + 2) / (questions.length + 2)) * 100}
          />
          <p className="text-xs text-gray-7">건너뛰기</p>
        </div>

        {level === 0 && (
          <>
            <div className="relative z-[20] mx-6 mt-10 flex flex-col items-center space-y-4 rounded-xl border-2 border-dashed border-gray-4 px-6 py-8">
              <h1 className="text-lg font-semibold">성별, 연령을 알려주세요</h1>
              <p className="text-center text-gray-8">
                먼지가 털이님께 딱 맞는 정책을 <br />
                쓸어올거예요! 🧹
              </p>
              <div className="grid h-[124px] w-full grid-cols-2 gap-4">
                <button
                  className={`${
                    gender === 'female' && 'border-2 border-blue-0'
                  } flex flex-col items-center justify-center space-y-1 rounded-lg bg-gray-1`}
                  onClick={() => setGender('female')}>
                  <Image
                    src={`/user information_female.png`}
                    alt="female"
                    width={70}
                    height={80}
                  />
                  <p
                    className={`${
                      gender === 'female' ? 'text-blue-0' : 'text-gray-7'
                    } text-base font-semibold`}>
                    여성
                  </p>
                </button>
                <button
                  className={`${
                    gender === 'male' && 'border-2 border-blue-0'
                  } flex flex-col items-center justify-center space-y-1 rounded-lg bg-gray-1`}
                  onClick={() => setGender('male')}>
                  <Image
                    src={`/user information_male.png`}
                    alt="male"
                    width={70}
                    height={80}
                  />
                  <p
                    className={`${
                      gender === 'male' ? 'text-blue-0' : 'text-gray-7'
                    } text-base font-semibold`}>
                    남성
                  </p>
                </button>
              </div>
              <button
                className={`${age && 'border-2 border-blue-0'} ${
                  !isOpenAgeModal && !isOpenJobModal && 'z-[10]'
                } flex h-12 w-full items-center rounded-lg bg-gray-1 px-7`}
                onClick={() => setIsOpenAgeModal(true)}>
                <p
                  className={`${
                    age ? 'text-blue-0' : 'text-gray-7'
                  } text-base font-semibold `}>
                  {age ? `${age}세` : '연령대를 선택해주세요'}
                </p>
              </button>
              <button
                className={`${
                  job && 'border-2 border-blue-0'
                } flex h-12 w-full items-center rounded-lg bg-gray-1 px-7`}
                onClick={() => setIsOpenJobModal(true)}>
                <p
                  className={`${
                    job ? 'text-blue-0' : 'text-gray-7'
                  } text-base font-semibold `}>
                  {job ? `${job}` : '재직 상태를 선택해주세요(선택)'}
                </p>
              </button>
              <Image
                className="absolute left-0 top-[38%] animate-dungsil_1"
                src={'/meonji-component_ dust_ver4.png'}
                alt={'dust1'}
                width={64}
                height={64}
              />
              <Image
                className="absolute right-0 top-[20%] animate-dungsil_2"
                src={'/meonji-component_ dust_ver1.png'}
                alt={'dust2'}
                width={64}
                height={64}
              />
              <Image
                className="absolute right-0 top-[50%] animate-dungsil_3"
                src={'/meonji-component_ dust_ver2.png'}
                alt={'dust3'}
                width={64}
                height={64}
              />
            </div>
            <NextButton able={fillInAll()} onclick={() => setLevel(1)} />
          </>
        )}

        {level === 1 && (
          <>
            <div className="relative z-[20] mx-6 mt-10 flex flex-col items-center space-y-4 rounded-xl border-2 border-dashed border-gray-4 px-6 py-8">
              <p className="absolute top-5 text-xs font-bold text-blue-0">
                관심 분야 선택 (1-8개)
              </p>
              <h1 className="text-lg font-semibold">
                관심 분야를 선택해주세요
              </h1>
              <p className="text-center text-gray-8">거의 다 쓸어왔어요 🧹</p>
              <div className="flex w-full flex-col space-y-6">
                <div className="flex w-full flex-col space-y-4">
                  <h1 className="font-semibold">일자리</h1>
                  <InterestPick
                    interestUnion={INTERESTS['일자리']}
                    interests={interests}
                    setInterests={setInterests}
                  />
                </div>
                <div className="flex w-full items-end">
                  <div className="flex flex-col space-y-4">
                    <h1 className="font-semibold">주거</h1>
                    <InterestPick
                      interestUnion={INTERESTS['주거']}
                      interests={interests}
                      setInterests={setInterests}
                    />
                  </div>
                  <div className="mb-2 ml-1 mr-4 h-[24px] w-[1px] bg-gray-4" />
                  <div className="flexflex-col space-y-4">
                    <h1 className="font-semibold">금융복지</h1>
                    <InterestPick
                      interestUnion={INTERESTS['금융복지']}
                      interests={interests}
                      setInterests={setInterests}
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col space-y-4">
                  <h1 className="font-semibold">교육·문화</h1>
                  <InterestPick
                    interestUnion={INTERESTS['교육·문화']}
                    interests={interests}
                    setInterests={setInterests}
                  />
                </div>
                <div className="flex w-full flex-col space-y-4">
                  <h1 className="font-semibold">건강관리</h1>
                  <InterestPick
                    interestUnion={INTERESTS['건강관리']}
                    interests={interests}
                    setInterests={setInterests}
                  />
                </div>
              </div>
              <Image
                className="absolute left-0 top-[38%] animate-dungsil_1"
                src={'/meonji-component_ dust_ver4.png'}
                alt={'dust1'}
                width={64}
                height={64}
              />
              <Image
                className="absolute right-0 top-[20%] animate-dungsil_2"
                src={'/meonji-component_ dust_ver1.png'}
                alt={'dust2'}
                width={64}
                height={64}
              />
              <Image
                className="absolute right-0 top-[50%] animate-dungsil_3"
                src={'/meonji-component_ dust_ver2.png'}
                alt={'dust3'}
                width={64}
                height={64}
              />
            </div>
            <NextButton able={fillInAll()} onclick={() => setLevel(1)} />
          </>
        )}

        <Image
          src={'/meonji-blue_spread background_ver1.jpg'}
          alt={'meonji'}
          width={450}
          height={500}
          className="absolute bottom-0 w-full"
        />
      </div>
      <MidModal isOpen={isOpenAgeModal} setIsOpen={setIsOpenAgeModal}>
        <Pick
          title="연령대를 선택해주세요"
          list={AGE_LIST}
          listPrefix="세"
          pick={age}
          setPick={setAge}
          setModal={setIsOpenAgeModal}
        />
      </MidModal>
      <MidModal isOpen={isOpenJobModal} setIsOpen={setIsOpenJobModal}>
        <Pick
          title="재직 상태를 선택해주세요(선택)"
          list={JOB_LIST}
          pick={job}
          setPick={setJob}
          setModal={setIsOpenJobModal}
        />
      </MidModal>
    </>
  );
}

function InterestPick({
  interestUnion,
  interests,
  setInterests,
}: InterestPickprops) {
  return (
    <div className="flex flex-wrap">
      {interestUnion.map((inter) => (
        <button
          key={inter}
          onClick={() =>
            setInterests((i: Interest[]) => {
              if (i.includes(inter)) return i.filter((e) => e !== inter);
              return [...i, inter];
            })
          }
          className={`${
            interests.includes(inter)
              ? 'border-2 border-blue-0 text-blue-0'
              : 'text-gray-7'
          } z-10 mr-3 mt-2 h-[38px] rounded-3xl bg-gray-1 px-3 font-bold`}>
          {inter}
        </button>
      ))}
    </div>
  );
}
