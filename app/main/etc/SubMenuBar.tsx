import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "HOME", href: "" },
  { name: "전체", href: "all" },
  { name: "진로", href: "course" },
  { name: "일자리", href: "job" },
  { name: "신체건강", href: "physical" },
  { name: "마음건강", href: "mental" },
  { name: "교육", href: "education" },
  { name: "문화/예술", href: "culture" },
  { name: "창업", href: "founded" },
  { name: "주거", href: "dwelling" },
  { name: "생활지원", href: "lifesupport" },
  { name: "금융", href: "finance" },
  { name: "사회참여", href: "socialparticipation" },
  { name: "커뮤니티", href: "community" },
  { name: "대외활동", href: "externalactivities" },
  { name: "공간", href: "place" },
];

export default function SubMenuBar() {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-[16px] w-[100% - 200px] h-[50px] overflow-auto">
      <div className="min-w-[9px]"></div>
      {menus.map((el, idx) => (
        <Link
          key={idx}
          href={`/main/${el.href}`}
          className={`${
            pathname === el.href && "border-b-2 border-[#3592FF]"
          } text-[14px] pb-1 font-semibold grow-0 shrink-0`}
        >
          {el.name}
        </Link>
      ))}
      <div className="w-[25px]"></div>
    </div>
  );
}
