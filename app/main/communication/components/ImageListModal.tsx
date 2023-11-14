import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';

export default function ImageListModal({
  isOpen,
  setIsOpen,
  showImageIdx,
  setShowImageIdx,
  images,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  showImageIdx: number;
  setShowImageIdx: Dispatch<SetStateAction<number>>;
  images: string[];
}) {
  return (
    <>
      {createPortal(
        <>
          {isOpen && (
            <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex justify-center bg-[rgba(28,28,30,0.88)]">
              <div className="relative flex h-full w-full max-w-[450px] items-center">
                <div
                  className="absolute left-4 top-6 h-6 w-6 cursor-pointer"
                  onClick={() => setIsOpen(false)}>
                  <CloseIcon />
                </div>
                <Image
                  src={images[showImageIdx]}
                  width={450}
                  height={900}
                  className="relative w-full"
                  alt="image"
                />
                {showImageIdx > 0 && (
                  <div
                    className="absolute left-0 flex h-[50%] w-[40%] items-center justify-start p-[11px]"
                    onClick={() => setShowImageIdx((e) => e - 1)}>
                    <div className="h-9 w-9 cursor-pointer rounded-[50%] bg-[rgba(28,28,30,0.88)]">
                      <LeftArrowIcon />
                    </div>
                  </div>
                )}
                {showImageIdx < images.length - 1 && (
                  <div
                    className="absolute right-0 flex h-[50%] w-[40%] items-center justify-end p-[11px]"
                    onClick={() => setShowImageIdx((e) => e + 1)}>
                    <div className="h-9 w-9 cursor-pointer rounded-[50%] bg-[rgba(28,28,30,0.88)]">
                      <RightArrowIcon />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>,
        document.body
      )}
    </>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
    </svg>
  );
}

function LeftArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
    </svg>
  );
}

function RightArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
    </svg>
  );
}
