import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgVideo from '../assets/contact/gojo.mp4';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(el.querySelectorAll('.reveal'),
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="py-32 px-4 flex flex-col items-center justify-center relative z-10 overflow-hidden"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    src={bgVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Dark/Blur Overlay for text readability */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent opacity-50 z-10"></div>

            <div className="max-w-3xl mx-auto text-center reveal relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-glow">
                    CONNECT WITH US
                </h2>
                <p className="text-xl text-gray-400 font-tech mb-12">
                    Ready to fuse innovation and power? Reach out to our team.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
                    {/* Email Us */}
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="inline-block px-8 py-4 border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] rounded hover:bg-[var(--color-neon-blue)] hover:text-black font-display font-bold tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,182,216,0.6)] text-lg cursor-pointer">
                            EMAIL US
                        </h1>
                        <a onClick={() => { window.open('https://mail.google.com/mail/u/1/#inbox?compose=CllgCJqXzDBHLkDkxkxZwJMxrShgVGJtxGlmsLSsFFlpNhVstcjzXncZjvTnWGrNJRdSsrGGWGq', '_blank') }} className='text-gray-400 font-tech text-sm hover:text-[var(--color-neon-blue)] transition-colors duration-300 cursor-pointer'>wings_tech@geca.ac.in</a>
                    </div>

                    {/* WhatsApp Channel */}
                    <div className="flex flex-col items-center gap-2">
                        <a
                            href="https://whatsapp.com/channel/0029Vb7fnzAKLaHpzw3jmj0n"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-[#25D366] text-[#25D366] rounded hover:bg-[#25D366] hover:text-black font-display font-bold tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] text-lg cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            JOIN WHATSAPP
                        </a>
                        <span className="text-gray-400 font-tech text-sm">Stay updated via WhatsApp</span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto w-full reveal relative z-10">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12 tracking-wide">Contact</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {/* Event Head Card */}
                    <div className="bg-[var(--color-dark-surface)]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-[var(--color-neon-blue)]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,182,216,0.15)] group">
                        <h3 className="text-sm font-tech uppercase tracking-[0.2em] text-[var(--color-neon-blue)] mb-4 opacity-80">Event Head</h3>
                        <p className="text-xl font-tech font-semibold text-white mb-3">Chaitanya Pawar</p>
                        <p className="flex items-center justify-center gap-2 text-gray-400 font-tech text-sm group-hover:text-[var(--color-neon-blue)] transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>9370103857</span>
                        </p>
                    </div>

                    {/* Event Co-Head Card */}
                    <div className="bg-[var(--color-dark-surface)]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-[var(--color-neon-blue)]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,182,216,0.15)] group">
                        <h3 className="text-sm font-tech uppercase tracking-[0.2em] text-[var(--color-neon-blue)] mb-4 opacity-80">Event Co-Head</h3>
                        <p className="text-xl font-tech font-semibold text-white mb-3">Mourya Maradwar</p>
                        <p className="flex items-center justify-center gap-2 text-gray-400 font-tech text-sm group-hover:text-[var(--color-neon-blue)] transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>9527153778</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
