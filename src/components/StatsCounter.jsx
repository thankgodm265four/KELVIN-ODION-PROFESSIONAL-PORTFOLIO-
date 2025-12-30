import React, { useEffect, useRef, useState } from 'react';

export default function StatsCounter() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const stats = [
        {
            value: 500,
            suffix: '+',
            label: 'Properties Sold',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            value: 2000,
            suffix: '+',
            label: 'Happy Clients',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            value: 15,
            suffix: '+',
            label: 'Years Experience',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            value: 98,
            suffix: '%',
            label: 'Client Satisfaction',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            )
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-600/10 via-accent-500/5 to-accent-600/10" />

            {/* Glass Container */}
            <div className="container-premium relative">
                <div className="glass rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl glass-light flex items-center justify-center text-accent-500 group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>

                                {/* Counter */}
                                <div className="mb-2">
                                    <span className="text-4xl md:text-5xl font-bold text-gradient">
                                        <CountUp
                                            end={stat.value}
                                            duration={2000}
                                            isVisible={isVisible}
                                            delay={index * 200}
                                        />
                                        {stat.suffix}
                                    </span>
                                </div>

                                {/* Label */}
                                <p className="text-slate-400 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// CountUp component for animated numbers
function CountUp({ end, duration, isVisible, delay = 0 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const timeout = setTimeout(() => {
            let startTime;
            const animateCount = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeOutQuart * end));

                if (progress < 1) {
                    requestAnimationFrame(animateCount);
                }
            };

            requestAnimationFrame(animateCount);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isVisible, end, duration, delay]);

    return count;
}
