
import { useState } from 'react';
import { Star, Contact, Calendar, Book } from 'lucide-react';

interface Mentor {
  id: number;
  name: string;
  role: string;
  expertise: string[];
  image: string;
  bio: string;
  color: string;
}

const MentorshipSection = () => {
  const [activeMentor, setActiveMentor] = useState<number | null>(null);

  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Leadership Coach",
      expertise: ["Public Speaking", "Team Leadership", "Goal Setting"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=face",
      bio: "Sarah has 10+ years of experience in youth development and has helped hundreds of teenagers discover their leadership potential.",
      color: "electric-blue"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Community Impact Specialist",
      expertise: ["Project Management", "Social Innovation", "Civic Engagement"],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop&crop=center",
      bio: "Marcus leads our community projects and has facilitated over 50 successful youth-led community initiatives.",
      color: "neon-green"
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      role: "Skills Development Director",
      expertise: ["Career Preparation", "Digital Literacy", "Financial Planning"],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=300&fit=crop&crop=face",
      bio: "Dr. Chen brings corporate experience and academic expertise to help youth develop practical life and career skills.",
      color: "bright-orange"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Spiritual Life Coordinator",
      expertise: ["Character Development", "Values Formation", "Purpose Discovery"],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop&crop=center",
      bio: "James guides young people in discovering their purpose and developing strong character foundations.",
      color: "hot-pink"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Application",
      description: "Complete our simple application form to tell us about your goals and interests.",
      color: "electric-blue"
    },
    {
      step: "2",
      title: "Matching",
      description: "We carefully match you with a mentor based on your aspirations and personality.",
      color: "neon-green"
    },
    {
      step: "3",
      title: "Introduction",
      description: "Meet your mentor in a structured introduction session to establish goals and expectations.",
      color: "bright-orange"
    },
    {
      step: "4",
      title: "Growth Journey",
      description: "Engage in regular mentoring sessions, workshops, and practical application opportunities.",
      color: "hot-pink"
    }
  ];

  return (
    <section id="mentorship" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-arvo font-bold text-white mb-6">
            <span className="gradient-text">Mentorship</span> That Transforms
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with experienced mentors who are passionate about helping you discover your potential, 
            develop your skills, and make a lasting impact in your community.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-arvo font-bold text-white text-center mb-12">
            Your Mentorship <span className="text-electric-blue">Journey</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connecting line (hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-600 to-gray-700 transform translate-x-4 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-${step.color} to-${step.color}/70 text-white text-xl font-bold mb-4 hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                  <h4 className="text-xl font-arvo font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meet Our Mentors */}
        <div className="mb-16">
          <h3 className="text-3xl font-arvo font-bold text-white text-center mb-12">
            Meet Our <span className="text-neon-green">Mentors</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={mentor.id}
                className={`bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover-lift cursor-pointer relative overflow-hidden group ${
                  activeMentor === mentor.id ? 'ring-2 ring-white' : ''
                }`}
                onMouseEnter={() => setActiveMentor(mentor.id)}
                onMouseLeave={() => setActiveMentor(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${mentor.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative mb-4">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-700 group-hover:border-white transition-colors duration-300"
                    />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-${mentor.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h4 className="text-xl font-arvo font-bold text-white mb-1">{mentor.name}</h4>
                  <p className={`text-${mentor.color} font-semibold mb-3`}>{mentor.role}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {mentor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full group-hover:bg-gray-700 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Bio (shown on hover) */}
                  <div className={`transition-all duration-300 ${activeMentor === mentor.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{mentor.bio}</p>
                    <button className={`text-${mentor.color} text-sm font-semibold hover:underline`}>
                      Connect with {mentor.name.split(' ')[0]}
                    </button>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${mentor.color} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-arvo font-bold text-white text-center mb-12">
            <span className="text-bright-orange">Success</span> Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover-lift">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=80&h=80&fit=crop&crop=face"
                  alt="Alex M."
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-arvo font-bold text-white mb-2">Alex M., Age 17</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    "My mentor Sarah helped me overcome my fear of public speaking. Now I'm leading 
                    youth council meetings and have been accepted to my dream college with a 
                    leadership scholarship!"
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-electric-blue fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover-lift">
              <div className="flex items-start space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=80&h=80&fit=crop&crop=face"
                  alt="Maria S."
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-arvo font-bold text-white mb-2">Maria S., Age 16</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    "Through the mentorship program, I discovered my passion for community service. 
                    I've now started a food drive initiative that has helped over 200 families in our area."
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-neon-green fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-arvo font-bold text-white mb-4">
              Ready to find your mentor?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Take the first step towards unlocking your potential with personalized mentorship 
              designed to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary hover:shadow-electric-blue/50"
              >
                Apply for Mentorship
              </a>
              <button className="btn-secondary hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
