
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const linksRef = useRef([]);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Wings', href: '#wings' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Contact', href: '#contact' }
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
            gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
        } else {
            gsap.to(menuRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' });
        }
    }, [isMobileMenuOpen]);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md shadow-[0_4px_30px_rgba(79, 182, 216,0.1)]' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer text-2xl font-display font-bold text-white text-glow">
                        CODE ON VIBES
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    ref={el => linksRef.current[index] = el}
                                    onMouseEnter={handleLinkEnter}
                                    onMouseLeave={handleLinkLeave}
                                    className="relative text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-tech font-medium uppercase tracking-wide transition-colors"
                                >
                                    {item.name}
                                    <div className="underline-anim absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-neon-blue)] shadow-[0_0_8px_rgba(79, 182, 216,0.8)] opacity-0"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        >
                            <Menu size={28} className="drop-shadow-[0_0_5px_rgba(79, 182, 216,0.8)]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className="fixed inset-y-0 right-0 w-64 bg-black/95 backdrop-blur-xl border-l border-[var(--color-neon-blue)] z-50 transform translate-x-full md:hidden"
                style={{ boxShadow: '-5px 0 20px rgba(79, 182, 216,0.2)' }}
            >
                <div className="p-5 flex justify-end">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-white">
                        <X size={28} />
                    </button>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-4 text-center text-lg font-tech font-medium text-gray-300 hover:text-white hover:bg-[rgba(79, 182, 216,0.1)] rounded-md uppercase tracking-wider transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
