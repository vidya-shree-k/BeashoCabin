import { useState } from 'react'

// Glob import all renamed cabin images
const imageModules = import.meta.glob('../assets/*.jpg', { eager: true })

const galleryItems = Object.entries(imageModules)
    .filter(([path]) => !path.includes('react'))  // exclude react.svg if any
    .map(([path, mod], i) => {
        // Derive a human-friendly label from filename
        const filename = path.split('/').pop().replace('.jpg', '')
        const labelMap = {
            'homepage':        'The Horizon',
            'bathroom':        'The Rinse',
            'bathroom2':       'The Calm',
            'beachview1':      'Sea Line',
            'board1':          'At Beasho',
            'cafeview':        'The Café',
            'nightview1':      'Midnight Glow',
            'nightview2':      'Night Shore',
            'nightview3':      'Stars Over Sand',
            'nightview4':      'Blue Hour',
            'ourcustomers':    'Our People',
            'party':           'The Vibe',
            'party1':          'Beach Party',
            'partycustomers':  'Cheers',
            'playcarrom':      'Board Games',
            'room1':           'The Suite',
            'room2':           'Sea View Room',
            'room3':           'The Nest',
            'sunsetview':      'Golden Hour',
            'unnamed':         'Gokarna Life',
        }
        return {
            id: String(i),
            label: labelMap[filename] || filename,
            image: mod.default,
        }
    })

export default function Gallery() {
    const [lightbox, setLightbox] = useState(null)
    const [activeIdx, setActiveIdx] = useState(null)

    const openLightbox = (item, idx) => {
        setLightbox(item)
        setActiveIdx(idx)
    }

    const prev = (e) => {
        e.stopPropagation()
        const newIdx = (activeIdx - 1 + galleryItems.length) % galleryItems.length
        setLightbox(galleryItems[newIdx])
        setActiveIdx(newIdx)
    }

    const next = (e) => {
        e.stopPropagation()
        const newIdx = (activeIdx + 1) % galleryItems.length
        setLightbox(galleryItems[newIdx])
        setActiveIdx(newIdx)
    }

    return (
        <section id="gallery" className="py-16 lg:py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-cyan-400 text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Visual Echoes</p>
                    <h2 className="font-serif-elegant text-3xl sm:text-5xl text-white font-light leading-tight mb-4">
                        Life at <span className="italic text-cyan-400">Beasho</span>
                    </h2>
                    <p className="text-slate-500 text-sm font-light max-w-md mx-auto">
                        Every moment, every angle — captured at Bhavikodla Beach.
                    </p>
                </div>

                {/* Masonry-style grid — all images */}
                <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
                    {galleryItems.map((item, idx) => (
                        <div
                            key={item.id}
                            className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative border border-white/5 hover:border-cyan-500/20 transition-all duration-500"
                            onClick={() => openLightbox(item, idx)}
                        >
                            <img
                                src={item.image}
                                alt={item.label}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Hover label */}
                            <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/50 transition-all duration-400 flex items-end p-4">
                                <span className="text-white text-xs font-bold tracking-widest uppercase translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox with prev/next navigation */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-10"
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="relative max-w-5xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src={lightbox.image}
                                alt={lightbox.label}
                                className="w-full max-h-[75vh] object-contain bg-slate-900"
                            />
                        </div>

                        {/* Label bar */}
                        <div className="flex items-center justify-between pt-5 px-1">
                            <p className="font-serif-elegant text-xl text-white italic">{lightbox.label}</p>
                            <p className="text-cyan-400/50 text-[10px] tracking-widest uppercase font-bold">
                                {activeIdx + 1} / {galleryItems.length}
                            </p>
                        </div>

                        {/* Prev / Next */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-slate-950 transition-all"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-slate-950 transition-all"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>

                        {/* Close */}
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-red-500 transition-all"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
