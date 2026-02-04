const CLIENTS = [
  { name: 'GREENLEAF', icon: '🌿' },
  { name: 'NEON DYNAMICS', icon: '⚡' },
  { name: 'ECOFLOW', icon: '🌊' },
  { name: 'TERRATECH', icon: '🌍' },
  { name: 'BIOCODE', icon: '🧬' },
  { name: 'CYBERROOT', icon: '🛡️' },
  { name: 'FOREST AI', icon: '🧠' },
  { name: 'VERTEX', icon: '🔼' },
];

export default function ClientLogos() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-orbitron font-bold tracking-[0.3em] text-white/30 uppercase">
            Trusted by Innovators Worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {CLIENTS.map((client, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group"
            >
              <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {client.icon}
              </span>
              <span className="font-orbitron text-[10px] font-black tracking-widest text-white whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
