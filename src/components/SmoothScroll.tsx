"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2, // Duration of scroll animation (higher = slower/smoother)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
            orientation: 'vertical', // Vertical scrolling
            gestureOrientation: 'vertical',
            smoothWheel: true, // Enable smooth scrolling for mouse wheel
            wheelMultiplier: 1, // Mouse wheel sensitivity
            touchMultiplier: 2,
            infinite: false,
        });

        // Animation loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
