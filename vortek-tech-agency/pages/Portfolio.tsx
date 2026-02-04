
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const getPlaceholderColor = (category: string) => {
    switch (category) {
      case 'Web': return 'from-[#228B22] to-[#050805]';
      case 'Mobile': return 'from-blue-600/50 to-[#050805]';
      case 'AI': return 'from-neon-green/40 to-[#050805]';
      case 'Graphic': return 'from-purple-600/50 to-[#050805]';
      case 'Marketing': return 'from-orange-600/50 to-[#050805]';
      default: return 'from-white/10 to-[#050805]';
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div>
            <h1 className="text-6xl font-orbitron font-black text-white mb-4 tracking-tighter">OUR <span className="text-neon-green">WORK</span></h1>
            <p className="text-white/40 italic text-lg font-light leading-relaxed">"Digital gardens we have cultivated, one pixel at a time."</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Web', 'Mobile', 'AI', 'Graphic'].map(f => (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-xl text-[10px] font-orbitron font-black tracking-widest transition-all ${
                  filter === f ? 'bg-neon-green text-black scale-110 shadow-lg' : 'glass text-white/50 hover:text-white hover:bg-white/10'
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div 
              key={p.id} 
              className="glass rounded-[2rem] overflow-hidden group cursor-pointer hover:border-neon-green/40 transition-all transform hover:-translate-y-2"
              onClick={() => setSelectedProject(p)}
            >
              <div className="aspect-[16/10] relative overflow-hidden flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${getPlaceholderColor(p.category)} opacity-40 group-hover:scale-110 transition-transform duration-700`}></div>
                <div className="text-8xl opacity-10 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                  {p.category === 'Web' ? '🌐' : p.category === 'Mobile' ? '📱' : p.category === 'AI' ? '🧠' : '🎨'}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="bg-neon-green text-black self-start px-4 py-1 rounded-full text-[9px] font-black font-orbitron mb-2 tracking-widest">EXPLORE</span>
                  <p className="text-white/60 text-xs line-clamp-2">{p.description}</p>
                </div>
              </div>
              <div className="p-8 border-t border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-neon-green text-[9px] font-black font-orbitron tracking-widest">{p.category.toUpperCase()}</div>
                  <div className="flex gap-1">
                    {p.techStack.slice(0, 2).map(t => (
                       <span key={t} className="text-[8px] text-white/30 font-orbitron">{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-neon-green transition-colors">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-[#050805]/95 backdrop-blur-3xl" onClick={() => setSelectedProject(null)}></div>
            <div className="relative glass w-full max-w-6xl rounded-[3rem] overflow-hidden max-h-full overflow-y-auto animate-in zoom-in-95 duration-300 border-neon-green/20">
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white/40 hover:text-white text-2xl z-20 w-10 h-10 flex items-center justify-center rounded-full glass">✕</button>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className={`w-full aspect-video lg:aspect-auto min-h-[300px] flex flex-col items-center justify-center relative bg-gradient-to-br ${getPlaceholderColor(selectedProject.category)} opacity-60`}>
                   <div className="text-[12rem]">{selectedProject.category === 'Web' ? '🌐' : selectedProject.category === 'Mobile' ? '📱' : selectedProject.category === 'AI' ? '🧠' : '🎨'}</div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[150%] h-[150%] border-2 border-white/5 rounded-full animate-spin-slow"></div>
                   </div>
                </div>
                <div className="p-8 md:p-16">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-neon-green font-orbitron font-black text-xs tracking-widest">{selectedProject.category.toUpperCase()}</span>
                    <div className="h-[1px] flex-grow bg-white/10"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white mb-8 tracking-tighter">{selectedProject.title}</h2>
                  
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-neon-green text-[10px] font-orbitron font-black uppercase tracking-widest mb-4">The Challenge</h4>
                      <p className="text-white/70 text-sm leading-relaxed font-light">{selectedProject.description}</p>
                    </div>
                    <div>
                      <h4 className="text-neon-green text-[10px] font-orbitron font-black uppercase tracking-widest mb-4">Tech Ecosystem</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(t => (
                          <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-orbitron text-white/80 hover:border-neon-green/30 transition-colors">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="glass p-8 rounded-[2rem] border-neon-green/30 bg-neon-green/5 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl">🌱</div>
                      <h4 className="text-neon-green font-orbitron font-black text-[10px] mb-4 uppercase tracking-widest">Impact & Results</h4>
                      <p className="text-white text-xl font-orbitron font-bold leading-tight">{selectedProject.results}</p>
                    </div>
                    <button className="w-full py-5 bg-neon-green text-black font-black font-orbitron text-xs tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-xl shadow-neon-green/10">
                      VIBRATE TRANSMISSION (LIVE)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
