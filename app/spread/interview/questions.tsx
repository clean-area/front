import { question } from '@/app/type/interview';
import Image from 'next/image';

export const questions: question[] = [
  {
    phrases: (
      <p className="text-center text-[15px] font-bold">
        안녕하세요!
        <br />
        저는 청정구역의 마스코트{' '}
        <span className="text-blue-0">&apos;먼지&apos;</span> 예요!
      </p>
    ),
    meonji: (
      <>
        <Image
          className="mt-10"
          src={'/meonji-character_ guiding.png'}
          alt={'meonjiGuiding'}
          width={196}
          height={260}
        />
        <Image
          className="absolute inset-y-1/2 left-0 animate-dungsil_1"
          src={'/meonji-component_ dust_ver4.png'}
          alt={'dust1'}
          width={64}
          height={64}
        />
        <Image
          className="absolute right-5 top-[5%] animate-dungsil_2"
          src={'/meonji-component_ dust_ver1.png'}
          alt={'dust2'}
          width={64}
          height={64}
        />
        <Image
          className="absolute right-0 top-[60%] animate-dungsil_3"
          src={'/meonji-component_ dust_ver2.png'}
          alt={'dust3'}
          width={64}
          height={64}
        />
      </>
    ),
  },
  {
    phrases: (
      <p className="text-center text-[15px] font-bold">
        청정구역의 주인
        <br />
        <span className="text-blue-0">&apos;털이&apos;</span>님 맞으신가요?
      </p>
    ),
    meonji: (
      <>
        <Image
          className="relative bottom-8 left-5 mt-10"
          src={'/meonji-character_curious.png'}
          alt={'meonji?'}
          width={243}
          height={302}
        />
        <Image
          className="absolute inset-y-1/2 left-0 animate-dungsil_1"
          src={'/meonji-component_ dust_ver4.png'}
          alt={'dust1'}
          width={64}
          height={64}
        />
        <Image
          className="absolute right-5 top-[5%] animate-dungsil_2"
          src={'/meonji-component_ dust_ver1.png'}
          alt={'dust2'}
          width={64}
          height={64}
        />
        <Image
          className="absolute right-0 top-[60%] animate-dungsil_3"
          src={'/meonji-component_ dust_ver2.png'}
          alt={'dust3'}
          width={64}
          height={64}
        />
      </>
    ),
    pick: [
      {
        show: (
          <p key={'응 맞아!'} className="text-[15px] font-bold">
            응 맞아!
          </p>
        ),
        result: true,
      },
      {
        show: (
          <p key={'아닌데?(너무해...)'} className="text-[15px] font-bold">
            아닌데?
            <span className="opacity-50">(너무해...)</span>
          </p>
        ),
        result: true,
      },
    ],
  },
  {
    phrases: (
      <p className="text-center text-[15px] font-bold">
        네, 그럼 털이님에 대해 알려주세요!
      </p>
    ),
    meonji: (
      <>
        <Image
          className="relative bottom-8 left-5 mt-10"
          src={'/meonji-character_greeting brightly.png'}
          alt={'meonji!!'}
          width={249}
          height={302}
        />
        <Image
          className="absolute inset-y-1/2 left-0 animate-dungsil_1"
          src={'/meonji-component_ dust_ver4.png'}
          alt={'dust1'}
          width={64}
          height={64}
        />
        <Image
          className="absolute right-5 top-[5%] animate-dungsil_2"
          src={'/meonji-component_ dust_ver1.png'}
          alt={'dust2'}
          width={64}
          height={64}
        />
        <Image
          className="absolute right-0 top-[60%] animate-dungsil_3"
          src={'/meonji-component_ dust_ver2.png'}
          alt={'dust3'}
          width={64}
          height={64}
        />
      </>
    ),
  },
  {
    phrases: (
      <p className="text-center text-[15px] font-bold">
        엇,, 아닌가요? 그럼 저에게
        <br />
        당신을 소개해주세요!
      </p>
    ),
    meonji: (
      <>
        <Image
          className="mt-10"
          src={'/meonji-character_embarrassing.png'}
          alt={'meonjiu'}
          width={196}
          height={260}
        />
        <Image
          className="absolute inset-y-1/2 left-0 animate-dungsil_1"
          src={'/meonji-component_ dust_ver4.png'}
          alt={'dust1'}
          width={64}
          height={64}
        />
        <Image
          className="absolute right-5 top-[5%] animate-dungsil_2"
          src={'/meonji-component_ dust_ver1.png'}
          alt={'dust2'}
          width={64}
          height={64}
        />
        <Image
          className="absolute right-0 top-[60%] animate-dungsil_3"
          src={'/meonji-component_ dust_ver2.png'}
          alt={'dust3'}
          width={64}
          height={64}
        />
      </>
    ),
  },
];
