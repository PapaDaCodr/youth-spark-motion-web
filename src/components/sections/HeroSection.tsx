
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Empowering Tomorrow's Leaders";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-electric-blue/20 to-neon-green/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-bright-orange/20 to-hot-pink/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-electric-blue/30 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-neon-green/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-arvo font-bold text-white mb-6 text-shadow">
            {displayText}
            <span className="gradient-text animate-pulse">|</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '2s' }}>
            Discover and develop your God-given potential through transformative leadership programs, 
            mentorship, and community engagement designed for the next generation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '3s' }}>
            <a 
              href="#programs" 
              className="btn-primary hover:animate-glow-pulse"
            >
              Join the Movement
            </a>
            <a 
              href="#about" 
              className="btn-secondary hover:scale-105"
            >
              Learn More
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="flex flex-col space-y-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-electric-blue to-neon-green flex items-center justify-center text-white font-bold hover:scale-110 transition-transform duration-300 cursor-pointer animate-glow-pulse">
            500+
          </div>
          <p className="text-white text-sm text-center">Youth<br/>Impacted</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
