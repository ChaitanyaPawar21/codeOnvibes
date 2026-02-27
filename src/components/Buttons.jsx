import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const GlowingButton = ({ children, className = '', onClick }) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const btn = buttonRef.current;

        // Hover Effects
        const handleMouseEnter = () => {
            gsap.to(btn, {
                scale: 1.05,
                boxShadow: "0 0 25px rgba(79, 182, 216, 0.8), inset 0 0 10px rgba(79, 182, 216, 0.4)",
                duration: 0.3,
                ease: "power2.out"
            });
            // Slight glitch effect
            gsap.to(btn, {
                x: () => Math.random() * 4 - 2,
                y: () => Math.random() * 4 - 2,
                duration: 0.05,
                repeat: 3,
                yoyo: true,
                ease: "rough"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(btn, {
                scale: 1,
                x: 0,
                y: 0,
                boxShadow: "0 0 15px rgba(79, 182, 216, 0.5)",
                duration: 0.3,
                ease: "power2.out"
            });
        };

        btn.addEventListener('mouseenter', handleMouseEnter);
        btn.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            btn.removeEventListener('mouseenter', handleMouseEnter);
            btn.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            className={`relative px-8 py-3 rounded-lg border border-neon bg-black/50 text-[var(--color-text-primary)] font-tech font-bold uppercase tracking-wider box-glow overflow-hidden transition-colors ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10">{children}</span>
        </button>
    );
};

export default GlowingButton;
