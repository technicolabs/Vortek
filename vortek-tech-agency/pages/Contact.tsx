
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for EmailJS or Backend here
  };

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-orbitron font-black text-white mb-8">GET IN TOUCH</h1>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              Ready to plant the seeds of your digital ecosystem? Contact our global team to discuss your next project.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 glass p-6 rounded-2xl border-white/5 hover:border-neon-green/30 transition-all">
                <div className="text-3xl">📞</div>
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Phone</div>
                  <div className="text-white text-lg">+92 325 3638180</div>
                </div>
              </div>
              <div className="flex items-center gap-6 glass p-6 rounded-2xl border-white/5 hover:border-neon-green/30 transition-all">
                <div className="text-3xl">✉️</div>
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Email</div>
                  <div className="text-white text-lg">labtechnico@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 glass p-6 rounded-2xl border-white/5 hover:border-neon-green/30 transition-all">
                <div className="text-3xl">🌍</div>
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Operations</div>
                  <div className="text-white text-lg">Remote-first (UAE & Global)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-12 rounded-[3rem] border-white/10">
            {submitted ? (
              <div className="text-center py-12 animate-in zoom-in-95 duration-500">
                <div className="text-6xl mb-6">🌿</div>
                <h3 className="text-3xl font-orbitron font-bold text-white mb-4">Submission Received</h3>
                <p className="text-white/60">Thank you for reaching out! A specialist will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-neon-green font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-orbitron font-bold text-white/40 tracking-widest">FULL NAME</label>
                    <input type="text" required placeholder="John Doe" className="w-full glass bg-transparent px-6 py-4 rounded-xl text-white focus:outline-none focus:border-neon-green" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-orbitron font-bold text-white/40 tracking-widest">EMAIL ADDRESS</label>
                    <input type="email" required placeholder="john@company.com" className="w-full glass bg-transparent px-6 py-4 rounded-xl text-white focus:outline-none focus:border-neon-green" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-orbitron font-bold text-white/40 tracking-widest">INTERESTED SERVICE</label>
                  <select className="w-full glass bg-transparent px-6 py-4 rounded-xl text-white focus:outline-none focus:border-neon-green appearance-none">
                    <option className="bg-[#0a0f0a]">Web App Development</option>
                    <option className="bg-[#0a0f0a]">Mobile App Development</option>
                    <option className="bg-[#0a0f0a]">Graphic Design</option>
                    <option className="bg-[#0a0f0a]">AI Solutions</option>
                    <option className="bg-[#0a0f0a]">Digital Marketing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-orbitron font-bold text-white/40 tracking-widest">YOUR MESSAGE</label>
                  <textarea rows={5} required placeholder="Tell us about your project goals..." className="w-full glass bg-transparent px-6 py-4 rounded-xl text-white focus:outline-none focus:border-neon-green resize-none"></textarea>
                </div>
                
                <div className="pt-6">
                  <button type="submit" className="w-full py-5 bg-[#228B22] text-white font-black font-orbitron tracking-widest rounded-2xl hover:bg-neon-green hover:text-black transition-all transform hover:scale-[1.02] neon-glow">
                    SEND TRANSMISSION ➤
                  </button>
                </div>
                <p className="text-[10px] text-white/30 text-center uppercase tracking-widest">Protected by high-tech forest encryption</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
