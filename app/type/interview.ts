import { ReactNode } from 'react';

export interface question {
  phrases?: ReactNode;
  meonji?: ReactNode;
  pick?: { show: ReactNode; setLevel: number }[];
  bottomBarImage: { url: string; bgColor: string };
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
