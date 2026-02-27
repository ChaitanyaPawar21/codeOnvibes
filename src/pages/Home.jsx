import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import GlowingButton from '../components/Buttons';
import Info from '../components/Info';
import Schedule from './Schedule';
import PrizePool from '../components/prizePool';
import Wings from './Wings';
import codeOnVibesPdf from '../assets/codeOnVibes.pdf';
import Footer from '../components/Footer';
import { ArrowDown } from 'lucide-react';

const imageModules = import.meta.glob('../assets/homeScreen/*.jpg', { eager: true, import: 'default' });
const imageArray = Object.values(imageModules);

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        // Initial Load Animations
        const tl = gsap.timeline();

        // Content fade in
        tl.fromTo(titleRef.current,
            { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out", delay: 0.5 }
        )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(buttonsRef.current.children,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
                "-=0.4"
            );

        // Background Image Animation Loop
        let frameIndex = 0;
        const interval = setInterval(() => {
            frameIndex = (frameIndex + 1) % imageArray.length;
            setCurrentFrame(frameIndex);
        }, 100); // ~12 fps

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <section
                id="home"
                ref={containerRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden flex-col flex-wrap bg-[var(--color-dark-bg)]"
            >
                {/* Background Particles/Aura & Video Sequence */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Animated Background Sequence */}
                    {imageArray.length > 0 && (
                        <img
                            src={imageArray[currentFrame]}
                            className="absolute inset-0 w-full h-full object-cover scale-105 opacity-80"
                            alt="Background Animation"
                        />
                    )}

                    {/* Dark overlay to make text visible */}
                    <div className="absolute inset-0 bg-black/60 z-[1] mix-blend-multiply"></div>

                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_80%)] z-10"></div>
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 z-[11] opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(90deg,rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 drop-shadow-[0_0_15px_rgba(79, 182, 216,0.6)] uppercase tracking-tight"
                    >
                        Code On Vibes
                    </h1>

                    <p
                        ref={subtitleRef}
                        className="text-xl md:text-2xl lg:text-3xl font-tech text-gray-300 mb-12 uppercase tracking-widest text-glow"
                    >
                        A Vibe Coding Hackathon
                    </p>

                    <div
                        ref={buttonsRef}
                        className="flex flex-col md:flex-row gap-6 items-center justify-center w-full"
                    >
                        <GlowingButton onClick={() => {
                            window.location.href = "https://www.wings2k26.com/events/codevibes/register";
                        }}
                            className="w-full md:w-auto min-w-[200px] bg-white/5 text-white box-shadow-none cursor-pointer hover:bg-[var(--color-neon-red)] hover:text-[#50b7d9]">
                            Register Now
                        </GlowingButton>
                        <GlowingButton className="w-full md:w-auto min-w-[200px] border-none bg-white/5 text-white box-shadow-none hover:bg-[var(--color-neon-red)] hover:text-[#50b7d9] cursor-pointer">
                            View Problem Statement
                        </GlowingButton>
                        <GlowingButton onClick={() => {
                            window.open(codeOnVibesPdf, '_blank');
                        }}
                            className="w-full md:w-auto min-w-[200px] border-none bg-white/5 text-white box-shadow-none hover:bg-[var(--color-neon-red)] hover:text-[#50b7d9] cursor-pointer">
                            Rulebook
                        </GlowingButton>
                    </div>
                </div>
                <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-2 z-30 cursor-pointer group'>
                    <p className='text-gray-400 font-tech text-xs uppercase tracking-[0.3em] group-hover:text-[var(--color-neon-blue)] transition-colors duration-300 animate-pulse'>Scroll Down</p>
                    <ArrowDown size={22} className="text-[var(--color-neon-blue)] animate-bounce drop-shadow-[0_0_8px_rgba(79,182,216,0.8)]" />
                </div>
            </section>

            <section>
                <Info />
                <Wings />
                <PrizePool />
                <Schedule />
                <Footer />
            </section>
        </>

    );
};

export default Hero;
