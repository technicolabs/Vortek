
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ClientLogos from '../components/ClientLogos';

const LampHero: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050805] w-full z-0">
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <div
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-neon-green via-transparent to-transparent text-white [--conic-gradient-from:transparent] [--conic-gradient-to:rgba(57,255,20,0.3)]"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, var(--conic-gradient-from), transparent 80%, var(--conic-gradient-to))`,
            transform: 'translateX(-50%) rotate(-30deg)',
          }}
        >
          <div className="absolute  w-[100%] left-0 bg-[#050805] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-[#050805]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>
        <div
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-neon-green text-white [--conic-gradient-from:rgba(57,255,20,0.3)] [--conic-gradient-to:transparent]"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, var(--conic-gradient-from), transparent 80%, var(--conic-gradient-to))`,
            transform: 'translateX(50%) rotate(30deg)',
          }}
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-[#050805]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-[#050805] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#050805] blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-neon-green opacity-50 blur-[80px]"></div>
        <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-neon-green blur-2xl"></div>
        <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-neon-green "></div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#050805] "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        <h1 className="mt-8 bg-gradient-to-br from-white to-white/50 py-4 bg-clip-text text-center text-4xl font-black font-orbitron tracking-tight text-transparent md:text-7xl leading-tight">
          INNOVATION. DESIGN. <br />
          <span className="text-neon-green neon-text">IMPACT.</span>
        </h1>
        <p className="mt-4 text-center text-white/40 max-w-xl mx-auto text-lg md:text-xl font-light">
          Transforming ideas into digital realities with cutting-edge tech and nature-inspired creativity.
        </p>
        <div className="mt-10 flex flex-col md:flex-row gap-6">
          <Link to="/contact" className="px-10 py-4 bg-[#228B22] text-white font-bold rounded-xl hover:bg-neon-green hover:text-black transition-all transform hover:scale-105 neon-glow">
            START YOUR PROJECT
          </Link>
          <Link to="/services" className="px-10 py-4 glass text-white font-bold rounded-xl hover:bg-white/20 transition-all transform hover:scale-105">
            OUR EXPERTISE
          </Link>
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarousel: React.FC = () => {
  const reviews = [
    { name: "Client A", company: "Retail Hub", text: "Vortek turned our vision into a stunning app! The growth was immediate." },
    { name: "Client B", company: "Fitness Inc", text: "Exceptional design and support. Truly a professional team." },
    { name: "Client C", company: "AI Labs", text: "AI integration was game-changing for our daily operations." },
    { name: "Client D", company: "GCC Logistics", text: "Professional, innovative, and highly recommended." },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-64 flex items-center justify-center">
      {reviews.map((r, i) => (
        <div 
          key={i} 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ${
            i === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <p className="text-xl md:text-2xl text-white italic text-center max-w-2xl px-6 mb-6">"{r.text}"</p>
          <div className="text-neon-green font-orbitron font-bold tracking-widest text-sm">{r.name}</div>
          <div className="text-white/30 text-[10px] uppercase">{r.company}</div>
        </div>
      ))}
      <div className="absolute bottom-0 flex gap-2">
        {reviews.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)} 
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-neon-green w-6' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <LampHero />
      <ClientLogos />

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Projects Completed', value: '80+' },
            { label: 'Happy Clients', value: '50+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Remote Experts', value: '25+' },
          ].map((stat, i) => (
            <div key={i} className="glass p-8 rounded-2xl text-center hover:border-neon-green/50 transition-colors group">
              <div className="text-4xl md:text-5xl font-orbitron font-black text-neon-green mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-white/60 uppercase tracking-widest text-[10px] font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron font-bold text-white mb-4">Core Ecosystem</h2>
            <p className="text-white/40 font-light">The branches of our digital innovation, reaching towards the future.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group flex flex-col items-center text-center">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">{s.icon}</div>
                <h3 className="text-lg font-orbitron text-white mb-4 leading-snug">{s.title}</h3>
                <p className="text-xs text-white/50 mb-6 flex-grow">{s.description}</p>
                <Link to="/services" className="text-neon-green text-[10px] font-orbitron font-bold border-b border-neon-green/0 hover:border-neon-green transition-all uppercase tracking-widest">Discover</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-orbitron font-bold text-white mb-16">Ecosystem Feedback</h2>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass p-12 rounded-[3rem] border-neon-green/20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-8xl">🌿</div>
          <h2 className="text-3xl font-orbitron font-bold text-white mb-4 uppercase tracking-tighter">Cultivate Your Inbox</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">Subscribe to get the latest insights on AI and sustainable digital design.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-neon-green text-white text-sm"
            />
            <button className="px-8 py-4 bg-neon-green text-black font-orbitron font-black text-xs tracking-widest rounded-xl hover:opacity-90">SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
