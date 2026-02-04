
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import CookieBanner from './components/CookieBanner';
import SpiralBackground from './components/SpiralBackground';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Team = lazy(() => import('./pages/Team'));
const Blog = lazy(() => import('./pages/Blog'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0a0f0a]">
    <div className="text-neon-green animate-pulse font-orbitron text-2xl">
      LOADING VORTEK...
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen selection:bg-[#39FF14] selection:text-black">
        {/* Spiral Background is fixed and behind everything */}
        <SpiralBackground />
        
        <Navbar />
        <main className="flex-grow relative z-10">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/team" element={<Team />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={
                <div className="min-h-screen flex flex-col items-center justify-center p-4">
                  <h1 className="text-6xl font-orbitron text-neon-green mb-4">404</h1>
                  <p className="text-xl text-white/60">Lost in the digital woods? Head home.</p>
                  <a href="/" className="mt-8 px-6 py-3 bg-[#228B22] hover:bg-[#39FF14] text-white hover:text-black transition-colors rounded-full font-bold">Return Home</a>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatBot />
        <CookieBanner />
      </div>
    </Router>
  );
};

export default App;
