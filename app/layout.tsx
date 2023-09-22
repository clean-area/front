import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: '청정구역',
  description: '청년정책',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <main className="flex h-screen w-screen justify-center bg-white text-body-0">
          <div className="w-full max-w-[450px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
