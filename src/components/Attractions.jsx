const attractions = [
    {
        id: 'attraction-om-beach',
        name: 'Om Beach',
        tag: 'Most Famous',
        tagColor: 'bg-sky-500',
        emoji: '🌊',
        distance: '2.5 km',
        description: 'The iconic Om-shaped beach of Gokarna. Perfect for swimming, kayaking, and watching the sunset. Named for its resemblance to the sacred Om symbol.',
        highlights: ['Water Sports', 'Cafés & Huts', 'Sunset Views'],
        gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 50%, #075985 100%)',
        scene: (
            <svg viewBox="0 0 280 180" className="w-full h-full" fill="none">
                <defs>
                    <linearGradient id="om" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="60%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#c4a882" />
                    </linearGradient>
                </defs>
                <rect width="280" height="180" fill="url(#om)" />
                <ellipse cx="60" cy="130" rx="70" ry="35" fill="rgba(5,50,20,0.8)" />
                <ellipse cx="230" cy="135" rx="65" ry="32" fill="rgba(5,50,20,0.8)" />
                <rect x="0" y="140" width="280" height="40" fill="rgba(14,165,233,0.5)" />
                <path d="M0,145 Q70,133 140,145 Q210,157 280,145" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none" />
                <path d="M0,162 Q70,152 140,162 Q210,172 280,162" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
                <rect x="0" y="165" width="280" height="15" fill="rgba(139,105,73,0.85)" />
                <circle cx="220" cy="35" r="22" fill="#fde68a" style={{ filter: 'drop-shadow(0 0 15px rgba(251,191,36,0.8))' }} />
                {/* Om shape hint */}
                <path d="M130,135 Q90,100 100,75 Q110,50 140,60 Q170,70 155,95 Q145,115 165,125" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
            </svg>
        ),
    },
    {
        id: 'attraction-kudle',
        name: 'Kudle Beach',
        tag: 'Peaceful',
        tagColor: 'bg-emerald-500',
        emoji: '🏖️',
        distance: '2 km',
        description: 'A tranquil crescent of golden sand with a relaxed hippie vibe. Surrounded by hills and dotted with beach shacks serving fresh coconuts and seafood.',
        highlights: ['Shack Dining', 'Yoga Sessions', 'Long Walks'],
        gradient: 'linear-gradient(135deg, #059669 0%, #0d9488 50%, #0369a1 100%)',
        scene: (
            <svg viewBox="0 0 280 180" className="w-full h-full" fill="none">
                <defs>
                    <linearGradient id="kd" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="55%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#c4a882" />
                    </linearGradient>
                </defs>
                <rect width="280" height="180" fill="url(#kd)" />
                <ellipse cx="50" cy="120" rx="60" ry="50" fill="rgba(5,60,25,0.85)" />
                <ellipse cx="240" cy="115" rx="55" ry="45" fill="rgba(5,60,25,0.85)" />
                <rect x="0" y="140" width="280" height="40" fill="rgba(14,165,233,0.45)" />
                <path d="M0,142 Q70,130 140,142 Q210,154 280,142" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none" />
                <rect x="0" y="162" width="280" height="18" fill="rgba(139,105,73,0.9)" />
                {/* Beach shacks */}
                <rect x="105" y="125" width="30" height="20" fill="rgba(20,10,5,0.75)" />
                <polygon points="105,125 135,125 120,112" fill="rgba(180,80,30,0.8)" />
                <rect x="148" y="125" width="28" height="20" fill="rgba(20,10,5,0.75)" />
                <polygon points="148,125 176,125 162,112" fill="rgba(30,140,60,0.7)" />
                <circle cx="55" cy="45" r="18" fill="#fde68a" style={{ filter: 'drop-shadow(0 0 12px rgba(251,191,36,0.7))' }} />
            </svg>
        ),
    },
    {
        id: 'attraction-temple',
        name: 'Gokarna Temple',
        tag: 'Sacred',
        tagColor: 'bg-amber-500',
        emoji: '🛕',
        distance: '3 km',
        description: 'The revered Shri Mahabaleshwara Temple, one of the most sacred Shiva shrines in South India, dating back thousands of years.',
        highlights: ['Ancient Architecture', 'Spiritual Vibes', 'Car Festival'],
        gradient: 'linear-gradient(135deg, #d97706 0%, #92400e 50%, #7c2d12 100%)',
        scene: (
            <svg viewBox="0 0 280 180" className="w-full h-full" fill="none">
                <defs>
                    <linearGradient id="tp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1c0a00" />
                        <stop offset="50%" stopColor="#92400e" />
                        <stop offset="100%" stopColor="#c4a882" />
                    </linearGradient>
                </defs>
                <rect width="280" height="180" fill="url(#tp)" />
                <circle cx="140" cy="35" r="18" fill="rgba(255,235,150,0.9)" style={{ filter: 'drop-shadow(0 0 15px rgba(255,200,50,0.8))' }} />
                {/* Temple */}
                <rect x="75" y="80" width="130" height="100" fill="rgba(80,40,10,0.9)" />
                <polygon points="75,80 205,80 140,30" fill="rgba(60,25,5,0.95)" />
                <polygon points="88,80 192,80 140,42" fill="rgba(70,30,8,0.85)" />
                <polygon points="100,80 180,80 140,54" fill="rgba(80,35,10,0.75)" />
                <polygon points="112,80 168,80 140,64" fill="rgba(90,40,12,0.65)" />
                <rect x="123" y="125" width="34" height="55" rx="17" fill="rgba(200,140,40,0.5)" />
                <rect x="82" y="95" width="22" height="22" rx="2" fill="rgba(255,200,50,0.3)" />
                <rect x="176" y="95" width="22" height="22" rx="2" fill="rgba(255,200,50,0.3)" />
                <rect x="108" y="95" width="22" height="22" rx="2" fill="rgba(255,200,50,0.25)" />
                <rect x="150" y="95" width="22" height="22" rx="2" fill="rgba(255,200,50,0.25)" />
                <rect x="138" y="20" width="4" height="15" fill="rgba(255,120,30,0.9)" />
                <path d="M142,20 L158,26 L142,32 Z" fill="rgba(255,80,10,0.9)" />
                <rect x="0" y="168" width="280" height="12" fill="rgba(139,105,73,0.7)" />
                <circle cx="30" cy="20" r="1.5" fill="rgba(255,255,255,0.7)" />
                <circle cx="250" cy="15" r="1" fill="rgba(255,255,255,0.6)" />
            </svg>
        ),
    },
    {
        id: 'attraction-sunset',
        name: 'Sunset Viewpoint',
        tag: 'Must Visit',
        tagColor: 'bg-rose-500',
        emoji: '🌅',
        distance: '1.5 km',
        description: 'Watch the sun dip into the Arabian Sea from the hilltop viewpoints around Gokarna. An unforgettable spectacle of color every evening.',
        highlights: ['Panoramic Views', 'Photography', 'Romantic Spot'],
        gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)',
        scene: (
            <svg viewBox="0 0 280 180" className="w-full h-full" fill="none">
                <defs>
                    <linearGradient id="sv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4c0519" />
                        <stop offset="30%" stopColor="#ec4899" />
                        <stop offset="60%" stopColor="#f97316" />
                        <stop offset="85%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#c4a882" />
                    </linearGradient>
                </defs>
                <rect width="280" height="180" fill="url(#sv)" />
                <circle cx="140" cy="80" r="42" fill="rgba(255,200,50,0.95)" style={{ filter: 'drop-shadow(0 0 30px rgba(255,160,30,0.9))' }} />
                <rect x="0" y="150" width="280" height="30" fill="rgba(14,165,233,0.4)" />
                <path d="M0,152 Q70,144 140,152 Q210,160 280,152" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
                <rect x="0" y="165" width="280" height="15" fill="rgba(139,105,73,0.85)" />
                {/* Silhouette of cliff & people */}
                <polygon points="0,150 80,150 50,100 0,120" fill="rgba(5,5,10,0.85)" />
                <polygon points="200,150 280,150 280,110 260,90" fill="rgba(5,5,10,0.85)" />
                {/* Couple silhouette */}
                <ellipse cx="260" cy="91" rx="5" ry="3" fill="rgba(5,5,10,0.8)" />
                <rect x="258" y="78" width="4" height="13" rx="2" fill="rgba(5,5,10,0.85)" />
                <circle cx="260" cy="76" r="5" fill="rgba(5,5,10,0.85)" />
                <ellipse cx="272" cy="92" rx="5" ry="3" fill="rgba(5,5,10,0.8)" />
                <rect x="270" y="79" width="4" height="13" rx="2" fill="rgba(5,5,10,0.85)" />
                <circle cx="272" cy="77" r="5" fill="rgba(5,5,10,0.85)" />
                {/* Reflection */}
                <line x1="140" y1="122" x2="140" y2="155" stroke="rgba(255,200,50,0.35)" strokeWidth="3" strokeDasharray="5 7" />
                <circle cx="40" cy="15" r="1.5" fill="rgba(255,255,255,0.7)" />
                <circle cx="220" cy="10" r="1" fill="rgba(255,255,255,0.6)" />
            </svg>
        ),
    },
]

