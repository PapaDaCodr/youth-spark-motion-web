
import { useState } from 'react';
import { Star, Contact, Calendar, Book } from 'lucide-react';

const AboutSection = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  const coreValues = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "God-Given Potential",
      description: "We believe every young person has unique gifts and talents waiting to be discovered and developed.",
      color: "electric-blue"
    },
    {
      icon: <Contact className="w-8 h-8" />,
      title: "Community Impact",
      description: "True leadership emerges through service to others and making a positive difference in our communities.",
      color: "neon-green"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Transformative Growth",
      description: "Personal transformation happens through intentional mentorship, challenges, and real-world application.",
      color: "bright-orange"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Lifelong Learning",
      description: "We foster a culture of continuous growth, curiosity, and the pursuit of excellence in all areas of life.",
      color: "hot-pink"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-arvo font-bold text-white mb-8">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-arvo text-white leading-relaxed mb-8">
              "To empower teenagers to discover and develop their{' '}
              <span className="gradient-text font-bold">God-given potential</span>{' '}
              through transformative leadership programs, meaningful mentorship, and impactful community engagement."
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-blue to-bright-orange mx-auto"></div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-arvo font-bold text-white mb-6">
              Our <span className="text-electric-blue">Story</span>
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                NextGen Youth Movement was born from a simple yet powerful belief: every teenager has 
                untapped potential waiting to be unleashed. What started as a small community initiative 
                has grown into a transformative movement impacting hundreds of young lives.
              </p>
              <p>
                Our founders recognized that traditional youth programs often fell short of addressing 
                the real challenges and aspirations of today's teenagers. They envisioned something 
                different—a comprehensive approach that combines leadership development, practical skills, 
                spiritual growth, and community impact.
              </p>
              <p>
                Today, we stand as a beacon of hope and transformation, proving that when young people 
                are given the right tools, mentorship, and opportunities, they don't just change their 
                own lives—they change their communities and the world around them.
              </p>
            </div>
            
            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">2019</div>
                <div className="text-gray-400">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-green">500+</div>
                <div className="text-gray-400">Lives Changed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bright-orange">8</div>
                <div className="text-gray-400">Communities</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop"
                alt="Youth leadership in action"
                className="rounded-xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay stats */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-electric-blue">95%</div>
                    <div className="text-xs text-gray-300">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-neon-green">4.9/5</div>
                    <div className="text-xs text-gray-300">Rating</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-bright-orange">100%</div>
                    <div className="text-xs text-gray-300">Free Programs</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-electric-blue/30 rounded-xl -z-10"></div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-r from-neon-green/20 to-bright-orange/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-arvo font-bold text-white mb-6">
            Our <span className="gradient-text">Core Values</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These foundational principles guide everything we do and shape how we approach 
            youth development and leadership training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className={`bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover-lift cursor-pointer relative overflow-hidden group ${
                activeValue === index ? 'ring-2 ring-white' : ''
              }`}
              onMouseEnter={() => setActiveValue(index)}
              onMouseLeave={() => setActiveValue(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-${value.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-${value.color} to-${value.color}/70 text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                
                <h4 className="text-xl font-arvo font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${value.color} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-arvo font-bold text-white mb-4">
              Ready to discover your potential?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join hundreds of teenagers who have already started their transformation journey with NextGen Youth Movement.
            </p>
            <a
              href="#programs"
              className="btn-primary hover:shadow-electric-blue/50"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
