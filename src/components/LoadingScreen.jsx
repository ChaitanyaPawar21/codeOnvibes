import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Dynamically import all images from the folder
const images = import.meta.glob('../assets/loadingScreen/*.gif', { eager: true });
const frameKeys = Object.keys(images).sort();
const totalFrames = frameKeys.length;

// Pre-load images
const preloadImages = (urls) => {
    return Promise.all(
        urls.map((url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = resolve;
            });
        })
    );
};

const LoadingScreen = ({ onFinish }) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isFinishing, setIsFinishing] = useState(false);
    const overlayRef = useRef(null);

    const fps = 15; // Animation speed in frames per second
    const frameInterval = 1000 / fps;

    useEffect(() => {
        // 1. Preload all images first
        const imageUrls = frameKeys.map(key => images[key].default || images[key]);

        preloadImages(imageUrls).then(() => {
            setImagesLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;

        let startTime = null;
        let animationFrameId;

        const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = time - startTime;

            if (progress > frameInterval) {
                setCurrentFrame((prev) => {
                    if (!isFinishing) {
                        // Loop between 0 and 12 (Screaming/Powering up)
                        return prev >= 12 ? 0 : prev + 1;
                    } else {
                        // Play through 13 to 31 (Transformation)
                        const nextFrame = prev + 1;

                        if (nextFrame >= totalFrames - 1) {
                            // Sequence finished, trigger exit animation!
                            if (overlayRef.current && !overlayRef.current.dataset.fading) {
                                overlayRef.current.dataset.fading = "true";
                                gsap.to(overlayRef.current, {
                                    opacity: 0,
                                    duration: 1,
                                    ease: "power2.inOut",
                                    onComplete: onFinish
                                });
                            }
                            // Loop back to start of transformation so it doesn't freeze while fading
                            return 32;
                        }
                        return nextFrame;
                    }
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
    }, [imagesLoaded, isFinishing, onFinish, frameInterval]);

    useEffect(() => {
        if (imagesLoaded) {
            // For demonstration, trigger the transformation slightly randomly after 2.5 - 4 seconds
            const loadTimer = setTimeout(() => {
                setIsFinishing(true);
                // Start playing from frame 13 exactly when it triggers ending
                setCurrentFrame(13);
            }, 3500);

            return () => clearTimeout(loadTimer);
        }
    }, [imagesLoaded]);

    if (!imagesLoaded) {
        return (
            <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
                <div className="text-[var(--color-neon-blue)] font-display text-2xl animate-pulse tracking-[0.3em]">
                    AWAKENING...
                </div>
            </div>
        )
    }

    const currentImageUrl = images[frameKeys[currentFrame]]?.default || images[frameKeys[currentFrame]];

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] bg-black pointer-events-none flex items-center justify-center overflow-hidden origin-center"
        >
            <img
                src={currentImageUrl}
                alt={`Power Up Frame ${currentFrame}`}
                className="w-full h-full object-cover scale-[1.05]"
                style={{ imageRendering: 'high-quality' }}
            />
            {/* Cinematic overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000000_100%)] opacity-80 mix-blend-multiply"></div>
        </div>
    );
};

export default LoadingScreen;