export default function Attractions() {
    return (
        <section id="attractions" className="py-24 lg:py-32 bg-[#fdfaf6] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12 bg-sky-400"></div>
                        <span className="text-sky-500 text-sm tracking-widest uppercase font-medium">Explore Nearby</span>
                        <div className="h-px w-12 bg-sky-400"></div>
                    </div>
                    <h2 className="font-serif-elegant text-4xl sm:text-5xl lg:text-6xl text-slate-800 leading-tight mb-4">
                        Nearby<br />
                        <span className="italic text-sky-600">Attractions</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto">
                        Gokarna has so much to offer. Explore these beautiful spots just minutes from your cabin.
                    </p>
                </div>

                {/* Attraction Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {attractions.map((a) => (
                        <div
                            key={a.id}
                            id={a.id}
                            className="card-hover bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
                        >
                            {/* Scene */}
                            <div className="relative h-44 overflow-hidden">
                                <div className="absolute inset-0" style={{ background: a.gradient }}></div>
                                <div className="absolute inset-0">{a.scene}</div>
                                <div className={`absolute top-3 left-3 ${a.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                                    {a.tag}
                                </div>
                                <div className="absolute top-3 right-3 text-2xl">{a.emoji}</div>
                                <div className="absolute bottom-3 right-3 bg-black/30 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/20">
                                    📍 {a.distance}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-serif-elegant text-xl text-slate-800 font-medium mb-2">{a.name}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{a.description}</p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-1.5">
                                    {a.highlights.map((h) => (
                                        <span key={h} className="bg-sky-50 text-sky-600 text-xs font-medium px-2.5 py-1 rounded-full border border-sky-100">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
