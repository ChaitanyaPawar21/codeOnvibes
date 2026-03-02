import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import GlowingButton from '../components/Buttons';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import codeOnVibesPdf from '../assets/codeOnVibes.pdf';
import pptFormat from '../assets/Code-on-vibes.pptx';
import bgVideo from '../assets/register/eren.mp4';
import problemStatementPdf from '../assets/problemStatement/CODE.pdf';

const Register = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const buttonsRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        ).fromTo(buttonsRef.current.children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)" },
            "-=0.5"
        );
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden flex-col bg-[var(--color-dark-bg)]"
        >
            {/* Background elements to match theme */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Animated Background Video */}
                <video
                    src={bgVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105 opacity-80"
                />

                {/* Dark overlay to make text visible */}
                <div className="absolute inset-0 bg-black/60 z-[1] mix-blend-multiply"></div>

                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_80%)] z-10"></div>
                <div className="absolute inset-0 z-[11] opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(90deg,rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
            </div>



            <div className="relative z-20 text-center px-4 w-full max-w-4xl mx-auto flex flex-col items-center">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-16 drop-shadow-[0_0_15px_rgba(79,182,216,0.6)] uppercase tracking-tight"
                >
                    Registration Portal
                </h1>

                <div
                    ref={buttonsRef}
                    className="flex flex-col gap-8 w-full max-w-md"
                >
                    {/* Assuming cov.zip acts as the PPT format for now, otherwise users can change the asset */}
                    <a href={pptFormat} download="code-on-vives.pptx" className="w-full">
                        <GlowingButton
                            className="w-full py-4 text-lg bg-white/5 text-white box-shadow-none hover:bg-[var(--color-neon-blue)] hover:text-black cursor-pointer transition-all duration-300"
                        >
                            Download PPT Format
                        </GlowingButton>
                    </a>

                    <GlowingButton
                        onClick={() => {
                            window.open(problemStatementPdf, '_blank');
                        }}
                        className="w-full py-4 text-lg bg-white/5 text-white box-shadow-none hover:bg-[var(--color-neon-blue)] hover:text-black cursor-pointer transition-all duration-300"
                    >
                        View Problem Statement
                    </GlowingButton>

                    <GlowingButton
                        onClick={() => {
                            window.open('https://forms.gle/g3DQ5DedZKL7PRUp9', '_blank');
                        }}
                        className="w-full py-4 text-lg bg-white/5 text-[var(--color-neon-red)] border-[var(--color-neon-red)] hover:bg-[var(--color-neon-red)] hover:text-white cursor-pointer transition-all duration-300 shadow-[0_0_15px_rgba(255,51,51,0.5)]"
                    >
                        Submit PPT
                    </GlowingButton>
                </div>
            </div>
        </section>
    );
};

export default Register;