import { ModalProps } from '../type/modal';

export default function MidModal({ isOpen, setIsOpen, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <div
          className="absolute left-0 top-0 z-[30] flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.5)]"
          onClick={() => setIsOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="mx-6 w-full max-w-[294px]">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
