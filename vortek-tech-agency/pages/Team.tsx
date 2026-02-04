
import React from 'react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-orbitron font-black text-white mb-16 text-center">MEET THE EXPERTS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {TEAM.map((member) => (
            <div key={member.id} className="glass rounded-[3rem] p-12 text-center relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-5 grayscale group-hover:grayscale-0 transition-all duration-500">🌲</div>
              <div className="w-32 h-32 mx-auto rounded-full mb-8 border-4 border-neon-green/20 group-hover:border-neon-green transition-colors flex items-center justify-center text-6xl bg-white/5">
                {member.gender === 'male' ? '👨‍💻' : '👩‍💻'}
              </div>
              <h3 className="text-2xl font-orbitron text-white mb-2">{member.name}</h3>
              <p className="text-neon-green font-bold tracking-widest text-xs mb-6 uppercase">{member.role}</p>
              <div className="w-12 h-1 bg-white/10 mx-auto mb-6"></div>
              <p className="text-white/60 leading-relaxed mb-8 italic">"{member.funFact}"</p>
              
              <div className="flex justify-center gap-4">
                {['linkedin', 'twitter'].map(s => (
                  <button key={s} className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-neon-green hover:text-black transition-all">
                    <i className={`fab fa-${s}`}></i>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="glass p-16 rounded-[4rem] text-center border-neon-green/20 bg-gradient-to-br from-neon-green/5 to-transparent">
          <h2 className="text-4xl font-orbitron font-bold text-white mb-6">Join the Digital Woods</h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            We are always looking for passionate developers, creative designers, and marketing visionaries to join our remote-first team.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-8 py-4 glass border-white/20 rounded-2xl flex items-center gap-4">
              <span className="w-3 h-3 bg-neon-green rounded-full"></span>
              <span className="text-white font-orbitron text-sm">Frontend Developer</span>
            </div>
            <div className="px-8 py-4 glass border-white/20 rounded-2xl flex items-center gap-4">
              <span className="w-3 h-3 bg-neon-green rounded-full"></span>
              <span className="text-white font-orbitron text-sm">UI/UX Designer</span>
            </div>
            <div className="px-8 py-4 glass border-white/20 rounded-2xl flex items-center gap-4">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="text-white font-orbitron text-sm">AI Engineer</span>
            </div>
          </div>
          <button className="mt-12 px-12 py-4 bg-neon-green text-black font-black font-orbitron rounded-xl hover:scale-105 transition-transform">
            VIEW OPENINGS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
