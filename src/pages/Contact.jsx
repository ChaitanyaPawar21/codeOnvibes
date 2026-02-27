import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
            className="py-32 px-4 flex flex-col items-center justify-center bg-black relative z-10"
        >
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent opacity-50"></div>

            <div className="max-w-3xl mx-auto text-center reveal">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 text-glow">
                    CONNECT WITH US
                </h2>
                <p className="text-xl text-gray-400 font-tech mb-12">
                    Ready to fuse innovation and power? Reach out to our team.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 mb-16">
                    <h1 className="inline-block px-8 py-4 border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] rounded hover:bg-[var(--color-neon-blue)] hover:text-black font-display font-bold tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,182,216,0.6)] text-lg cursor-pointer">
                        EMAIL US
                    </h1>
                    <a onClick={() => { window.open('https://mail.google.com/mail/u/1/#inbox?compose=CllgCJqXzDBHLkDkxkxZwJMxrShgVGJtxGlmsLSsFFlpNhVstcjzXncZjvTnWGrNJRdSsrGGWGq', '_blank') }} className='text-gray-400 font-tech text-sm hover:text-[var(--color-neon-blue)] transition-colors duration-300 cursor-pointer'>wings_tech@geca.ac.in</a>
                </div>
            </div>

            <div className="max-w-4xl mx-auto w-full reveal">
                <h1 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-12 tracking-wide">Contact</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    {/* Event Head Card */}
                    <div className="bg-[var(--color-dark-surface)] border border-gray-800 rounded-xl p-6 text-center hover:border-[var(--color-neon-blue)]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,182,216,0.15)] group">
                        <h3 className="text-sm font-tech uppercase tracking-[0.2em] text-[var(--color-neon-blue)] mb-4 opacity-80">Event Head</h3>
                        <p className="text-xl font-tech font-semibold text-white mb-3">Chaitanya Pawar</p>
                        <p className="flex items-center justify-center gap-2 text-gray-400 font-tech text-sm group-hover:text-[var(--color-neon-blue)] transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>9370103857</span>
                        </p>
                    </div>

                    {/* Event Co-Head Card */}
                    <div className="bg-[var(--color-dark-surface)] border border-gray-800 rounded-xl p-6 text-center hover:border-[var(--color-neon-blue)]/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,182,216,0.15)] group">
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
