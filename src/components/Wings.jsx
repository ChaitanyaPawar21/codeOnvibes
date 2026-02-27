import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Dynamically import all images from the folder
const images = import.meta.glob('../assets/codeONvibes/*.jpg', { eager: true });
const frameKeys = Object.keys(images).sort();
const totalFrames = frameKeys.length;

const Wings = () => {
    const sectionRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(0);

    const fps = 10; // Animation speed in frames per second
    const frameInterval = 1000 / fps;

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

        let startTime = null;
        let animationFrameId;

        const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = time - startTime;

            if (progress > frameInterval) {
                setCurrentFrame((prev) => {
                    return prev >= Math.floor(totalFrames - 1) ? 0 : prev + 1;
                });
                startTime = time;
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    const currentImageUrl = images[frameKeys[currentFrame]]?.default || images[frameKeys[currentFrame]];

    return (
        <section
            id="wings"
            ref={sectionRef}
            className="py-32 px-4 min-h-[80vh] flex flex-col justify-center relative overflow-hidden z-10"
        >
            {/* Background Image Sequence */}
            {totalFrames > 0 && currentImageUrl && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={currentImageUrl}
                        alt="Background Animation"
                        className="w-full h-full object-cover opacity-30" // Lower opacity to let text show
                    />
                    {/* Dark/Blur Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                </div>
            )}

            <div className="max-w-6xl text-left w-full pl-4 md:pl-10 relative z-10">
                <h2 className="fade-up text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-cyan-400 mb-8 drop-shadow-[0_0_10px_rgba(79, 182, 216,0.4)]">
                    Code On Vibes
                </h2>
                <p className="fade-up text-lg md:text-xl text-gray-200 font-display max-w-2xl leading-relaxed">
                    Chhatrapati Sambhajinagar's first Vibe Coding Hackathon
                </p>
                <br></br>
                <p className="fade-up text-lg md:text-xl text-gray-300 font-tech max-w-2xl leading-relaxed shadow-sm">
                    A fusion of creativity, code, and unstoppable energy! Code on Vibes brings together 100+ innovators to build bold ideas in an electrifying atmosphere. This isn’t just a competition — it’s where collaboration meets innovation. Connect with mentors, showcase your talent, and turn your vision into reality.
                </p>
            </div>
        </section>
    );
};

export default Wings;
