'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';
import ImageListModal from './ImageListModal';
import TagChip from './TagChip';
import { InterestClass } from '@/app/type/interview';

interface StoryContainerProps {
  tags?: InterestClass[];
  userName: string;
  created_at: string;
  phrase: string;
  images?: string[];
  comment: any[];
  like: number;
}

export default function StoryContainer({
  tags,
  userName,
  created_at,
  phrase,
  images,
  comment,
  like,
}: StoryContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);

  return (
    <>
      <section className="py-11">
        {tags && (
          <div className="mb-4 flex gap-3">
            {tags.map((el) => (
              <TagChip tag={el} key={el} />
            ))}
          </div>
        )}

        <div className="mb-4 flex items-center gap-3">
          <div className="h-16 w-16 rounded-[50%] bg-profile-1" />
          <p>
            {userName}님<span className="text-gray-7">·{created_at}</span>
          </p>
        </div>
        <p className="mb-4">{phrase}</p>
        {images && (
          <DivdieArea
            imageNode={images.map((el, idx) => (
              <Image
                key={el}
                className="h-full w-full rounded-2xl object-cover"
                width={300}
                height={200}
                alt={'image'}
                onClick={() => {
                  setImageIdx(idx);
                  setIsOpen(true);
                }}
                src={el}
              />
            ))}
          />
        )}

        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="flex items-center gap-1 text-[15px] font-bold text-gray-7">
              <ChatIcon />
              <p>{comment.length}</p>
            </div>
            <div className="flex items-center gap-1 text-[15px] font-bold text-gray-7">
              <Heart />
              <p>{like}</p>
            </div>
          </div>
          <MoreIcon />
        </div>
      </section>
      {images && images.length && (
        <ImageListModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          images={images}
          showImageIdx={imageIdx}
          setShowImageIdx={setImageIdx}
        />
      )}
    </>
  );
}

function ChatIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6">
        <path
          d="M14.45 19L12 22.5L9.55 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H14.45ZM13.409 17H20V5H4V17H10.591L12 19.012L13.409 17Z"
          fill="#8E8E93"></path>
      </svg>
    </>
  );
}
function Heart() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6">
        <path
          d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"
          fill="#8E8E93"></path>
      </svg>
    </>
  );
}
function MoreIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-6 w-6">
        <path
          d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"
          fill="#8E8E93"></path>
      </svg>
    </>
  );
}

function DivdieArea({ imageNode }: { imageNode: ReactNode[] }) {
  if (imageNode.length === 1)
    return (
      <div className="mb-4 h-[204px] w-full rounded-2xl">{imageNode[0]}</div>
    );

  if (imageNode.length === 2)
    return (
      <div className="mb-4 grid h-[204px] w-full grid-cols-2 gap-3">
        {imageNode[0]}
        {imageNode[1]}
      </div>
    );

  if (imageNode.length === 3)
    return (
      <div className="mb-4 grid h-[204px] w-full grid-cols-2 gap-3">
        {imageNode[0]}
        <div className="grid h-[204px] w-full grid-rows-2 gap-3">
          {imageNode[1]}
          {imageNode[2]}
        </div>
      </div>
    );

  if (imageNode.length === 4)
    return (
      <div className="mb-4 grid h-[204px] w-full grid-cols-2 gap-3">
        <div className="grid h-[204px] w-full grid-rows-2 gap-3">
          {imageNode[0]}
          {imageNode[1]}
        </div>
        <div className="grid h-[204px] w-full grid-rows-2 gap-3">
          {imageNode[2]}
          {imageNode[3]}
        </div>
      </div>
    );

  return <></>;
}
