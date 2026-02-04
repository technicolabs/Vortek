import Link from 'next/link';

export default function Testimonials() {
  const reviews = [
    { name: "Client A", company: "Tech Retail", text: "Vortek turned our vision into a stunning app! The nature-inspired design actually boosted our users' time-on-page.", rating: 5 },
    { name: "Client B", company: "Fitness Startup", text: "Exceptional design and support. Their team feels like a true partner in our growth.", rating: 5 },
    { name: "Client C", company: "AI Enterprise", text: "AI integration was game-changing for our support workflow. Vortek's expertise is unmatched.", rating: 5 },
    { name: "Client D", company: "Global Logistics", text: "Professional, innovative, and highly efficient. They delivered a complex portal ahead of schedule.", rating: 5 },
    { name: "Client E", company: "Creative Agency", text: "The most unique agency we've worked with. Their forest-tech aesthetic is truly futuristic.", rating: 5 },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-orbitron font-black text-white mb-16 text-center">CLIENT VOICES</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="glass p-12 rounded-[3rem] border-white/5 hover:border-neon-green/30 transition-all flex flex-col">
              <div className="text-neon-green text-2xl mb-6">{'★★★★★'}</div>
              <p className="text-white/80 text-lg italic leading-relaxed mb-10 flex-grow">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-green to-[#228B22] flex items-center justify-center text-black font-black">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-white font-orbitron font-bold text-sm">{r.name}</div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest">{r.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-white/40 mb-8">Ready to be our next success story?</p>
          <Link href="/contact" className="px-12 py-5 bg-white/5 border border-white/20 text-white font-black font-orbitron rounded-2xl hover:bg-neon-green hover:text-black transition-all">
            GET A QUOTE
          </Link>
        </div>
      </div>
    </div>
  );
}
