import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import EventInfo from './components/EventInfo';
import Itinerary from './components/Itinerary';
import Speakers from './components/Speakers';
import CompanyLogos from './components/CompanyLogos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-beige" dir="rtl">
      <HeroSection />
      <EventDetails />
      <EventInfo />
      <Itinerary />
      <Speakers />
      <CompanyLogos />
      <Footer />
    </div>
  );
}

export default App;
