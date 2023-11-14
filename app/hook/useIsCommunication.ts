import { usePathname } from 'next/navigation';

export default function useIsCommunication() {
  const pathname = usePathname();
  const cur = pathname.split('/')[2];

  return cur === 'communication';
}
