import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LogoSection from './components/LogoSection';
import ResultsSection from './components/ResultsSection';
import RevenueSection from './components/RevenueSection';
import ServicesSection from './components/ServicesSection';
import ScheduleSection from './components/ScheduleSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1f]">
      <Navigation />
      <Hero />
      <LogoSection />
      <ResultsSection />
      <RevenueSection />
      <ServicesSection />
      <ScheduleSection />
      <Footer />
    </div>
  );
}

export default App;
