import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'

// Use Vite glob import — handles filenames with spaces & parentheses
const imageModules = import.meta.glob('../assets/*.jpg', { eager: true })
const allImages = Object.values(imageModules).map(m => m.default)


const pillars = [
  {
    label: 'The Place',
    heading: 'Bhavikodla Beach,\nGokarna.',
    body: "One of the quieter shorelines of the Karnataka coast — still unhurried, still wild, still free. We're 30 metres from the water."
  },
  {
    label: 'The Feeling',
    heading: 'Sea air.\nSmall café.',
    body: 'Wake up to the sound of the tide. Grab fresh food from our in-house cafe and kitchen. Walk the beach. Come back and sleep with the windows open.'
  },
  {
    label: 'The People',
    heading: 'Sunad & Akshay,\nyour hosts.',
    body: "They'll help you rent a bike, find the best food in town, and catch the local bus. Warm, helpful, and always around."
  },
]

export default function Home() {
  return (
    <div className="bg-slate-950">
      {/* ── Hero ── */}
      <Hero isHome={true} />

      {/* ── Cinematic Film Strip ── */}
      <section className="py-16 lg:py-24 overflow-hidden relative">
        {/* Edge vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none"></div>

        {/* Section header above the strip */}
        <div className="text-center mb-12 px-6 relative z-10">
          <p className="text-cyan-400 text-[10px] tracking-[0.4em] uppercase font-bold mb-4">The Cabin · The Beach · The Life</p>
          <h2 className="font-serif-elegant text-3xl sm:text-4xl text-white font-light">
            Life at <span className="italic text-cyan-400">Beasho</span>
          </h2>
        </div>

        {/* Scrolling strip */}
        <div className="relative">
          <div
            className="flex gap-5 w-max"
            style={{ animation: 'filmScroll 40s linear infinite' }}
          >
            {/* Double the images for seamless loop */}
            {[...allImages, ...allImages].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 h-48 sm:w-96 sm:h-60 rounded-2xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Beasho Cabin ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/gallery"
          className="flex items-center justify-center gap-3 mt-16 text-slate-500 hover:text-cyan-400 transition-colors text-xs tracking-[0.3em] uppercase font-bold"
        >
          Browse full gallery
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </Link>
      </section>

      {/* ── Three Pillars ── */}
      <section className="py-16 lg:py-24 px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 md:gap-10">
          {pillars.map((p, i) => (
            <div key={p.label} className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-cyan-400/40 font-black text-xs tracking-widest">0{i + 1}</span>
                <div className="flex-1 h-px bg-white/5"></div>
                <span className="text-white/20 text-[9px] tracking-[0.3em] uppercase font-bold">{p.label}</span>
              </div>
              <h3 className="font-serif-elegant text-2xl sm:text-3xl text-white font-light leading-snug whitespace-pre-line">
                {p.heading}
              </h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Minimal Stats Row */}
        <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { n: '30m',  sub: 'to the beach' },
            { n: '5.0',  sub: 'Google rating' },
            { n: '100+', sub: 'happy guests'  },
            { n: '24/7', sub: 'host support'  },
          ].map(s => (
            <div key={s.sub} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1">{s.n}</p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 font-medium">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Booking CTA Banner ── */}
      <section className="px-6 lg:px-8 max-w-6xl mx-auto pb-16 lg:pb-24">
        <div className="glass-panel p-10 sm:p-16 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none"></div>
          <p className="text-cyan-400 text-[10px] tracking-[0.4em] uppercase font-bold mb-6 relative z-10">Ready when you are</p>
          <h2 className="font-serif-elegant text-3xl sm:text-5xl text-white font-light mb-6 relative z-10">
            Book your room.<br />
            <span className="italic text-cyan-400">The coast is waiting.</span>
          </h2>
          <p className="text-slate-400 text-sm font-light max-w-md mx-auto mb-10 relative z-10">
            Message us on WhatsApp or fill our quick form. We'll confirm availability and have everything ready for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="px-10 py-4 bg-cyan-500 text-slate-950 font-bold text-sm rounded-2xl hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.35)] w-full sm:w-auto text-center cursor-pointer"
            >
              Check Availability
            </Link>
            <Link
              to="/rooms"
              className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-2xl hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Cabins
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />
    </div>
  )
}
