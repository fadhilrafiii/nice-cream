import type { Metadata } from 'next';

import Footer from '@/components/footer.component';
import Navbar from '@/components/navbar.component';
import Sidebar from '@/components/sidebar.component';

import { gilroyFont, lobsterFont } from '@/constants/font.constant';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Nice Cream | Your #1 Gluten-Free Ice Cream',
  description:
    'Nice cream is a gluten-free ice cream. You can feel the pleasure on your mouth but still healthy for your body',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lobsterFont.variable} ${gilroyFont.variable} bg-tertiary antialiased`}
      >
        <Sidebar />
        <div className="pt-32 md:pl-20">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
