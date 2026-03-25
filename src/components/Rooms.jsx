import { Link } from 'react-router-dom'

const cabins = [
    {
        id: 'driftwood',
        name: 'Driftwood',
        description: 'A minimalist sanctuary overlooking the infinite horizon.',
        price: '₹2,500',
        capacity: '2 Guests',
        accentColor: '#06b6d4'
    },
    {
        id: 'sunrise',
        name: 'Sunrise',
        description: 'Greet the light in a space designed for clarity and peace.',
        price: '₹3,000',
        capacity: '2 Guests',
        accentColor: '#38bdf8'
    },
    {
        id: 'forest',
        name: 'Forest Edge',
        description: 'Where the liquid ocean meets the depth of the coastal woods.',
        price: '₹2,800',
        capacity: '3 Guests',
        accentColor: '#00d2ff'
    },
]

export default function Rooms() {
    return (
        <section id="rooms" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-6">
                        The Sanctuaries
                    </div>
                    <h2 className="font-serif-elegant text-5xl sm:text-7xl text-white leading-tight mb-6">
                        Liquid<br />
                        <span className="italic text-cyan-400 text-4xl sm:text-6xl">Living Spaces</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Three distinct experiences, each designed to harmonize with the elements.
                    </p>
                </div>

                {/* Cabin Cards (Liquid Glass Style) */}
                <div className="grid md:grid-cols-3 gap-12">
                    {cabins.map((cabin) => (
                        <div
                            key={cabin.id}
                            className="group relative"
                        >
                            {/* Card Background Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                            
                            <div className="glass-panel relative flex flex-col h-full border border-white/5 hover:border-cyan-500/20 transition-all duration-500 overflow-hidden shadow-2xl hover:-translate-y-2">
                                {/* Abstract Liquid Preview */}
                                <div className="h-48 relative overflow-hidden bg-slate-900/50">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-cyan-900/20 opacity-50"></div>
                                    <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full opacity-30 group-hover:scale-110 transition-transform duration-1000">
                                      <path 
                                        d="M0,50 Q50,20 100,50 T200,50 L200,100 L0,100 Z" 
                                        fill="var(--accent-liquid, #06b6d4)" 
                                        className="animate-pulse"
                                      />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <span className="text-white/40 font-serif-elegant italic text-xl tracking-widest">{cabin.name}</span>
                                    </div>
                                    <div className="absolute top-6 left-6 px-3 py-1 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                                      {cabin.capacity}
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-baseline mb-4">
                                        <h3 className="font-serif-elegant text-3xl text-white">{cabin.name}</h3>
                                        <div className="text-right">
                                            <p className="text-white font-bold text-xl">{cabin.price}</p>
                                            <p className="text-slate-500 text-[10px] uppercase tracking-widest">/ night</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-10 font-light italic">
                                        "{cabin.description}"
                                    </p>

                                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                                      <Link
                                          to="/contact"
                                          className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
                                      >
                                          Check Availability
                                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
                                          </svg>
                                      </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Visual Divider */}
                <div className="mt-20 flex justify-center">
                  <div className="w-[1px] h-24 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                </div>
            </div>
        </section>
    )
}
