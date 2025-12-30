import React from 'react';

export default function IdealClients() {
    const clients = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            text: "Brands that want growth, not just posting"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            text: "Businesses ready to invest in strategy"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            text: "Founders who value clarity and results"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            text: "Real estate, personal brands, and digital businesses"
        }
    ];

    return (
        <section className="section section-alt">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-gold-500/10 text-gold-700 rounded-full text-sm font-medium mb-4">
                        Ideal Clients
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-500">
                        I Work Best With
                    </h2>
                </div>

                {/* Clients Grid */}
                <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 hover:border-gold-500 hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-gold-500 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                                    {client.icon}
                                </div>
                                <p className="text-gray-700 font-medium">
                                    {client.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
