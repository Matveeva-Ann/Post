import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import Providers from './Providers';
import SwitchThemes from './components/SwitchTheme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bodyGradient dark:bg-bodyGradientDark">
        <Providers>
          <header className="w-11/12 p-8 flex justify-between gap-2">
            <Link href={'/'}>
              <h1>
                <Image src="/logo-inverse.png" alt="logo" width={180} height={50} priority />
              </h1>
            </Link>
            <div className="cursor-pointer">
              <SwitchThemes></SwitchThemes>
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
