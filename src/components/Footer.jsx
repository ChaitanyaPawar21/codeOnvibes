import React from 'react'

const Footer = () => {
    return (
        <>
            <section className="relative py-20 px-4 bg-[var(--color-dark-surface)] border-t border-gray-800/50">
                {/* Top gradient divider line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent opacity-60"></div>

                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 tracking-wide text-glow">
                        Venue Location
                    </h2>
                    <p className="text-base md:text-lg font-tech text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto">
                        Government College Of Engineering, Osmanpura, Chhatrapati Sambhajinagar, Maharashtra 431001
                    </p>

                    {/* Map link */}
                    <a
                        href="https://maps.google.com/?q=Government+College+Of+Engineering+Osmanpura+Chhatrapati+Sambhajinagar+Maharashtra+431001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 border border-[var(--color-neon-blue)]/40 rounded-lg text-[var(--color-neon-blue)] font-tech text-sm uppercase tracking-widest hover:bg-[var(--color-neon-blue)]/10 hover:border-[var(--color-neon-blue)] hover:shadow-[0_0_20px_rgba(79,182,216,0.3)] transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        View on Maps
                    </a>
                </div>

                <footer className="w-full mt-16 pt-8 text-center text-gray-600 font-tech text-sm border-t border-gray-800/30">
                    <p className="text-[var(--color-text-secondary)]/50 tracking-wider">&copy; 2026 Code On Vibes. All Rights Reserved.</p>
                </footer>
            </section>
        </>
    )
}

export default Footer