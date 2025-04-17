import type { Metadata } from 'next';

import Alert from '@/components/alert.component';
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
        <div className="relative md:pl-20">
          <Navbar />
          {children}
        </div>
        <Footer />
        <Alert>
          <div>
            <div className="text-lg font-semibold text-white">Recommendation</div>
            <p className="text-sm font-medium text-white">
              Open this page in desktop for better experience.
            </p>
          </div>
        </Alert>
      </body>
    </html>
  );
}
