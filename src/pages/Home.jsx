import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GlowingButton from '../components/Buttons';
import Wings from './Wings';
import Schedule from './Schedule';
import codeOnVibesPdf from '../assets/codeOnVibes.pdf';
import Footer from '../components/Footer';

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const auraRef = useRef(null);

    useEffect(() => {
        // Initial Load Animations
        const tl = gsap.timeline();

        // Aura pulse
        gsap.to(auraRef.current, {
            scale: 1.1,
            opacity: 0.6,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

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

        // Mouse parallax effect for aura
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 40;
            const yPos = (clientY / window.innerHeight - 0.5) * 40;

            gsap.to(auraRef.current, {
                x: xPos,
                y: yPos,
                duration: 1,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <section
                id="home"
                ref={containerRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden flex-col flex-wrap bg-[var(--color-dark-bg)]"
            >
                {/* Background Particles/Aura */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_80%)] z-10"></div>
                    <div
                        ref={auraRef}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-[var(--color-neon-blue)] opacity-40 blur-[100px] mix-blend-screen"
                    ></div>
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(90deg,rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
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
            </section>

            <section>
                <Wings />
                <Schedule />
                <Footer />
            </section>
        </>

    );
};

export default Hero;
