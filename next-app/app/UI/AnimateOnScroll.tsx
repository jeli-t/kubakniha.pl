'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
    delay?: number; // ms
    threshold?: number;
}

export function AnimateOnScroll({ children, className = '', delay = 0, threshold = 0.12 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    // Start visible on server / before hydration — avoids flash of invisible content
    const [ready, setReady] = useState(false);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        setReady(true);
        const el = ref.current;
        if (!el || !('IntersectionObserver' in window)) {
            setInView(true); // fallback: always show
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (delay) {
                        setTimeout(() => setInView(true), delay);
                    } else {
                        setInView(true);
                    }
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [delay, threshold]);

    return (
        <div
            ref={ref}
            className={`${ready ? 'scroll-anim' : ''} ${inView ? 'in-view' : ''} ${className}`}
        >
            {children}
        </div>
    );
}
