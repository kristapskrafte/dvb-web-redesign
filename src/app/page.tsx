import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between z-10 sticky top-0 bg-black/50 backdrop-blur-md border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          {/* Using the extracted white SVG logo */}
          <img 
            src="https://cdn.prod.website-files.com/629de4a0fb7530f75400a222/629de4a0fb7530afe700a252_Logo%20White.svg" 
            alt="DVB Logo" 
            className="h-8 w-auto object-contain brightness-0 invert" 
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/jaunumi-un-raksti" className="hover:text-white transition-colors">Jaunumi</Link>
          <Link href="/par-mums" className="hover:text-white transition-colors">Par mums</Link>
          <Link href="/biedriem" className="hover:text-white transition-colors">Biedriem</Link>
          <Link href="/kontakti" className="hover:text-white transition-colors">Kontakti</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/en" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">EN</Link>
          <Link 
            href="/biedru-anketa" 
            className="hidden sm:inline-flex px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            Kļūt par biedru
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-xs font-medium uppercase tracking-wider mb-8">
          Digitālās Veselības Biedrība
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          The Gateway to the <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Latvian Healthcare Space.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Mēs esam katalizators, kas savieno inovācijas ar nozares līderiem. Īpaši fokusējamies uz digitālo tehnoloģiju, MI un robotikas ieviešanu Latvijas veselības aprūpes ekosistēmā.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/biedru-anketa" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
            Kļūt par biedru
          </Link>
          <Link href="/par-mums" className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors">
            Uzzināt vairāk
          </Link>
        </div>
      </section>

      {/* Quote / Vision Block (Corti/Vercel structured typography) */}
      <section className="w-full border-y border-white/5 bg-zinc-900/20 py-20 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-10 h-10 mx-auto mb-6 text-zinc-700" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <h2 className="text-2xl md:text-4xl font-medium leading-snug text-zinc-200 mb-8">
            "Lai katrs mūsu sabiedrības loceklis varētu saņemt kvalitatīvus un sev nepieciešamus pakalpojumus dzīves kvalitātes uzlabošanai."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800">
              <img src="https://cdn.prod.website-files.com/629de4a0fb7530770500a226/65fd75656ea45f7aa656d5a5_Aivars%20-%20Edited.png" alt="prof. Aivars Vētra" className="w-full h-full object-cover"/>
            </div>
            <div className="text-left">
              <p className="text-white font-medium">prof. Aivars Vētra</p>
              <p className="text-zinc-500 text-sm">Rehabilitācijas medicīnas aizsācējs Latvijā</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Mūsu pīlāri</h2>
          <p className="text-zinc-400">Trīs galvenie virzieni, kuros strādājam, lai pārveidotu veselības aprūpi.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Izglītot</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Pievērst padziļinātu uzmanību sabiedrības izglītošanā, atsvaidzināt profesionāļu prasmes atbilstoši mūsdienu standartiem, kas sabiedrībai nesīs ērtākus un pieejamākus risinājumus.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors">
            <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Uzlabot</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Izpētīt un apkopot pētījumus par esošo veselības sistēmu, lai to uzlabotu tās pašā saknē saskaņā ar sabiedrības, pacientu un medicīnas profesionāļu vajadzībām.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/20">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Inovēt</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Aktualizēt sistēmu ciešā sadarbībā ar speciālistiem, lai veselības nozare attīstītos atbilstoši mūsdienīgiem standartiem. Lietojama un moderna pieeja kopumā.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full border-t border-white/5 bg-black py-24 px-6 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pievienojies nākotnes veselības aprūpei.</h2>
          <p className="text-zinc-400 mb-10 text-lg">Kļūsti par daļu no Digitālās Veselības biedrības un piedalies MI un robotikas inovāciju integrēšanā Latvijas slimnīcās.</p>
          <Link href="/biedru-anketa" className="inline-flex px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
            Pieteikties tagad
          </Link>
        </div>
      </section>
      
      {/* Footer Base */}
      <footer className="w-full max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between border-t border-white/5 text-sm text-zinc-500">
        <p>2026 © Digitālās Veselības biedrība. Visas tiesības aizsargātas.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privātuma politika</a>
          <a href="#" className="hover:text-white transition-colors">Lietošanas noteikumi</a>
        </div>
      </footer>
    </main>
  );
}
