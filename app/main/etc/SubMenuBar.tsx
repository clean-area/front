import useQueryParam from '@/app/hook/useQueryParam';
import { SubMenu } from '@/app/type/path';

const menus: { name: string; href: SubMenu }[] = [
  { name: '전체', href: 'all' },
  { name: '일자리', href: 'job' },
  { name: '주거', href: 'house' },
  { name: '금융복지', href: 'finance' },
  { name: '교육·문화', href: 'culture' },
  { name: '건강관리', href: 'health' },
];

export default function SubMenuBar() {
  const { search, setPartOfQueryParams } = useQueryParam('category');

  return (
    <div className="w-[100% - 200px] flex h-[50px] items-center space-x-6 overflow-auto">
      <div className="min-w-[20px]" />
      {menus.map((el, idx) => (
        <button
          key={idx}
          onClick={() => setPartOfQueryParams(el.href)}
          className={`${
            search === el.href || (!search && el.href === 'all')
              ? 'border-b-2 border-[#3592FF] opacity-100'
              : ' opacity-50'
          } shrink-0 grow-0 pb-1 text-[14px] font-semibold`}>
          {el.name}
        </button>
      ))}
      <div className="w-[25px]"></div>
    </div>
  );
}
