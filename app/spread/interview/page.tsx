'use client';

import Image from 'next/image';
import ProgressBar from '../../components/ProgressBar';
import { Dispatch, SetStateAction, useState } from 'react';
import { questions } from '../meonji/questions';
import { investigation } from './investigation';
import MidModal from '@/app/components/MidModal';
import { AGE_LIST, Age, Gender, JOB_LIST, Job } from '@/app/type/interview';

export default function Interview() {
  const [level, setLevel] = useState(0);
  const [isOpenAgeModal, setIsOpenAgeModal] = useState(false);
  const [isOpenJobModal, setIsOpenJobModal] = useState(false);

  const [gender, setGender] = useState<Gender | null>(null);
  const [age, setAge] = useState<Age | null>(null);
  const [job, setJob] = useState<Job | null>(null);

  function fillInAll() {
    if (!gender || !age || !job) return false;
    return true;
  }

  if (level === 0)
    return (
      <>
        <div className="flex h-screen flex-col">
          <div className="flex min-h-[72px] items-center justify-center space-x-2 border-b-8 border-gray-1">
            <ProgressBar
              width={'70%'}
              percent={(level / questions.length + investigation.length) * 100}
            />
            <p className="text-xs text-gray-7">건너뛰기</p>
          </div>

          <div className="mx-6 mt-10 flex flex-col items-center space-y-4 rounded-xl border-2 border-dashed border-gray-4 px-6 py-8">
            <h1 className="text-lg">성별, 연령을 알려주세요</h1>
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
              className={`${
                age && 'border-2 border-blue-0'
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
          </div>
          <button
            disabled={!fillInAll()}
            className={`${
              fillInAll() ? 'bg-blue-0' : 'bg-gray-1'
            } mx-6 mt-8 flex h-12 items-center justify-center rounded-lg px-7 py-4`}>
            <p
              className={`${
                fillInAll() ? 'text-white' : 'text-gray-7'
              } text-base font-semibold`}>
              다음으로 넘어가기
            </p>
          </button>
          <div
            className={`${
              !questions[level].pick && 'cursor-pointer'
            } relative h-full`}
            role="bottomBox"
            style={{ backgroundColor: questions[level].bottomBarImage.bgColor }}
            onClick={
              !questions[level].pick ? () => setLevel((e) => e + 1) : undefined
            }>
            <Image
              src={questions[level].bottomBarImage.url}
              alt={'meonji'}
              width={450}
              height={500}
              className="absolute bottom-0 w-full"
            />
          </div>
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

function Pick<T>({
  title,
  list,
  listPrefix = '',
  pick,
  setPick,
  setModal,
}: {
  title: string;
  list: T[];
  listPrefix?: string;
  pick: T | null;
  setPick: Dispatch<SetStateAction<T | null>>;
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="divide-y divide-solid divide-gray-4 font-semibold text-gray-7">
      <div className="flex h-12 items-center rounded-t-lg bg-gray-1 px-7">
        <p>{title}</p>
      </div>
      {list.slice(1).map((el, idx) => (
        <button
          key={idx}
          className="flex h-12 w-full items-center bg-white px-7"
          onClick={() => {
            setPick(el);
            setModal(false);
          }}>
          <p>{`${el}${listPrefix}`}</p>
        </button>
      ))}
      <button
        className="flex h-12 w-full items-center rounded-b-lg bg-white px-7"
        onClick={() => {
          setPick(list[list.length - 1]);
          setModal(false);
        }}>
        <p>{`${list[list.length - 1]}${listPrefix}`}</p>
      </button>
    </div>
  );
}
