
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import AboutSection from '../components/sections/AboutSection';
import ProgramsSection from '../components/sections/ProgramsSection';
import MentorshipSection from '../components/sections/MentorshipSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProgramsSection />
        <MentorshipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
