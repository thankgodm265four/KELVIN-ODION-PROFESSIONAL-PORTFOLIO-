import React from 'react';

export default function Partners() {
    const partners = [
        { name: "House of Vin", sub: "Partnered with" },
        { name: "Nilax Cosmetics", sub: "Partnered with" },
        { name: "G Reality", sub: "Partnered with" }
    ];

    return (
        <section className="py-12 bg-black border-y border-white/5">
            <div className="container-custom">
                <p className="text-center text-gold-500/60 text-sm font-medium uppercase tracking-widest mb-10">
                    Brands I've Partnered With
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {partners.map((partner, index) => (
                        <div key={index} className="group text-center transition-transform duration-500 hover:scale-110">
                            <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1 group-hover:text-gold-500/50 transition-colors">
                                {partner.sub}
                            </p>
                            <h3 className="text-2xl md:text-4xl font-display font-bold text-white/40 group-hover:text-gold-500 transition-all duration-500 cursor-default">
                                {partner.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
