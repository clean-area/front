export function BluePhrase({ phrase }: { phrase: string }) {
  return (
    <p className="py-[2px] px-[8px] bg-[#E8F5FF] rounded-[40px] text-[12px] font-bold text-[#3592FF]">
      {phrase}
    </p>
  );
}

export function PurplePhrase({ phrase }: { phrase: string }) {
  return (
    <p className="py-[2px] px-[8px] bg-[#E8E4FF] rounded-[40px] text-[12px] font-bold text-[#9D8EFE]">
      {phrase}
    </p>
  );
}
