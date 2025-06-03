
import { useState, useEffect, useRef } from 'react';

interface StatItem {
  number: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  gradient: string;
}

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      number: 500,
      suffix: '+',
      label: 'Youth Impacted',
      description: 'Lives transformed through our programs',
      color: 'electric-blue',
      gradient: 'from-electric-blue to-cyan-400'
    },
    {
      number: 12,
      suffix: '',
      label: 'Active Programs',
      description: 'Leadership and development initiatives',
      color: 'neon-green',
      gradient: 'from-neon-green to-green-400'
    },
    {
      number: 50,
      suffix: '+',
      label: 'Mentors',
      description: 'Dedicated leaders guiding youth',
      color: 'bright-orange',
      gradient: 'from-bright-orange to-orange-400'
    },
    {
      number: 8,
      suffix: '',
      label: 'Communities',
      description: 'Local areas we actively serve',
      color: 'hot-pink',
      gradient: 'from-hot-pink to-pink-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start counter animations
          stats.forEach((stat, index) => {
            let startTime: number;
            const duration = 2000;
            const startValue = 0;
            const endValue = stat.number;
            
            const animate = (currentTime: number) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const easeOutCubic = 1 - Math.pow(1 - progress, 3);
              const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic);
              
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = currentValue;
                return newCounters;
              });
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            
            setTimeout(() => requestAnimationFrame(animate), index * 200);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-arvo font-bold text-white mb-6">
            Our <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real numbers, real transformation. See how NextGen Youth Movement is making a difference 
            in communities across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stats-card group cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Circular progress ring */}
              <div className="relative mb-6">
                <div className="circular-progress mx-auto">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 128 128">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-700"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke={`var(--${stat.color})`}
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - (isVisible ? 0.75 : 0))}`}
                      className={`text-${stat.color} transition-all duration-2000 ease-out`}
                      style={{ 
                        transitionDelay: `${index * 200}ms`,
                        filter: 'drop-shadow(0 0 10px currentColor)'
                      }}
                    />
                  </svg>
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`text-3xl font-bold text-${stat.color} animate-counter-up`} style={{ animationDelay: `${index * 200}ms` }}>
                        {counters[index]}{stat.suffix}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-arvo font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>

              {/* Hover ripple effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-${stat.color} rounded-full animate-ripple`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a
            href="#programs"
            className="btn-primary inline-flex items-center space-x-2 hover:shadow-electric-blue/50"
          >
            <span>Be Part of the Next Success Story</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
