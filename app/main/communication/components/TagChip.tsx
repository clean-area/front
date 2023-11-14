import { InterestClass } from '@/app/type/interview';

export default function TagChip({
  tag,
  activate,
}: {
  tag: InterestClass;
  activate?: boolean;
}) {
  return (
    <p
      className={`${
        activate
          ? 'border-blue-0 bg-blue-1 text-blue-0'
          : 'border-gray-4 bg-white text-gray-7'
      } inline rounded-3xl border px-3 pb-[5px] pt-1`}>
      {`# ${tag}`}
    </p>
  );
}
