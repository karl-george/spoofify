import { Figtree } from 'next/font/google';

import Sidebar from '@/components/Sidebar';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';

import './globals.css';
import ToasterProvider from '@/providers/ToasterProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: 'Spoofify',
  description: 'Listen to music',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
