import { ReactNode } from "react";

interface OneLineCommentPreViewBoxProps {
  title: ReactNode;
  children: ReactNode;
  comment: string;
}

export default function OneLineCommentPreViewBox({
  title,
  children,
  comment,
}: OneLineCommentPreViewBoxProps) {
  return (
    <div className="w-full flex-col justify-center">
      <div className="px-[25px] w-full mt-[40px] mb-[16px] flex flex-col">
        {title}
        <p className="text-[12px] text-[#8E8E93] cursor-pointer mt-[4px] mb-[16px]">
          {comment}
        </p>
      </div>
      {children}
    </div>
  );
}
