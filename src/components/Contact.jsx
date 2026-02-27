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
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    CONNECT WITH US
                </h2>
                <p className="text-xl text-gray-400 font-tech mb-12">
                    Ready to fuse innovation and power? Reach out to our team.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="mailto:hello@codeonvibes.com" className="inline-block px-8 py-4 border border-[var(--color-neon-blue)] text-[var(--color-neon-blue)] rounded hover:bg-[var(--color-neon-blue)] hover:text-black font-display font-bold tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(79, 182, 216,0.6)]">
                        EMAIL US
                    </a>
                    <a href="#" className="inline-block px-8 py-4 bg-gray-900 border border-gray-700 text-white rounded hover:border-gray-500 font-display font-bold tracking-widest transition-all duration-300">
                        DISCORD
                    </a>
                </div>
            </div>

            <footer className="w-full mt-32 text-center text-gray-600 font-tech text-sm">
                &copy; 2026 Code On Vibes. All Rights Reserved.
            </footer>
        </section>
    );
};

export default Contact;
