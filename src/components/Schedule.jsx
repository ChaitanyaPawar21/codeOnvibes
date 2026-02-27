import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(el.querySelectorAll('.fade-slide'),
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <section
            id="schedule"
            ref={sectionRef}
            className="py-32 px-4 min-h-[80vh] flex flex-col items-center bg-[var(--color-dark-bg)] relative z-10 border-t border-gray-900"
        >
            <div className="max-w-4xl mx-auto w-full">
                <h2 className="fade-slide text-4xl md:text-6xl font-display font-bold text-center text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    EVENT SCHEDULE
                </h2>

                <div className="space-y-8">
                    {['Opening Ceremony', 'Hacking Phase 1', 'Midnight Mastery', 'Submissions & judging'].map((item, i) => (
                        <div key={i} className="fade-slide flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-center p-6 bg-[var(--color-dark-surface)] border border-gray-800 rounded-lg hover:border-[var(--color-neon-red)] transition-colors duration-300 group">
                            <div className="text-[var(--color-neon-red)] font-display text-xl md:text-2xl font-bold min-w-[150px] group-hover:text-shadow-[0_0_8px_rgba(255,26,26,0.8)] transition-all">
                                Day {i + 1}
                            </div>
                            <div>
                                <h3 className="text-2xl font-tech text-white mb-2">{item}</h3>
                                <p className="text-gray-400">Time and details to be announced. Stay tuned to the latest updates.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
