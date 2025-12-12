import { motion } from 'framer-motion';
import handshakeImg from '../assets/handshake.jpeg';
import mehazitLogo from '../../assets/hazit.png';
import imagenLogo from '../../assets/imagen-logo.png';

const HeroSection = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${handshakeImg})` }}
      />

      {/* Darker Gradient Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        {/* Logo Section - Overlapping */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center mb-12 md:mb-16"
        >
          <div className="relative flex items-center justify-center">
            {/* Mehazit Logo - Right (RTL) */}
            <div className="relative z-20 w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 
              rounded-full overflow-hidden
              bg-white
              shadow-[0_8px_30px_rgb(0,0,0,0.4)] 
              flex items-center justify-center">
              <img
                src={mehazitLogo}
                alt="מהחזית לחוזה"
                className="w-full h-full object-contain"
              />
            </div>

            {/* IMAGEN Logo - Left (RTL) - Overlapping */}
            <div className="relative z-10 -mr-6 md:-mr-8 lg:-mr-10 w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 
              rounded-full overflow-hidden
              bg-coral
              shadow-[0_8px_30px_rgb(0,0,0,0.4)] 
              flex items-center justify-center">
              <img
                src={imagenLogo}
                alt="IMAGEN"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Content - Clean Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-center space-y-8 md:space-y-10 max-w-5xl mx-auto"
        >
          {/* Main Headline - Clean and Bold */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight 
              font-display uppercase tracking-wide
              [text-shadow:_3px_3px_10px_rgb(0_0_0_/_70%)]">
              UPGRADE YOUR
              <br />
              LINKEDIN
            </h1>
            
            <div className="text-white space-y-4 md:space-y-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold
                [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
                סדנת מיתוג אישי - מהחזית לחוזה
              </h2>
              
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed
                [text-shadow:_1px_1px_6px_rgb(0_0_0_/_50%)]">
                מהחזית לחוזה בשיתוף חברת IMAGEN מזמינים אתכם
                <br />
                לערב מיוחד במיוחד בשבילכם:
              </p>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed max-w-4xl mx-auto
                [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
                איך לבנות מיתוג אישי חזק ונטוורקינג חכם בלינקדאין
              </p>
            </div>
          </div>

          {/* Event Details - Integrated inline */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white text-lg md:text-xl font-bold pt-4">
            <div className="flex items-center gap-2 [text-shadow:_1px_1px_6px_rgb(0_0_0_/_50%)]">
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>29 בדצמבר</span>
            </div>
            
            <div className="text-white/60 text-2xl font-light">•</div>
            
            <div className="flex items-center gap-2 [text-shadow:_1px_1px_6px_rgb(0_0_0_/_50%)]">
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>17:00</span>
            </div>
            
            <div className="text-white/60 text-2xl font-light">•</div>
            
            <div className="flex items-center gap-2 [text-shadow:_1px_1px_6px_rgb(0_0_0_/_50%)]">
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>IMAGEN, תל אביב</span>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4"
          >
            <button 
              onClick={scrollToRegistration}
              className="text-lg md:text-xl text-white font-bold 
              [text-shadow:_1px_1px_6px_rgb(0_0_0_/_50%)]
              bg-coral/20 backdrop-blur-sm inline-block px-8 py-3 rounded-full border-2 border-white/30
              hover:bg-coral/30 hover:border-white/50 hover:scale-105
              active:scale-95
              transition-all duration-300 ease-out
              cursor-pointer">
              מספר המקומות מוגבל - מהרו להירשם!
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

