'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vortek-cookie-consent');
    if (!consent) setIsVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('vortek-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-auto md:w-[600px] md:mx-auto z-[70]">
      <div className="glass p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-center gap-6">
        <p className="text-sm text-white/80 text-center md:text-left">
          We use cookies to improve your digital experience and cultivate growth in our ecosystem.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={accept} className="px-6 py-2 bg-neon-green text-black font-bold rounded-lg text-sm hover:opacity-90">Accept</button>
          <button onClick={() => setIsVisible(false)} className="px-6 py-2 bg-white/10 text-white font-bold rounded-lg text-sm hover:bg-white/20">Decline</button>
        </div>
      </div>
    </div>
  );
}
