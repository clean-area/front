export default function ProgressBar({
  percent,
  width,
}: {
  percent: number;
  width: string;
}) {
  return (
    <div className="h-3 rounded-xl bg-gray-2" style={{ width: width }}>
      <div
        className="h-full rounded-xl bg-blue-2"
        role="progressBar"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
