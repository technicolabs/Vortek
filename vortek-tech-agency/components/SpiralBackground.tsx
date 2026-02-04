
import React from 'react';

const SpiralBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0f0a] pointer-events-none">
      {/* Ambient Forest Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#228B22]/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#39FF14]/5 blur-[120px] rounded-full"></div>

      {/* The Spiral Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[150vmax] h-[150vmax] opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-neon-green/20 rounded-full"
              style={{
                animation: `spiral-rotate ${20 + i * 2}s linear infinite`,
                transform: `rotate(${i * 30}deg) scale(${1 - i * 0.05})`,
                borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                borderWidth: '1px',
                borderColor: i % 2 === 0 ? 'rgba(57, 255, 20, 0.2)' : 'rgba(34, 139, 34, 0.2)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid Overlay for Tech Vibe */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#39FF14 1px, transparent 1px), linear-gradient(90deg, #39FF14 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <style>{`
        @keyframes spiral-rotate {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default SpiralBackground;
