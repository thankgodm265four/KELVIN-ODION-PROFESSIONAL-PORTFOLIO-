import React from 'react';

export default function About() {
    return (
        <section id="about" className="section section-alt">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-premium">
                                <img
                                    src="/kelvin.jpg"
                                    alt="Kelvin Odion"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/20 rounded-2xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-200 rounded-2xl -z-10" />
                    </div>

                    {/* Content Side */}
                    <div>
                        <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-700 rounded-full text-sm font-medium mb-4">
                            About Me
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-500 mb-6">
                            About Kelvin Odion
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Kelvin Odion is a digital strategist and marketing specialist with hands-on experience helping brands build strong online presence, attract the right audience, and convert attention into results.
                            </p>
                            <p>
                                With expertise in digital product creation, content planning, social media management, copywriting, and marketing strategy, Kelvin works with brands that want structure, clarity, and measurable growth — not guesswork.
                            </p>
                            <p>
                                He partners with businesses to design systems that communicate value, build trust, and drive consistent demand.
                            </p>
                        </div>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 mt-8">
                            {['Digital Strategy', 'Content Marketing', 'Copywriting', 'Social Media', 'Brand Building'].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-gold-500 hover:bg-gold-50 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
