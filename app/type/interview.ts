import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface question {
  phrases?: ReactNode;
  meonji?: ReactNode;
  pick?: { show: ReactNode; answer: 'yes' | 'no' }[];
}

export type Age = '19 - 24' | '25 - 29' | '30 - 34' | '35 - 39';
export const AGE_LIST: Age[] = ['19 - 24', '25 - 29', '30 - 34', '35 - 39'];
export type Gender = 'female' | 'male';

export type Job =
  | '제한없음'
  | '대학생'
  | '구직'
  | '재직'
  | '이직준비'
  | '시험준비'
  | '프리랜서'
  | '기타';
export const JOB_LIST: Job[] = [
  '제한없음',
  '대학생',
  '구직',
  '재직',
  '이직준비',
  '시험준비',
  '프리랜서',
  '기타',
];

export interface NextButtonProps {
  able: boolean;
  onclick: (e: any) => void;
}

export type Interest =
  | '진로'
  | '일자리'
  | '창업'
  | '주거'
  | '생활지원'
  | '금융'
  | '교육'
  | '문화예술'
  | '사회참여'
  | '공간'
  | '커뮤니티'
  | '대외활동'
  | '신체건강'
  | '마음건강';

export type InterestClass =
  | '일자리'
  | '주거'
  | '금융복지'
  | '교육·문화'
  | '건강관리';

export type Interests = {
  [key: string]: Interest[];
};

export const INTERESTS: Interests = {
  일자리: ['진로', '일자리', '창업'],
  주거: ['주거'],
  금융복지: ['생활지원', '금융'],
  '교육·문화': ['교육', '문화예술', '사회참여', '공간', '커뮤니티', '대외활동'],
  건강관리: ['신체건강', '마음건강'],
};

export interface InterestPickprops {
  interestUnion: Interest[];
  interests: Interest[];
  setInterests: Dispatch<SetStateAction<Interest[]>>;
}
