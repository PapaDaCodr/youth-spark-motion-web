
import { useState } from 'react';
import { Mail, Contact, Map, Calendar } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', age: '', interest: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-arvo font-bold text-white mb-6">
            Get <span className="gradient-text">Connected</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your transformation journey? We'd love to hear from you and help you 
            discover how NextGen Youth Movement can impact your life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-arvo font-bold text-white mb-6">
              Join the <span className="text-electric-blue">Movement</span>
            </h3>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-gray-300">We'll be in touch with you soon to discuss next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="13"
                      max="19"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                      placeholder="Your age"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                      Program Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a program</option>
                      <option value="leadership">Leadership Workshops</option>
                      <option value="community">Community Projects</option>
                      <option value="skills">Skills Development</option>
                      <option value="mentorship">Mentorship Program</option>
                      <option value="conferences">Youth Conferences</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Share your goals, interests, or any questions you have about our programs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-electric-blue to-bright-orange hover:scale-105 hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Start My Journey'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
                <p className="text-gray-400 text-sm mb-3">Get in touch directly</p>
                <a href="mailto:info@nextgenyouth.org" className="text-electric-blue hover:underline">
                  info@nextgenyouth.org
                </a>
              </div>

              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-green-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Contact className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
                <p className="text-gray-400 text-sm mb-3">Speak with our team</p>
                <a href="tel:+1-555-NGY-MOVE" className="text-neon-green hover:underline">
                  (555) NGY-MOVE
                </a>
              </div>

              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-bright-orange to-orange-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Map className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Visit Us</h4>
                <p className="text-gray-400 text-sm mb-3">Our main office</p>
                <p className="text-bright-orange text-sm">
                  123 Leadership Ave<br />
                  Youth City, YC 12345
                </p>
              </div>

              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gradient-to-r from-hot-pink to-pink-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Schedule</h4>
                <p className="text-gray-400 text-sm mb-3">Book a consultation</p>
                <button className="text-hot-pink hover:underline text-sm">
                  Book a Call
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-xl font-arvo font-bold text-white mb-6">
                Frequently Asked <span className="text-neon-green">Questions</span>
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Are your programs really free?</h4>
                  <p className="text-gray-400 text-sm">Yes! All our core programs are completely free thanks to community support and partnerships.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">What age groups do you serve?</h4>
                  <p className="text-gray-400 text-sm">We primarily serve teenagers ages 13-19, with specialized programs for different age ranges.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">How do I know which program is right for me?</h4>
                  <p className="text-gray-400 text-sm">Our team will work with you to assess your interests and goals to recommend the best fit.</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Our Journey</h4>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-neon-green rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">ig</span>
                </a>
                <a href="#" className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">yt</span>
                </a>
                <a href="#" className="w-10 h-10 bg-hot-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-sm">tw</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
