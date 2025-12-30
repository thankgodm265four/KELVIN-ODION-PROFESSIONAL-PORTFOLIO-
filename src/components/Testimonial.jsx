import React from 'react';

export default function Testimonial() {
    return (
        <section id="testimonial" className="section">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-700 rounded-full text-sm font-medium mb-4">
                        Case Study
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-500">
                        Client Success Story
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-navy-500 to-primary-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

                        {/* Quote Icon */}
                        <div className="relative z-10">
                            <svg className="w-16 h-16 text-gold-500/50 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            {/* Company Info */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gold-500">GR</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold">G-Reality Company</h3>
                                    <p className="text-white/70">Real Estate</p>
                                </div>
                            </div>

                            {/* Testimonial Quote */}
                            <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                                "Working with Kelvin transformed our digital presence completely. His strategic approach to content and marketing helped us attract quality leads and close more deals. The results speak for themselves."
                            </blockquote>

                            {/* Results */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                                <div>
                                    <p className="text-3xl font-bold text-gold-500">150%</p>
                                    <p className="text-sm text-white/70">Lead Increase</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gold-500">3x</p>
                                    <p className="text-sm text-white/70">Social Engagement</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gold-500">40%</p>
                                    <p className="text-sm text-white/70">Conversion Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
