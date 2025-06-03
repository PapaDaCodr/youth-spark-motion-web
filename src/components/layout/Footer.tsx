
import { Mail, Contact, Calendar, Book } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { name: 'Our Mission', href: '#about' },
      { name: 'Core Values', href: '#about' },
      { name: 'Success Stories', href: '#mentorship' },
      { name: 'Team', href: '#about' }
    ],
    programs: [
      { name: 'Leadership Workshops', href: '#programs' },
      { name: 'Community Projects', href: '#programs' },
      { name: 'Skills Development', href: '#programs' },
      { name: 'Youth Conferences', href: '#programs' }
    ],
    resources: [
      { name: 'Mentorship', href: '#mentorship' },
      { name: 'Program Calendar', href: '#contact' },
      { name: 'Parent Resources', href: '#contact' },
      { name: 'Alumni Network', href: '#contact' }
    ],
    contact: [
      { name: 'Get Involved', href: '#contact' },
      { name: 'Volunteer', href: '#contact' },
      { name: 'Partner With Us', href: '#contact' },
      { name: 'Donate', href: '#contact' }
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <span className="text-black font-bold text-lg">NG</span>
              </div>
              <span className="text-white font-arvo font-bold text-xl">
                NextGen Youth Movement
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering teenagers to discover and develop their God-given potential through 
              transformative leadership programs, mentorship, and community engagement.
            </p>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-semibold mb-3">Stay Connected</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-electric-blue text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-electric-blue to-bright-orange text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 text-sm">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-white font-arvo font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-arvo font-bold mb-4">Programs</h4>
            <ul className="space-y-2">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-arvo font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-bright-orange transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-arvo font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-hot-pink transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-cyan-400 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Email</p>
                <a href="mailto:info@nextgenyouth.org" className="text-gray-400 hover:text-electric-blue transition-colors duration-300 text-sm">
                  info@nextgenyouth.org
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-green to-green-400 rounded-lg flex items-center justify-center">
                <Contact className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Phone</p>
                <a href="tel:+1-555-NGY-MOVE" className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm">
                  (555) NGY-MOVE
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-bright-orange to-orange-400 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Office Hours</p>
                <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Stats */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Social Links */}
            <div>
              <p className="text-white font-semibold mb-3 text-center md:text-left">Follow Our Impact</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300" aria-label="Facebook">
                  <span className="text-white font-bold text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-hot-pink rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300" aria-label="Instagram">
                  <span className="text-white font-bold text-sm">ig</span>
                </a>
                <a href="#" className="w-10 h-10 bg-bright-orange rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300" aria-label="YouTube">
                  <span className="text-white font-bold text-sm">yt</span>
                </a>
                <a href="#" className="w-10 h-10 bg-neon-green rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300" aria-label="Twitter">
                  <span className="text-white font-bold text-sm">tw</span>
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-electric-blue">500+</div>
                <div className="text-gray-400 text-xs">Youth Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neon-green">12</div>
                <div className="text-gray-400 text-xs">Programs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-bright-orange">50+</div>
                <div className="text-gray-400 text-xs">Mentors</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-hot-pink">8</div>
                <div className="text-gray-400 text-xs">Communities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} NextGen Youth Movement. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
