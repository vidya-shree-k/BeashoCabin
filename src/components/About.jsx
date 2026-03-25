export default function About() {
    const features = [
        { label: 'Sunset Views' },
        { label: 'Fresh Air' },
        { label: 'Private Cabins' },
        { label: 'Peaceful Stay' },
    ]

    return (
        <section id="about" className="py-24 lg:py-40 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    {/* Left: Text Content in Glass */}
                    <div className="glass-panel p-10 sm:p-16 border border-white/5 shadow-2xl animate-fade-in">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
                            <span className="text-cyan-400 text-sm tracking-[0.3em] uppercase font-bold">Resonance</span>
                        </div>

                        <h2 className="font-serif-elegant text-5xl sm:text-6xl text-white leading-tight mb-10">
                            A Coastal Sanctuary<br />
                            <span className="italic text-cyan-400">Beyond Time</span>
                        </h2>

                        <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-12 font-light">
                            <p>
                                Beasho Cabin is a minimalist retreat where the architecture yields to the 
                                <span className="text-white"> boundless Pacific horizon.</span> Here, the boundary 
                                between the shore and the soul dissolves.
                            </p>
                            <p>
                                Nestled along the sacred sands of Gokarna, our cabins are crafted for those 
                                who seek the luxury of silence and the rhythm of the tides.
                            </p>
                        </div>

                        {/* Minimal Feature List */}
                        <div className="grid grid-cols-2 gap-4 mb-12">
                            {features.map((f) => (
                                <div key={f.label}
                                    className="flex items-center gap-3 text-slate-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
                                    <span className="text-sm tracking-wide">{f.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Abstract Liquid Visual */}
                    <div className="relative group">
                        <div className="relative rounded-[40px] overflow-hidden aspect-square glass-panel border border-white/10 shadow-3xl hover:border-cyan-500/30 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-cyan-900/20 opacity-60"></div>
                            
                            {/* Abstract Liquid Shape (SVG) */}
                            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-40">
                              <path 
                                d="M200 40C111.6 40 40 111.6 40 200S111.6 360 200 360 360 288.4 360 200 288.4 40 200 40Z" 
                                fill="url(#liquidGradient)"
                                className="animate-pulse"
                                style={{ transformOrigin: 'center', scale: '0.9' }}
                              />
                              <defs>
                                <radialGradient id="liquidGradient" cx="50%" cy="50%" r="50%">
                                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                </radialGradient>
                              </defs>
                            </svg>

                            <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                              <p className="font-serif-elegant text-3xl text-white italic leading-relaxed">
                                "In the pause between the waves, we found ourselves."
                              </p>
                            </div>
                            
                            {/* Image Overlay (Subtle) */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                                <p className="text-cyan-400/80 text-xs tracking-[0.2em] uppercase font-medium">Bhavikodla · Gokarna</p>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
