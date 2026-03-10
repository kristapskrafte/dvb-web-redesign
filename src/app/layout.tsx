import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digitālās Veselības Biedrība | Gateway to Latvian Healthcare',
  description: 'Mēs esam vārteja uz Latvijas veselības aprūpes ekosistēmu, it īpaši digitālajām tehnoloģijām. Izglītot, uzlabot un inovēt medicīnas nozari Latvijā.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white selection:bg-blue-500/30`}>
        {/* MI + Robotika Top Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 border-b border-white/10 text-sm font-medium text-center py-2.5 px-4 text-blue-100 flex items-center justify-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span>MI + Robotika projekts Latvijas un Eiropas slimnīcās. Vēlies uzzināt vairāk?</span>
          <a href="/biedriem" className="underline hover:text-white transition-colors decoration-blue-400/50 underline-offset-2">Piesakies biedrībā un iesaisties projektā →</a>
        </div>
        
        <div className="bg-orb"></div>
        {children}
      </body>
    </html>
  );
}
