'use client';

import { useState } from 'react';
import { BLOG_POSTS } from '@/lib/constants';
import { BlogPost } from '@/lib/types';

export default function Blog() {
  const [filter, setFilter] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  const filteredPosts = filter === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === filter);

  const getFullContent = (post: BlogPost) => {
    return `
      In the rapidly evolving landscape of ${post.category.toLowerCase()}, ${post.title} represents a significant milestone in how we perceive digital growth. At Vortek, our ecosystem approach ensures that every line of code is treated like a digital seed, planted with intention and nurtured with precision.

      The integration of these concepts allows businesses to scale without losing their organic connection to their user base. As we look towards 2026, the convergence of AI and sustainable design principles will define the next generation of industry leaders.

      Key takeaways from this evolution include:
      - Adaptive intelligence as a core structural element.
      - Transparent data flows that respect user privacy like filtered sunlight.
      - Resilient infrastructure built to withstand the "storms" of global market shifts.

      Our team, led by experts like ${post.author}, continues to monitor these trends to provide our clients with a competitive edge in the digital woods.
    `;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Trends': return '📈';
      case 'Case Studies': return '📂';
      default: return '📖';
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h1 className="text-5xl font-orbitron font-black text-white mb-4">INSIGHTS & NEWS</h1>
            <p className="text-white/40 italic text-lg">&ldquo;Growing knowledge in the tech forest.&rdquo;</p>
          </div>
          <div className="flex gap-4">
            {['All', 'Trends', 'Case Studies', 'Tutorials'].map(f => (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs font-orbitron font-bold tracking-widest transition-all ${
                  filter === f ? 'bg-neon-green text-black scale-105' : 'glass text-white/50 hover:text-white'
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                onClick={() => setSelectedPost(post)}
                className="glass rounded-[2rem] overflow-hidden group hover:border-neon-green/30 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 aspect-square bg-white/5 flex items-center justify-center relative">
                    <div className="text-6xl group-hover:scale-125 transition-transform duration-700">
                      {getCategoryIcon(post.category)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent"></div>
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col justify-center">
                    <span className="text-neon-green font-orbitron font-bold text-[10px] tracking-widest mb-3">{post.category.toUpperCase()}</span>
                    <h2 className="text-2xl font-orbitron font-bold text-white mb-4 leading-snug group-hover:text-neon-green transition-colors">{post.title}</h2>
                    <p className="text-white/50 text-sm mb-6 line-clamp-2">{post.summary}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/60 border border-white/5 group-hover:border-neon-green/30 transition-colors">
                          {post.author[0]}
                        </div>
                        <span className="text-xs text-white/60 font-medium">{post.author}</span>
                      </div>
                      <span className="text-[10px] text-white/30">{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="space-y-12">
            <div className="glass p-8 rounded-[2rem]">
              <h3 className="font-orbitron font-bold text-white mb-6">Search</h3>
              <input type="text" placeholder="Explore the forest..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-neon-green outline-none text-white transition-all" />
            </div>

            <div className="glass p-8 rounded-[2rem]">
              <h3 className="font-orbitron font-bold text-white mb-6">Recent Post Seeds</h3>
              <div className="space-y-6">
                {BLOG_POSTS.slice(0, 4).map(p => (
                  <div key={p.id} className="group cursor-pointer" onClick={() => setSelectedPost(p)}>
                    <h4 className="text-white/80 text-sm font-medium group-hover:text-neon-green transition-colors leading-snug">{p.title}</h4>
                    <span className="text-[10px] text-white/30 font-orbitron">{p.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] bg-gradient-to-br from-[#228B22]/20 to-transparent border-neon-green/10">
              <h3 className="font-orbitron font-bold text-white mb-4">Newsletter</h3>
              <p className="text-white/50 text-xs mb-6 leading-relaxed">Get the latest digital growth insights delivered to your root system.</p>
              <input type="email" placeholder="email@ecosystem.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm mb-4 outline-none text-white focus:border-neon-green transition-all" />
              <button className="w-full py-3 bg-neon-green text-black font-black text-xs font-orbitron rounded-xl hover:opacity-90 transition-all">SUBSCRIBE</button>
            </div>
          </aside>
        </div>
      </div>

      {/* Blog Detail Popup (Readable Modal) */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-[#050805]/95 backdrop-blur-3xl animate-in fade-in duration-300" onClick={() => setSelectedPost(null)}></div>
          <div className="relative glass w-full max-w-4xl rounded-[3rem] overflow-hidden max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-500 border-neon-green/20 shadow-2xl">
            <button 
              onClick={() => setSelectedPost(null)} 
              className="absolute top-8 right-8 text-white/40 hover:text-white text-2xl z-20 w-12 h-12 flex items-center justify-center rounded-full glass border-white/10 hover:border-neon-green/50 transition-all"
            >
              {'✕'}
            </button>
            
            <div className="p-8 md:p-16">
              <header className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-neon-green/10 text-neon-green border border-neon-green/20 px-4 py-1 rounded-full text-[10px] font-orbitron font-black tracking-[0.2em]">
                    {selectedPost.category.toUpperCase()}
                  </span>
                  <span className="text-white/20 text-xs">-</span>
                  <span className="text-white/40 font-orbitron text-[10px] tracking-widest">{selectedPost.date}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white mb-8 tracking-tighter leading-[1.1]">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-xl border-white/10">
                    {getCategoryIcon(selectedPost.category)}
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] font-orbitron font-black tracking-widest uppercase">Written By</p>
                    <p className="text-white font-bold">{selectedPost.author}</p>
                  </div>
                </div>
              </header>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-white/80 leading-relaxed font-light mb-8 border-l-2 border-neon-green pl-6 italic">
                  {selectedPost.summary}
                </p>
                <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light whitespace-pre-line">
                  {getFullContent(selectedPost)}
                </div>
              </div>

              <footer className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex gap-4">
                  {['Facebook', 'Twitter', 'LinkedIn'].map(social => (
                    <button key={social} className="px-6 py-2 glass rounded-xl text-xs font-orbitron font-bold text-white/60 hover:text-neon-green hover:border-neon-green/30 transition-all">
                      {social.toUpperCase()}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="px-10 py-4 bg-neon-green text-black font-orbitron font-black text-xs tracking-widest rounded-2xl hover:scale-105 transition-all shadow-xl shadow-neon-green/10"
                >
                  RETURN TO FOREST
                </button>
              </footer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
