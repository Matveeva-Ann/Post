'use client';

import './globals.css';
import Image from 'next/image';
import { Provider } from 'react-redux';
import { store } from '@/redux/state';
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="p-8">
          <Link href={'/'}>
            <h1>
              <Image src="/logo-inverse.png" alt="logo" width={180} height={50} />
            </h1>
          </Link>
        </header>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
