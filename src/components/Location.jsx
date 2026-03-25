export default function Location() {
    return (
        <section id="location" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-6">
                        Coordinates
                    </div>
                    <h2 className="font-serif-elegant text-5xl sm:text-7xl text-white leading-tight mb-6">
                        Sacred<br />
                        <span className="italic text-cyan-400 text-4xl sm:text-6xl">Geography</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Located where the earth meets the ether, along the Bhavikodla Beach Road.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-stretch">
                    {/* Map Embed (Midnight Silk Filter) */}
                    <div className="lg:col-span-7 rounded-[40px] overflow-hidden border border-white/5 shadow-3xl bg-slate-900 group relative">
                        <iframe
                            id="google-map"
                            title="Beasho Cabin Location"
                            src="https://maps.google.com/maps?q=Beasho%20Cabin%20Gokarna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            className="min-h-[500px]"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                    </div>

                    {/* Info Cards (Specular Glass) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="glass-panel p-10 border border-white/5 flex flex-col h-full hover:border-cyan-500/20 transition-all duration-700">
                            <div className="mb-10">
                                <span className="text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold block mb-4">The Point</span>
                                <h3 className="font-serif-elegant text-3xl text-white mb-6">Bhavikodla Beach Rd</h3>
                                <p className="text-slate-400 text-sm leading-relaxed italic font-light">
                                    "A quiet passage between the palms and the tides, where every step leads closer to the sound of the sea."
                                </p>
                            </div>

                            <div className="space-y-6 flex-grow">
                                {[
                                    { place: 'Bhavikodla Beach', dist: 'Minutes away', icon: 'M 12 2 L 12 22' },
                                    { place: 'Om Beach', dist: '2.5 km', icon: 'M 4 12 A 8 8 0 0 1 20 12' },
                                    { place: 'Kudle Beach', dist: '2 km', icon: 'M 2 20 L 22 20' },
                                    { place: 'Gokarna Town', dist: '4 km', icon: 'M 12 2 L 12 22' },
                                ].map((d) => (
                                    <div key={d.place} className="flex items-center justify-between pb-4 border-b border-white/5">
                                        <span className="text-slate-300 text-sm">{d.place}</span>
                                        <span className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase">{d.dist}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <a
                                    href="https://maps.app.goo.gl/TKpddvrd5MHkJ5wY9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-4 bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-slate-950 transition-all duration-500 text-white font-bold text-xs tracking-[0.3em] uppercase py-5 rounded-2xl w-full"
                                >
                                    Navigate on Maps
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12h15m0 0-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
