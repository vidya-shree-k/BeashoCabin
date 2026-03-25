import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white relative overflow-hidden pt-24 pb-12 border-t border-white/5">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/40 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
                    {/* Brand Meta */}
                    <div className="md:col-span-5 space-y-10">
                        <Link to="/" className="inline-block group">
                            <h2 className="font-serif-elegant text-3xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors uppercase">
                                Beasho<br />
                                <span className="italic text-cyan-400 group-hover:text-white transition-colors">Cabin</span>
                            </h2>
                        </Link>
                        
                        <p className="text-slate-500 text-sm font-light leading-relaxed italic max-w-sm">
                            "Coastal minimalism in the heart of Gokarna. Where the glass meets the sea and the silence speaks."
                        </p>

                        <div className="flex items-center gap-6">
                            {[
                                { label: 'Instagram', icon: 'M 12 2 C 20 2 22 4 22 12 C 22 20 20 22 12 22 C 4 22 2 20 2 12 C 2 4 4 2 12 2 M 12 7 A 5 5 0 1 0 12 17 A 5 5 0 0 0 12 7 M 17 6.5 L 17.5 6.5' },
                                { label: 'Facebook', icon: 'M 18 2 H 15 A 5 5 0 0 0 10 7 V 10 H 7 V 14 H 10 V 22 H 14 V 14 H 17 L 18 10 H 14 V 7 A 1 1 0 0 1 15 6 H 18 Z' },
                            ].map((s) => (
                                <a key={s.label} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all duration-500">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={s.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Architect */}
                    <div className="md:col-span-3 space-y-8">
                        <h4 className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold">Archives</h4>
                        <ul className="space-y-4">
                            {[
                                { label: 'About', path: '/about' },
                                { label: 'Cabins', path: '/rooms' },
                                { label: 'Gallery', path: '/gallery' },
                                { label: 'Contact', path: '/contact' },
                            ].map((l) => (
                                <li key={l.label}>
                                    <Link to={l.path} className="text-slate-400 hover:text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Oracle */}
                    <div className="md:col-span-4 space-y-8">
                        <h4 className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-bold">Resonance</h4>
                        <div className="space-y-6">
                            <p className="text-slate-400 text-xs leading-relaxed font-light">
                                Bhavikodla Beach Rd,<br />Gokarna, KN 581326
                            </p>
                            <a href="mailto:stay@beashocabin.com" className="block text-white font-bold text-xs tracking-widest hover:text-cyan-400 transition-all uppercase">
                                stay@beashocabin.com
                            </a>
                            <a href="tel:+919876543210" className="block text-white font-bold text-xs tracking-widest hover:text-cyan-400 transition-all uppercase">
                                +91 98765 43210
                            </a>
                        </div>
                    </div>
                </div>

                {/* Final Sign-off */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-slate-600 font-bold">
                        © {new Date().getFullYear()} Beasho Cabin . Pure Glass
                    </p>
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-slate-600 font-bold italic">Curated by</span>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-cyan-400 font-black">vidz_alchemy</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
