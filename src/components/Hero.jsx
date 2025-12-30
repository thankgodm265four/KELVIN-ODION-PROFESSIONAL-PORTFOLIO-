import React from 'react';
import TypeWriter from './TypeWriter';

export default function Hero() {
  const typingPhrases = [
    "Digital Growth Strategist",
    "Marketing Partner",
    "Brand & Content Strategist",
    "Conversion-Focused Marketer"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#F2B233 1px, transparent 1px),
                           linear-gradient(90deg, #F2B233 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-4 animate-fade-in-up">
            Kelvin Odion
          </h1>

          {/* Animated Typing Text */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 h-12 md:h-14 animate-fade-in-up text-gold-500" style={{ animationDelay: '0.2s' }}>
            <TypeWriter
              phrases={typingPhrases}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
            />
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            I help brands grow visibility, engagement, and revenue through strategy-driven content, copywriting, and digital marketing systems.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://wa.me/2349047493716"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 text-lg"
            >
              Let's Grow Your Brand
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold-500">5+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold-500">20+</p>
              <p className="text-sm text-gray-400">Brands Transformed</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold-500">100%</p>
              <p className="text-sm text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" className="block">
          <div className="w-6 h-10 rounded-full border-2 border-navy-500/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-navy-500/50 animate-pulse" />
          </div>
        </a>
      </div>
    </section>
  );
}
