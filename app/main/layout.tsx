import { ReactNode } from 'react';
import Head from './etc/Head';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-6">
      <Head />
      {children}
    </div>
  );
}
