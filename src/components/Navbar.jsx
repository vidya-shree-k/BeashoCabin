import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Cabins', path: '/rooms' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (path) => location.pathname === path

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-slate-950/50 backdrop-blur-2xl border-b border-white/5 py-3'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                >
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                            <path d="M3.5 18.5l4-8 4 4 2.5-4 4.5 8H3.5z" opacity="0.8" />
                            <path d="M2 20h20M12 3 C8 7 4 10 2 14h20C18 10 16 7 12 3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        </svg>
                    </div>
                    <div className="hidden sm:block">
                        <p className="font-serif-elegant font-bold text-xl leading-tight text-white">Beasho</p>
                        <p className="text-[10px] tracking-[0.3em] uppercase text-cyan-400 font-medium">Luxury Cabin</p>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-1 flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`px-5 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 ${
                                isActive(link.path) 
                                ? 'bg-white/10 text-cyan-400 shadow-inner' 
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                  </div>
                  <Link
                      to="/contact"
                      className="ml-4 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95"
                  >
                      Book Now
                  </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden w-11 h-11 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex flex-col items-center justify-center gap-1.5 transition-all hover:bg-white/10"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="bg-slate-900/90 backdrop-blur-2xl mx-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-4 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className={`block px-6 py-4 rounded-2xl text-lg font-medium transition-all ${
                                isActive(link.path)
                                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                : 'text-slate-300 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="block w-full text-center bg-cyan-500 text-slate-950 font-bold py-4 rounded-2xl mt-4 shadow-lg active:scale-95 transition-transform"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    )
}
