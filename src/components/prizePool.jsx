import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dekuImage from '../assets/characters/deku.png';

gsap.registerPlugin(ScrollTrigger);

const PrizePool = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        gsap.fromTo(el.querySelectorAll('.animate-element'),
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );

        gsap.fromTo(el.querySelector('.animate-image'),
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
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
            id="prizepool"
            ref={sectionRef}
            className="py-24 px-4 min-h-[70vh] flex items-center justify-center bg-[var(--color-dark-bg)] relative z-10 border-t border-gray-900 overflow-hidden"
        >
            {/* Background Glows matching the reference image */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

                {/* Text Content */}
                <div className="flex-1 text-left w-full pl-4 md:pl-10">
                    <h2 className="animate-element text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 mb-6 drop-shadow-[0_0_15px_rgba(253,224,71,0.5)] uppercase tracking-wider">
                        ₹32,500 PRIZE POOL!
                    </h2>
                    <p className="animate-element text-lg md:text-xl text-gray-100 font-tech leading-relaxed max-w-xl shadow-sm">
                        Prepare to be captivated by a <span className="text-yellow-400 font-bold">₹32,500 prize pool!</span> This isn't just about the competition; it's about the journey. Embrace the challenge, collaborate with your team, and let your creativity soar. Code On Vibes promises an unforgettable experience filled with fun, engagement, and the thrill of innovation. So, are you ready to code your way to success? Join us for Code On Vibes and let the coding begin!
                    </p>
                </div>

                {/* Character/Image Placeholder */}
                <div className="flex-1 flex justify-center md:justify-end animate-image w-full">
                    {/* Placeholder for the character image. Replace src with your local transparent character image */}
                    <div className="relative w-full max-w-md flex items-center justify-center">
                        {/* Inner glow for character */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-transparent rounded-full blur-3xl opacity-60"></div>
                        <img
                            src={dekuImage}
                            alt="Prize Pool Character"
                            className="relative z-10 object-contain max-h-[500px] w-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PrizePool;
