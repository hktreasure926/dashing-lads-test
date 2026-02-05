import type { Metadata } from 'next';
import { Montserrat, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dashing Lads',
  description: 'AI-Powered styling for the modern gentleman',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        montserrat.variable,
        cormorant.variable,
        "bg-stone-900 text-stone-200 font-sans min-h-screen flex justify-center"
      )}>
        <div className="w-full max-w-[430px] bg-stone-950 min-h-screen relative shadow-2xl flex flex-col font-sans">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
