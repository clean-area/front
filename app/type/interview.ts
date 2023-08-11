import { ReactNode } from 'react';

export interface question {
  phrases?: ReactNode;
  meonji?: ReactNode;
  pick?: { show: ReactNode; result: boolean }[];
}
