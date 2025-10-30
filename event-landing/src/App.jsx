import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import EventInfo from './components/EventInfo';
import Speakers from './components/Speakers';
import CompanyLogos from './components/CompanyLogos';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-beige" dir="rtl">
      <HeroSection />
      <EventDetails />
      <EventInfo />
      <Speakers />
      <CompanyLogos />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
