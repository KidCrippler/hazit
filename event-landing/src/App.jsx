import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import EventInfo from './components/EventInfo';
import WorkshopLeader from './components/WorkshopLeader';
import Itinerary from './components/Itinerary';
import PhotoGallery from './components/PhotoGallery';
import PartnerLogos from './components/PartnerLogos';
import RegistrationForm from './components/RegistrationForm';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <HeroSection />
      <EventDetails />
      <EventInfo />
      <WorkshopLeader />
      <Itinerary />
      <PhotoGallery />
      <PartnerLogos />
      <RegistrationForm />
      <LocationMap />
      <Footer />
    </div>
  );
}

export default App;
