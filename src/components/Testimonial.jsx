import React, { useState, useEffect, useRef } from 'react';

export default function Testimonial() {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            quote: "Working with Kelvin completely changed how fast our ads convert. Nilax started selling quickly in Abuja thanks to his strategies. One of the best decisions we made in 2025.",
            author: "G-Reality Company",
            role: "Real Estate Brand",
            location: "Abuja, Nigeria"
        },
        {
            id: 2,
            quote: "I didn't know ads could convert this fast until I started working with Kelvin. Honestly, choosing to work with him has been one of the best decisions I've made in 2025. Nilax has been selling very well and fast in Abuja, all thanks to the strategies he implemented.",
            author: "G-Reality Company",
            role: "Real Estate Brand",
            location: "Abuja, Nigeria"
        },
        {
            id: 3,
            quote: "Thank you so much Mr Kelvin! Ever since we started running ads with the content you created, we have been seeing massive results. I'm truly grateful.",
            author: "Mrs. Adebayo",
            role: "E-commerce Owner",
            location: "Lagos, Nigeria"
        },
        {
            id: 4,
            quote: "Your strategies are very efficient — I will refer you to a lot of people!",
            author: "Business Executive",
            role: "Corporate Leader",
            location: "Nigeria"
        },
        {
            id: 5,
            quote: "Kelvin's approach to digital growth is unlike anything we've tried. He doesn't just focus on likes; he focuses on ROI. Our sales pipeline has never been this healthy.",
            author: "Chidi K.",
            role: "Founder, TechPulse",
            location: "Lagos, Nigeria"
        },
        {
            id: 6,
            quote: "The content Kelvin created for our brand was not only visually stunning but also strategically aligned with our goals. He is a true professional who delivers on his promises.",
            author: "Blessing E.",
            role: "Marketing Director",
            location: "Port Harcourt, Nigeria"
        }
    ];

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(intervalRef.current);
    }, [testimonials.length]);

    const goToSlide = (index) => {
        setActiveIndex(index);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
    };

    return (
        <section id="testimonial" className="section">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-500 rounded-full text-sm font-medium mb-4">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
                        Client Success Stories
                    </h2>
                </div>

                {/* Testimonial Cards */}
                <div className="max-w-6xl mx-auto">
                    <div className="relative min-h-[500px] md:min-h-[400px]">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`transition-all duration-1000 ease-in-out ${index === activeIndex
                                    ? 'opacity-100 translate-y-0 scale-100'
                                    : 'opacity-0 absolute inset-0 translate-y-12 scale-95 pointer-events-none'
                                    }`}
                            >
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-[0_0_50px_rgba(242,178,51,0.1)]">
                                    {/* Decorative Background Glow */}
                                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
                                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        {/* Large Quote Icon */}
                                        <div className="mb-10">
                                            <svg className="w-20 h-20 text-gold-500/20" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>

                                        {/* Testimonial Quote - LARGE */}
                                        <blockquote className="text-2xl md:text-4xl lg:text-5xl font-display font-medium leading-tight mb-12 text-white italic">
                                            "{testimonial.quote}"
                                        </blockquote>

                                        {/* Author - ENHANCED */}
                                        <div className="flex flex-col items-center">
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black mb-4 shadow-lg shadow-gold-500/20">
                                                <span className="font-bold text-2xl">
                                                    {testimonial.author.charAt(0)}
                                                </span>
                                            </div>
                                            <div className="text-center">
                                                <p className="font-display font-bold text-2xl text-white tracking-wide">{testimonial.author}</p>
                                                <p className="text-gold-500 font-medium tracking-widest uppercase text-xs mt-1">{testimonial.role}</p>
                                                <div className="flex items-center justify-center gap-2 mt-3 text-white/40 text-sm">
                                                    <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                                    </svg>
                                                    {testimonial.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-4 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-500 ${index === activeIndex
                                    ? 'bg-gold-500 w-12'
                                    : 'bg-white/20 w-4 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
