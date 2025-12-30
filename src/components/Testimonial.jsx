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
            quote: "Thank you so much Mr Kelvin! Ever since we started running ads with the content you created, we have been seeing massive results. I'm truly grateful. And your strategies are very efficient — I will refer you to a lot of people!",
            author: "Satisfied Client",
            role: "Business Owner",
            location: "Nigeria"
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
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`transition-all duration-700 ${index === activeIndex
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 absolute inset-0 translate-x-8'
                                    }`}
                            >
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-gold">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
                                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl" />

                                    <div className="relative z-10">
                                        {/* Quote Icon */}
                                        <svg className="w-16 h-16 text-gold-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>

                                        {/* Testimonial Quote */}
                                        <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-white">
                                            "{testimonial.quote}"
                                        </blockquote>

                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center text-white">
                                                <span className="font-bold text-xl">
                                                    {testimonial.author.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-lg text-white">— {testimonial.author}</p>
                                                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                                <p className="text-gold-500 text-sm flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                                    </svg>
                                                    {testimonial.location}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-gold-500 w-8'
                                    : 'bg-white/30 hover:bg-white/50'
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
