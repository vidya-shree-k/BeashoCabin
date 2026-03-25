import { useState } from 'react'
import { openWhatsApp } from '../utils/whatsapp'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '2',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Compile form data into a WhatsApp message
        const message = `*New Booking Enquiry*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Date:* ${formData.date || 'Not specified'}\n` +
            `*Guests:* ${formData.guests}\n` +
            `*Message:* ${formData.message || 'None'}\n\n` +
            `Please let me know if there is availability!`

        // Open WhatsApp
        openWhatsApp(message)
        
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', phone: '', date: '', guests: '2', message: '' })
        }, 4000)
    }

    const whatsappNumber = '919876543210'
    const whatsappMsg = encodeURIComponent(
        `Hello! I'm interested in booking a cabin at Beasho Cabin Gokarna. Please share availability and rates.`
    )
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`

    return (
        <section id="contact" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] tracking-[0.3em] uppercase font-bold mb-6">
                        Manifest
                    </div>
                    <h2 className="font-serif-elegant text-5xl sm:text-7xl text-white leading-tight mb-6">
                        Initiate Your<br />
                        <span className="italic text-cyan-400 text-4xl sm:text-6xl">Journey</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Contact Channels (Specular Glass) */}
                    <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                        <div className="glass-panel p-10 border border-white/5 hover:border-cyan-500/20 transition-all duration-700">
                            <h3 className="font-serif-elegant text-2xl text-white mb-8 italic">Direct Channels</h3>
                            
                            <div className="space-y-8">
                                <a href={whatsappURL} target="_blank" rel="noopener noreferrer" 
                                   className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                                        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm tracking-widest uppercase mb-1">WhatsApp</p>
                                        <p className="text-slate-400 text-xs">Instant Resonance</p>
                                    </div>
                                </a>

                                <a href="mailto:stay@beashocabin.com" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-950 transition-all">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm tracking-widest uppercase mb-1">Email</p>
                                        <p className="text-slate-400 text-xs text-wrap break-all">stay@beashocabin.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        
                        <div className="p-10">
                            <p className="text-slate-500 text-sm font-light leading-relaxed italic">
                                "We believe in the luxury of silence and the clarity of the coast. Let us prepare your sanctuary."
                            </p>
                        </div>
                    </div>

                    {/* Inquiry Form (Liquid Glass) */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="glass-panel p-10 sm:p-16 border border-white/5 shadow-3xl relative overflow-hidden">
                            {/* Animated Background Blob */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
                                    <div className="w-20 h-20 bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.4)] rounded-3xl flex items-center justify-center mb-8 rotate-12">
                                        <svg viewBox="0 0 24 24" className="w-10 h-10 text-slate-950" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h4 className="font-serif-elegant text-4xl text-white mb-4 italic">Echo Received</h4>
                                    <p className="text-slate-400 font-light italic">"The tides are shifting. We will be in touch soon."</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold" htmlFor="name">Identity</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 transition-all font-light"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold" htmlFor="email">Portal</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 transition-all font-light"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold" htmlFor="date">Arrival</label>
                                            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-light color-scheme-dark"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold" htmlFor="guests">souls</label>
                                            <select id="guests" name="guests" value={formData.guests} onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-light"
                                            >
                                                {[1, 2, 3, 4].map(n => <option key={n} value={n} className="bg-slate-900">{n} {n > 1 ? 'Guests' : 'Guest'}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-bold" htmlFor="message">Intent</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-cyan-500/50 transition-all font-light resize-none"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-cyan-500 text-slate-950 font-bold text-xs tracking-[0.4em] uppercase py-6 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-[1.02] transition-all duration-500"
                                    >
                                        Check Availability
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
