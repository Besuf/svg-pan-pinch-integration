import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NextLink from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'World Map - Next.js Example',
  description: 'World Map Pan and pinch to zoom',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='bg-gray-200 text-black flex gap-4 p-4'>
          <div>
            <NextLink href='/'>Dekstop demo</NextLink>
          </div>
          <div>
            <NextLink href='/mobile'>Mobile demo</NextLink>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
