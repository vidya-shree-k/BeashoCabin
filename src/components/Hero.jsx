import { Link } from 'react-router-dom'
import bgImg from '../assets/hero_illustration.png'

export default function Hero({ isHome = false }) {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Full Bleed Background */}
            <div className="absolute inset-0">
                <img
                    src={bgImg}
                    alt="Beasho Cabin Gokarna"
                    className="w-full h-full object-cover object-center"
                />
                {/* Lighter overlay so illustration colors shine through */}
                <div className="absolute inset-0 bg-slate-950/40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            </div>

            {/* Centered Content */}
            <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
                    <p className="text-cyan-400 text-[10px] tracking-[0.4em] uppercase font-bold mb-6 animate-fade-in">
                        Bhavikodla Beach · Gokarna, India
                    </p>

                    <h1 className="font-serif-elegant text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-6 animate-fade-in-up">
                        Your private escape<br />
                        <span className="italic text-cyan-400">by the sea.</span>
                    </h1>

                    <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-md mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        30 metres from the water. Clean rooms, warm hosts, and the sound of waves all night long.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-cyan-500 text-slate-950 font-bold text-sm rounded-2xl hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.35)] text-center w-full sm:w-auto"
                        >
                            Check Availability
                        </Link>
                        <Link
                            to="/rooms"
                            className="px-8 py-4 bg-white/15 border border-white/25 text-white font-bold text-sm rounded-2xl hover:bg-white/25 transition-all duration-300 backdrop-blur-sm text-center w-full sm:w-auto"
                        >
                            See Cabins
                        </Link>
                    </div>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-10 right-8 flex flex-col items-center gap-2 opacity-40">
                <div className="w-px h-10 bg-gradient-to-b from-white/10 to-cyan-400"></div>
                <span className="text-[9px] tracking-[0.4em] uppercase text-slate-400">Scroll</span>
            </div>
        </section>
    )
}
