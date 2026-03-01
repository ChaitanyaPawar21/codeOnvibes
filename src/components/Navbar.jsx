import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import wingsLogo from '../assets/Wings-logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const linksRef = useRef([]);

    const navItems = [
        { name: 'Home', to: '/' },
        { name: 'Schedule', to: '/schedule' },
        { name: 'Contact', to: '/contact' }
    ];

    useEffect(() => {
        // Scroll listener for darkening navbar
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Initial load animation
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );

        gsap.fromTo(linksRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.5 }
        );

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hover animations for links
    const handleLinkEnter = (e) => {
        const underline = e.currentTarget.querySelector('.underline-anim');
        gsap.to(underline, { width: '100%', opacity: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(e.currentTarget, { scale: 1.05, textShadow: "0 0 10px rgba(79, 182, 216,0.8)", duration: 0.2 });
    };

    const handleLinkLeave = (e) => {
        const underline = e.currentTarget.querySelector('.underline-anim');
        gsap.to(underline, { width: '0%', opacity: 0, duration: 0.3, ease: 'power2.out' });
        gsap.to(e.currentTarget, { scale: 1, textShadow: "none", duration: 0.2 });
    };

    // Mobile menu animation
    useEffect(() => {
        if (isMobileMenuOpen) {
            gsap.fromTo(menuRef.current,
                { height: 0, opacity: 0 },
                { height: 'auto', opacity: 1, duration: 0.3, ease: 'power3.out', display: 'block' }
            );
        } else {
            gsap.to(menuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power3.in', display: 'none' });
        }
    }, [isMobileMenuOpen]);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-black shadow-[0_4px_30px_rgba(79, 182, 216,0.1)]' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Left — Logo */}
                    <Link to="/" className="flex-1 flex-shrink-0 cursor-pointer text-2xl font-display font-bold text-white text-glow">
                        CODE ON VIBES
                    </Link>

                    {/* Center — Desktop Nav */}
                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <div className="flex items-center space-x-6">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    ref={el => linksRef.current[index] = el}
                                    onMouseEnter={handleLinkEnter}
                                    onMouseLeave={handleLinkLeave}
                                    className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-tech font-medium uppercase tracking-wide transition-colors"
                                >
                                    {item.name}
                                    <div className="underline-anim absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-neon-blue)] shadow-[0_0_8px_rgba(79,182,216,0.8)] opacity-0"></div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right — Wings Logo */}
                    <div className="hidden md:flex flex-1 items-center justify-end">
                        <a href="https://www.wings2k26.com/" target="_blank" rel="noopener noreferrer" className="relative flex items-center px-3 py-2 rounded-md transition-all duration-300 group">
                            <img src={wingsLogo} alt="Wings 2K26" className="h-14 w-auto object-contain opacity-85 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(79,182,216,0.7)] transition-all duration-300" />
                            <div className="underline-anim absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-neon-blue)] shadow-[0_0_8px_rgba(79,182,216,0.8)] opacity-0"></div>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        >
                            {isMobileMenuOpen ? <X size={28} className="drop-shadow-[0_0_5px_rgba(79, 182, 216,0.8)]" /> : <Menu size={28} className="drop-shadow-[0_0_5px_rgba(79, 182, 216,0.8)]" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className="absolute top-20 left-0 w-full bg-black border-b border-[var(--color-neon-blue)] z-40 md:hidden"
                style={{ display: 'none', overflow: 'hidden' }}
            >
                <div className="px-4 py-6 flex flex-col items-center space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-xl font-tech font-medium text-gray-300 hover:text-white hover:bg-[rgba(79, 182, 216,0.1)] rounded-md uppercase tracking-wider transition-colors w-full text-center py-3"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a href="https://www.wings2k26.com/" target="_blank" rel="noopener noreferrer" className="block text-xl font-tech font-medium text-gray-300 hover:text-white hover:bg-[rgba(79, 182, 216,0.1)] rounded-md uppercase tracking-wider transition-colors w-full text-center py-3">
                        Wings
                    </a>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
