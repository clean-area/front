import { Age, Job } from '@/app/type/interview';
import { Dispatch, SetStateAction } from 'react';

export default function Pick<T extends Age | Job>({
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
