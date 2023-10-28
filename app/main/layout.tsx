import { ReactNode } from 'react';
import Head from './etc/Head';
import Nav from '../components/Nav';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-6">
      <Head />
      {children}
      <Nav />
    </div>
  );
}
