
import { useState } from 'react';
import { Book, Star, Contact, Calendar } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  icon: React.ReactNode;
  duration: string;
  nextSession: string;
}

const ProgramsSection = () => {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const programs: Program[] = [
    {
      id: 'leadership',
      title: 'Leadership Workshops',
      description: 'Intensive leadership development programs that build confidence, communication skills, and strategic thinking abilities.',
      features: ['Public Speaking Training', 'Team Building Exercises', 'Strategic Planning', 'Conflict Resolution'],
      color: 'electric-blue',
      gradient: 'from-electric-blue to-cyan-400',
      icon: <Star className="w-8 h-8" />,
      duration: '6 weeks',
      nextSession: 'March 15, 2024'
    },
    {
      id: 'community',
      title: 'Community Projects',
      description: 'Hands-on community service initiatives that develop civic responsibility and real-world problem-solving skills.',
      features: ['Community Assessment', 'Project Planning', 'Team Coordination', 'Impact Measurement'],
      color: 'neon-green',
      gradient: 'from-neon-green to-green-400',
      icon: <Contact className="w-8 h-8" />,
      duration: '8 weeks',
      nextSession: 'April 1, 2024'
    },
    {
      id: 'skills',
      title: 'Skills Development',
      description: 'Practical skill-building workshops covering digital literacy, financial planning, and career preparation.',
      features: ['Digital Literacy', 'Financial Planning', 'Resume Building', 'Interview Preparation'],
      color: 'bright-orange',
      gradient: 'from-bright-orange to-orange-400',
      icon: <Book className="w-8 h-8" />,
      duration: '4 weeks',
      nextSession: 'March 22, 2024'
    },
    {
      id: 'conferences',
      title: 'Youth Conferences',
      description: 'Annual conferences featuring inspiring speakers, networking opportunities, and skill-building workshops.',
      features: ['Keynote Speakers', 'Networking Sessions', 'Workshop Tracks', 'Awards Ceremony'],
      color: 'hot-pink',
      gradient: 'from-hot-pink to-pink-400',
      icon: <Calendar className="w-8 h-8" />,
      duration: '3 days',
      nextSession: 'June 10-12, 2024'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-arvo font-bold text-white mb-6">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive development programs designed to unlock potential and build tomorrow's leaders 
            through practical experience and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`program-card group relative overflow-hidden cursor-pointer ${
                activeProgram === program.id ? 'ring-2 ring-white' : ''
              }`}
              onMouseEnter={() => setActiveProgram(program.id)}
              onMouseLeave={() => setActiveProgram(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Colored border effect */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${program.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-arvo font-bold text-white group-hover:text-white transition-colors duration-300">
                      {program.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Duration: {program.duration}</span>
                      <span>Next: {program.nextSession}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {program.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">What You'll Learn:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="flex items-center text-gray-300 group-hover:text-gray-200 transition-all duration-300"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-${program.color} mr-2 group-hover:w-3 group-hover:h-3 transition-all duration-300`}></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4">
                  <button className={`flex-1 py-3 px-6 rounded-lg border-2 border-${program.color} text-${program.color} font-semibold hover:bg-${program.color} hover:text-white transition-all duration-300 group-hover:shadow-lg`}>
                    Learn More
                  </button>
                  <button className={`flex-1 py-3 px-6 rounded-lg bg-gradient-to-r ${program.gradient} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl`}>
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Hover particle effect */}
              {activeProgram === program.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-${program.color} rounded-full animate-ping`}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Program highlights */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <p className="text-gray-300">Program Completion Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <p className="text-gray-300">Participant Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">80%</div>
              <p className="text-gray-300">Continue to Advanced Programs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
