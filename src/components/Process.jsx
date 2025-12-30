import React from 'react';

export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Audit & Understanding",
            description: "I study the brand, audience, and goals to understand where you are and where you want to go."
        },
        {
            number: "02",
            title: "Strategy Development",
            description: "Clear positioning and content direction tailored to your brand's unique strengths and market."
        },
        {
            number: "03",
            title: "Execution",
            description: "Content, copy, and campaigns built for conversion — not just engagement."
        },
        {
            number: "04",
            title: "Optimization",
            description: "Improve what works, remove what doesn't. Data-driven refinements for continuous growth."
        }
    ];

    return (
        <section id="process" className="section section-alt">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-500 rounded-full text-sm font-medium mb-4">
                        How I Work
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                        My Process
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        A systematic approach to delivering results that matter.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative pl-20 md:pl-24 group"
                            >
                                {/* Number Circle */}
                                <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-black font-bold text-lg shadow-lg group-hover:shadow-gold transition-shadow duration-300">
                                    {step.number}
                                </div>

                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="absolute left-7 top-14 w-0.5 h-full bg-gradient-to-b from-gold-500/50 to-transparent" />
                                )}

                                {/* Content */}
                                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-white/10 group-hover:border-gold-500">
                                    <h3 className="text-xl font-display font-semibold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-300">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
