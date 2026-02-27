import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Wings = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(el.querySelectorAll('.fade-up'),
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section
            id="wings"
            ref={sectionRef}
            className="py-32 px-4 min-h-[80vh] flex flex-col items-center justify-center bg-[var(--color-dark-bg)] relative z-10"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="fade-up text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-red)] to-red-400 mb-8 drop-shadow-[0_0_10px_rgba(255,26,26,0.4)]">
                    OUR WINGS
                </h2>
                <p className="fade-up text-lg md:text-xl text-gray-400 font-tech max-w-2xl mx-auto leading-relaxed">
                    More details about the wings and categories will be updated soon. Prepare for the ultimate coding challenge.
                </p>

                {/* Placeholder cards */}
                <div className="fade-up mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-[var(--color-dark-surface)] border border-gray-800 rounded-xl h-64 hover:border-[var(--color-neon-red)] transition-colors duration-500 box-glow-hover flex items-center justify-center">
                            <span className="text-gray-600 font-display text-2xl">COMING SOON</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Wings;
