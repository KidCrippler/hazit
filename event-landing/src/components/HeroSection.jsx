import { motion } from 'framer-motion';
import handshakeImg from '../assets/handshake.jpeg';
import mehazitLogo from '../../assets/hazit.png';
import imagenLogo from '../../assets/imagen-logo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${handshakeImg})` }}
      />

      {/* Olive/Coral Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-olive/70 via-olive-dark/60 to-olive-dark/80" />

      <div className="relative z-10 container mx-auto px-6 py-12 md:py-20">
        {/* Logo Section - Overlapping */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center mb-8 md:mb-12"
        >
          <div className="relative flex items-center justify-center">
            {/* Mehazit Logo - Right (RTL) */}
            <div className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-white shadow-2xl overflow-hidden flex items-center justify-center p-3 md:p-4 border-4 border-white">
              <img
                src={mehazitLogo}
                alt="מהחזית לחוזה"
                className="w-full h-full object-contain"
              />
            </div>

            {/* IMAGEN Logo - Left (RTL) - Overlapping */}
            <div className="relative z-20 -mr-10 md:-mr-14 w-28 h-28 md:w-36 md:h-36 rounded-full bg-coral shadow-2xl overflow-hidden flex items-center justify-center p-4 md:p-5 border-4 border-white">
              <img
                src={imagenLogo}
                alt="IMAGEN"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center space-y-6 max-w-5xl mx-auto"
        >
          {/* Main Headline - Similar to save-the-date */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight 
            font-display uppercase tracking-wide
            [text-shadow:_3px_3px_0_rgb(0_0_0_/_40%)]">
            UPGRADE YOUR
            <br />
            LINKEDIN
          </h1>

          {/* Hebrew Description */}
          <div className="bg-white/95 rounded-2xl p-6 md:p-10 shadow-2xl max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-olive mb-4">
              סדנת מיתוג אישי - מהחזית לחוזה
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              מהחזית לחוזה בשיתוף חברת IMAGEN מזמינים אתכם
              <br />
              לערב מיוחד במיוחד בשבילכם:
            </p>
            <p className="text-xl md:text-2xl font-bold text-olive-dark">
              איך לבנות מיתוג אישי חזק ונטוורקינג חכם בלינקדאין
            </p>
          </div>

          {/* Event Details Pills */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
            {/* Date */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-coral text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 font-bold"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="text-right">
                <div className="text-sm opacity-90">DEC</div>
                <div className="text-2xl">29</div>
              </div>
            </motion.div>

            {/* Time */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-olive-dark text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 font-bold"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-right">
                <div className="text-sm opacity-90">שעה</div>
                <div className="text-xl">17:00</div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white text-olive-dark px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 font-bold"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="text-right">
                <div className="text-sm">IMAGEN,</div>
                <div className="text-lg">TEL AVIV</div>
              </div>
            </motion.div>
          </div>

          {/* Limited Spots Warning */}
          <p className="text-sm md:text-base text-white/90 font-medium mt-4">
            מספר המקומות מוגבל בהחלט. מהרו להירשם!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

