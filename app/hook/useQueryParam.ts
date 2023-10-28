'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function useQueryParam(part: string) {
  const searchParams = useSearchParams();
  const search = searchParams.get(part);
  const router = useRouter();
  const pathname = usePathname();

  function setPartOfQueryParams(value: string) {
    const want = searchParams
      .toString()
      .split('&')
      .filter((el) => !el.includes(part))
      .concat(`${part}=${value}`)
      .join('&');
    router.push(`${pathname}?${want}`);
  }

  return { search, setPartOfQueryParams };
}
