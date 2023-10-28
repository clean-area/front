'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BottomNav } from '../type/path';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [path, setPath] = useState<BottomNav>('home');
  const pathArr = usePathname().split('/');

  const list = [
    {
      href: '/main',
      name: '청정구역',
      key: undefined,
      svgPath:
        'M20 10.9966V7.99658H14V3.99658H10V7.99658H4V10.9966H20ZM21 12.9966V20.9966C21 21.5489 20.5523 21.9966 20 21.9966H10V15.9966H8V21.9966H4C3.44772 21.9966 3 21.5489 3 20.9966V12.9966H2V6.99658C2 6.4443 2.44772 5.99658 3 5.99658H8V2.99658C8 2.4443 8.44772 1.99658 9 1.99658H15C15.5523 1.99658 16 2.4443 16 2.99658V5.99658H21C21.5523 5.99658 22 6.4443 22 6.99658V12.9966H21Z',
    },
    {
      href: '/main/communication',
      name: '소통구역',
      key: 'communication',
      svgPath:
        'M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z',
    },
    {
      href: '/main/question',
      name: '질문구역',
      key: 'question',
      svgPath:
        'M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14H13V16H11V14ZM8.56731 8.81346C8.88637 7.20919 10.302 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13H11V11H12C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.2723 8 10.6656 8.51823 10.5288 9.20577L8.56731 8.81346Z',
    },
    {
      href: '/main/mine',
      name: '나만의구역',
      key: 'mine',
      svgPath:
        'M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z',
    },
  ];
  return (
    <nav className="fixed bottom-0 flex h-14 w-full max-w-[450px] justify-center bg-white text-xs">
      {list.map((el) => (
        <Link
          key={el.href}
          href={el.href}
          className={`${
            pathArr[pathArr.indexOf('main') + 1] === el.key && 'text-blue-0'
          } flex h-full w-[85px] flex-col items-center justify-center gap-1`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6">
            <path d={el.svgPath}></path>
          </svg>
          <p>{el.name}</p>
        </Link>
      ))}
      {/* <Link
        href={'/main'}
        onClick={() => setPath('home')}
        className="flex h-full w-[85px] flex-col items-center justify-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6">
          <path d="M20 10.9966V7.99658H14V3.99658H10V7.99658H4V10.9966H20ZM21 12.9966V20.9966C21 21.5489 20.5523 21.9966 20 21.9966H10V15.9966H8V21.9966H4C3.44772 21.9966 3 21.5489 3 20.9966V12.9966H2V6.99658C2 6.4443 2.44772 5.99658 3 5.99658H8V2.99658C8 2.4443 8.44772 1.99658 9 1.99658H15C15.5523 1.99658 16 2.4443 16 2.99658V5.99658H21C21.5523 5.99658 22 6.4443 22 6.99658V12.9966H21Z"></path>
        </svg>
        <p>청정구역</p>
      </Link>
      <Link
        href={'/main/communication'}
        onClick={() => setPath('commuication')}
        className="flex h-full w-[85px] flex-col items-center justify-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6">
          <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
        </svg>
        <p>소통구역</p>
      </Link>
      <Link
        href={'/main/question'}
        onClick={() => setPath('question')}
        className="flex h-full w-[85px] flex-col items-center justify-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6">
          <path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14H13V16H11V14ZM8.56731 8.81346C8.88637 7.20919 10.302 6 12 6C13.933 6 15.5 7.567 15.5 9.5C15.5 11.433 13.933 13 12 13H11V11H12C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.2723 8 10.6656 8.51823 10.5288 9.20577L8.56731 8.81346Z"></path>
        </svg>
        <p>질문구역</p>
      </Link>
      <Link
        href={'/main/mine'}
        onClick={() => setPath('mine')}
        className="flex h-full w-[85px] flex-col items-center justify-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6">
          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
        </svg>
        <p>나만의구역</p>
      </Link> */}
    </nav>
  );
}
