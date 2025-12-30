import React, { useEffect, useRef, useState } from 'react';

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Mitchell",
            role: "Homeowner",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
            quote: "Luxe Estates made our dream home a reality. Their attention to detail and personalized service exceeded all expectations. We couldn't be happier with our new villa!",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Property Investor",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
            quote: "As an investor, I've worked with many agencies. Luxe Estates stands out for their market knowledge and professionalism. They've helped me build a remarkable portfolio.",
            rating: 5
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "First-Time Buyer",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
            quote: "Being a first-time buyer was overwhelming, but the team guided me through every step. They found me the perfect apartment within my budget. Highly recommend!",
            rating: 5
        },
        {
            id: 4,
            name: "David Thompson",
            role: "Luxury Home Seller",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
            quote: "Sold our beachfront property in record time and above asking price. Their marketing strategy and network of high-net-worth clients is unmatched.",
            rating: 5
        }
    ];

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(intervalRef.current);
    }, [testimonials.length]);

    const goToSlide = (index) => {
        setActiveIndex(index);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
    };

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-600/20 rounded-full blur-3xl" />
            </div>

            <div className="container-premium relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="badge badge-gold mb-4">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from our satisfied clients who found their dream properties with Luxe Estates.
                    </p>
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
                                <div className="glass rounded-3xl p-8 md:p-12 text-center">
                                    {/* Quote Icon */}
                                    <div className="text-accent-500 mb-6">
                                        <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8">
                                        "{testimonial.quote}"
                                    </blockquote>

                                    {/* Rating */}
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent-500' : 'text-slate-600'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center justify-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-accent-500"
                                        />
                                        <div className="text-left">
                                            <p className="font-semibold text-white">{testimonial.name}</p>
                                            <p className="text-sm text-slate-500">{testimonial.role}</p>
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
                                        ? 'bg-accent-500 w-8'
                                        : 'bg-slate-600 hover:bg-slate-500'
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
