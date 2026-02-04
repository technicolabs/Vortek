'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { TEAM } from '@/lib/constants';

export default function About() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isPaused) {
      interval = setInterval(() => {
        scrollRight();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused, scrollRight]);

  return (
    <div className="pt-24 pb-24 animate-in fade-in duration-1000">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-white mb-6 tracking-tighter">
            OUR <span className="text-neon-green neon-text">ROOTS</span>
          </h1>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            Blending the organic resilience of nature with the precision of futuristic technology.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Mission Section */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-orbitron font-bold text-white leading-tight">
              A Legacy Cultivated in <span className="text-neon-green">Innovation</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Founded in 2021 by visionary leader Iftikhar ul Sami, Vortek emerged as a response to the growing need for digital solutions that don&apos;t just function, but inspire. 
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Serving a diverse clientele across UAE, GCC, and international markets, we maintain a remote-first philosophy that brings together the finest digital minds from around the globe.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="glass p-6 rounded-2xl border-neon-green/10">
                <div className="text-3xl font-orbitron font-black text-neon-green mb-1">2021</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Founded</div>
              </div>
              <div className="glass p-6 rounded-2xl border-neon-green/10">
                <div className="text-3xl font-orbitron font-black text-neon-green mb-1">50+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Impactful Projects</div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-neon-green/10 rounded-[3rem] blur-2xl group-hover:bg-neon-green/20 transition-all"></div>
            <div className="relative glass rounded-[3rem] aspect-square border-white/5 flex items-center justify-center">
              <div className="text-9xl text-neon-green/10">{'🌲'}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Growth Path - Horizontal Auto-Scroll Section */}
        <section className="py-24 overflow-hidden relative">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-orbitron font-bold text-white mb-2">Growth Path</h2>
              <p className="text-white/40 italic">Tracing our journey through the digital woods</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={scrollLeft} 
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-neon-green border-white/10 hover:border-neon-green/50 transition-all"
                aria-label="Scroll Left"
              >
                {'←'}
              </button>
              <button 
                onClick={scrollRight} 
                className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-neon-green border-white/10 hover:border-neon-green/50 transition-all"
                aria-label="Scroll Right"
              >
                {'→'}
              </button>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { year: '2021', title: 'The Seed', text: 'Creation of Vortek in a small digital hub, driven by a vision for high-impact AI solutions.', icon: '🌱' },
              { year: '2023', title: 'Global Bloom', text: 'Expansion into UAE and GCC markets, delivering our first major international enterprise platform.', icon: '🌐' },
              { year: '2023', title: 'Stronger Vines', text: 'Strategic partnership with Maxed Digital Services, augmenting our creative capabilities.', icon: '🤝' },
              { year: '2024', title: 'The Canopy', text: 'Surpassing 50+ successful projects and building a core team of 10+ remote experts.', icon: '🌳' },
              { year: '2026', title: 'Digital Forest', text: 'Projected reach of 80+ projects and a global workforce of 25+ specialized innovators.', icon: '🌲' },
            ].map((item, i) => (
              <div key={i} className="min-w-[400px] snap-center glass rounded-[2.5rem] overflow-hidden group hover:border-neon-green/30 transition-all">
                <div className="h-48 bg-white/5 flex items-center justify-center relative">
                  <div className="text-6xl grayscale group-hover:grayscale-0 transition-all duration-700">{item.icon}</div>
                  <div className="absolute top-4 left-4 px-4 py-1 bg-neon-green text-black font-orbitron font-black rounded-full text-xs">
                    {item.year}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">The Innovators</h2>
            <p className="text-white/40 max-w-2xl mx-auto italic">Meet the professional digital gardeners behind the Vortek ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="group flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-neon-green/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-40 h-40 rounded-full glass p-2 border-2 border-white/10 group-hover:border-neon-green/50 transition-all overflow-hidden flex items-center justify-center text-5xl bg-white/5">
                    {member.gender === 'male' ? '👨‍💻' : '👩‍💻'}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-neon-green transition-colors">{member.name}</h3>
                  <p className="text-neon-green text-[10px] font-black tracking-widest uppercase mb-4">{member.role}</p>
                  <p className="text-white/40 text-[11px] leading-relaxed line-clamp-3 px-4 italic">&ldquo;{member.bio}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
