'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user'|'model', text: string}[]>([
    { role: 'model', text: 'Welcome to the digital woods. I am VORTEK-AI. How can I assist your business growth today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    // Simulated response for demo purposes
    setTimeout(() => {
      const responses = [
        "Thank you for reaching out! Our team specializes in creating innovative digital solutions. Would you like to learn more about our services?",
        "That's a great question! At Vortek, we blend nature-inspired design with cutting-edge technology to deliver impactful results.",
        "I'd be happy to help! Our ecosystem approach ensures every project is cultivated with precision and care.",
        "Interesting! Let me connect you with our team for a more detailed discussion about your project needs."
      ];
      setMessages(prev => [...prev, { role: 'model', text: responses[Math.floor(Math.random() * responses.length)] }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-80 h-[450px] glass rounded-2xl flex flex-col shadow-2xl border border-neon-green/30 overflow-hidden">
          <div className="bg-[#1a2a1a] p-4 flex justify-between items-center border-b border-neon-green/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
              <span className="font-orbitron text-sm font-bold text-neon-green">VORTEK-AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">X</button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-[#39FF14] text-black rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none animate-pulse text-xs text-white/40 italic">
                  Cultivating response...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-black/40">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our services..."
                className="flex-grow bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-neon-green"
              />
              <button onClick={handleSend} className="bg-neon-green text-black px-3 rounded-lg hover:scale-105 transition-transform">
                {'➤'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-neon-green rounded-full flex items-center justify-center text-black shadow-lg hover:scale-110 transition-all group"
        >
          <span className="text-2xl group-hover:rotate-12 transition-transform">{'🤖'}</span>
        </button>
      )}
    </div>
  );
}
