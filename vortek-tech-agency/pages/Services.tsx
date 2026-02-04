
import React, { useState } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const faqs = [
    { q: "How long does a typical project take?", a: "Typically 1-4 months depending on complexity. We follow a strict phase-based approach." },
    { q: "What tech stacks do you use?", a: "We specialize in React, Node.js, Flutter, and Python for AI solutions." },
    { q: "Do you offer post-launch maintenance?", a: "Yes, we have monthly plans ranging from $50 to $500/month." },
    { q: "Can you handle international clients?", a: "Absolutely. We currently serve clients across the UAE, GCC, and globally." },
  ];

  const currentService = SERVICES.find(s => s.id === activeTab);

  return (
    <div className="pt-32 pb-24 px-6 animate-in zoom-in-95 duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6 tracking-tighter">OUR <span className="text-neon-green">EXPERTISE</span></h1>
          <p className="text-white/40 max-w-2xl mx-auto text-lg italic">"Nurturing your digital presence from seed to skyline with sustainable tech architecture."</p>
        </div>

        {/* Dynamic Category Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-24">
          {SERVICES.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`px-8 py-3 rounded-2xl font-orbitron text-xs tracking-widest uppercase transition-all duration-300 ${
                activeTab === s.id 
                  ? 'bg-neon-green text-black font-black shadow-[0_0_20px_rgba(57,255,20,0.4)] scale-110' 
                  : 'glass text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Animated Glassy Pricing Tiers */}
        {currentService && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40 items-stretch">
            {[
              { 
                name: 'Seedling', 
                badge: 'STARTUP',
                price: currentService.priceRange.basic, 
                desc: 'Perfect for initial MVP launches and validated concepts.',
                features: ['Core Logic Implementation', 'Standard UI/UX Design', '3 Revision Cycles', 'Mobile Responsive Architecture', '1 Month Support']
              },
              { 
                name: 'Growth', 
                badge: 'POPULAR',
                price: currentService.priceRange.pro, 
                desc: 'Optimized for scaling businesses with complex requirements.',
                features: ['Advanced API Integration', 'Bespoke UI/UX Ecosystem', 'Unlimited Revision Cycles', 'Performance Optimization', 'Priority Root Support', 'SEO & Analytics Integration'],
                isPopular: true
              },
              { 
                name: 'Ancient', 
                badge: 'ENTERPRISE',
                price: currentService.priceRange.enterprise, 
                desc: 'High-availability infrastructure for global operations.',
                features: ['Custom AI Model Training', 'Multi-region Infrastructure', 'Dedicated Engineering Team', '24/7 Priority Signal Support', 'Infinite Scalability Audit', 'Full White-label Documentation']
              },
            ].map((tier, i) => (
              <div 
                key={i} 
                className={`group relative flex flex-col p-8 md:p-12 rounded-[3rem] transition-all duration-500 overflow-hidden ${
                  tier.isPopular 
                    ? 'glass border-neon-green/40 bg-neon-green/5 scale-105 z-10 shadow-[0_0_50px_rgba(57,255,20,0.1)]' 
                    : 'glass border-white/10 hover:border-white/20 hover:scale-[1.02]'
                }`}
              >
                {/* Background Animation Elements */}
                {tier.isPopular && (
                  <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-neon-green/20 blur-[60px] animate-pulse"></div>
                )}
                
                {/* Badge */}
                <div className="mb-8 flex justify-between items-start">
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-orbitron font-black tracking-[0.2em] border ${
                    tier.isPopular 
                      ? 'bg-neon-green text-black border-neon-green' 
                      : 'bg-white/5 text-white/40 border-white/10'
                  }`}>
                    {tier.badge}
                  </span>
                  {tier.isPopular && <div className="text-2xl animate-bounce">🌱</div>}
                </div>

                <h3 className="text-3xl font-orbitron font-black text-white mb-2 tracking-tight">{tier.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-black font-orbitron text-neon-green tracking-tighter neon-text">{tier.price}</span>
                  <span className="text-white/30 font-orbitron text-[10px] uppercase tracking-widest">Base Rate</span>
                </div>
                <p className="text-white/50 text-sm mb-10 leading-relaxed font-light">{tier.desc}</p>
                
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

                <ul className="space-y-5 mb-12 flex-grow">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <span className="text-neon-green mt-0.5 group-hover/item:scale-125 transition-transform">✦</span>
                      <span className="text-white/70 text-sm leading-tight transition-colors group-hover/item:text-white">{feat}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 rounded-2xl font-orbitron font-black text-xs tracking-[0.2em] transition-all duration-300 ${
                  tier.isPopular 
                    ? 'bg-neon-green text-black hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:scale-105' 
                    : 'glass text-white hover:bg-white/10 border-white/20'
                }`}>
                  ESTABLISH ROOTS
                </button>
              </div>
            ))}
          </div>
        )}

        {/* FAQs Section */}
        <section className="max-w-4xl mx-auto py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">Ecosystem Protocol</h2>
            <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Frequently Asked Questions</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="glass rounded-[2rem] border-white/5 group transition-all duration-300 open:border-neon-green/20">
                <summary className="p-8 cursor-pointer font-orbitron text-white flex justify-between items-center list-none select-none">
                  <span className="text-lg md:text-xl font-bold transition-all group-open:text-neon-green">{faq.q}</span>
                  <div className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center transition-transform group-open:rotate-180 group-open:bg-neon-green group-open:text-black">
                    <span className="text-xs">▼</span>
                  </div>
                </summary>
                <div className="px-8 pb-8 text-white/50 leading-relaxed text-base font-light animate-in fade-in slide-in-from-top-4 duration-500">
                  {faq.a}
                  <div className="mt-6 flex gap-4">
                    <button className="text-neon-green text-[10px] font-orbitron font-black tracking-widest uppercase hover:underline">Learn More Details</button>
                    <span className="text-white/10">|</span>
                    <button className="text-white/30 text-[10px] font-orbitron font-black tracking-widest uppercase hover:text-white transition-colors">Speak with an Expert</button>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="mt-20 glass p-16 rounded-[4rem] text-center relative overflow-hidden group border-neon-green/20">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-orbitron font-black text-white mb-6">Tailored Solutions Required?</h2>
            <p className="text-white/40 max-w-xl mx-auto mb-10 text-lg">If your project demands a unique root system beyond our standard tiers, let's schedule a deep-dive transmission.</p>
            <button className="px-12 py-5 bg-[#228B22] hover:bg-neon-green text-white hover:text-black font-orbitron font-black tracking-widest rounded-2xl transition-all neon-glow shadow-xl transform hover:scale-105">
              INITIATE CUSTOM QUOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
