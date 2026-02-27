import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imageModules = import.meta.glob('../assets/scedule/*.jpg', { eager: true });
const imageUrls = Object.keys(imageModules).sort().map(key => imageModules[key].default);

const scheduleDates = [
    '3 March',
    '12 March',
    '14 March',
    '21 March'
];

const scheduleEvents = [
    'PPT Round Problem statement released',
    'PPT submission deadline',
    'Round 1 results',
    'Code On Vibes round 2 Hackathon'
];

const scheduleDescriptions = [
    'Official Problem statement released for Round 1 along with PPT format.',
    '',
    'Teams sort-listed on the Basis of PPT Round. Sorted teams will be notified via text and also selected teams pdf will be displayed on website',
    'Round 2 that is offline Hackathon. Time and details to be announced. Stay tuned to the latest updates.'
];

const Schedule = () => {
    const sectionRef = useRef(null);
    const [currentFrame, setCurrentFrame] = useState(0);

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

        // Preload images into browser cache
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });

        // Loop the frames around 12 FPS
        const intervalId = setInterval(() => {
            setCurrentFrame(prev => (prev + 1) % imageUrls.length);
        }, 80);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section
            id="schedule"
            ref={sectionRef}
            className="py-32 px-4 min-h-[80vh] flex flex-col items-center bg-[var(--color-dark-bg)] relative z-10 border-t border-gray-900 overflow-hidden"
        >
            {/* Background Image Sequence */}
            {imageUrls.length > 0 && (
                <img
                    src={imageUrls[currentFrame]}
                    alt="Schedule Background"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none"
                />
            )}

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <h2 className="fade-slide text-4xl md:text-6xl font-display font-bold text-center text-white mb-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    KEEP YOUR EYE ON SCHEDULE
                </h2>

                <div className="space-y-8">
                    {scheduleEvents.map((event, i) => (
                        <div key={i} className="fade-slide flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-center p-6 bg-[var(--color-dark-surface)] border border-gray-800 rounded-lg hover:border-[var(--color-neon-blue)] transition-colors duration-300 group">
                            <div className="text-[var(--color-neon-blue)] font-display text-xl md:text-2xl font-bold min-w-[150px] group-hover:text-shadow-[0_0_8px_rgba(79, 182, 216,0.8)] transition-all">
                                {scheduleDates[i]}
                            </div>
                            <div>
                                <h3 className="text-2xl font-tech text-white mb-2">{event}</h3>
                                <p className="text-gray-400">{scheduleDescriptions[i]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
