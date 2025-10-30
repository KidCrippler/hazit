import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-brand-green via-brand-green-light to-brand-green overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16 text-center">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center mb-12 gap-0"
        >
          {/* Blue Circle - "קהילת ברזל" */}
          <div className="relative z-10 w-40 h-40 rounded-full bg-brand-blue border-4 border-white flex items-center justify-center shadow-xl">
            <div className="text-white text-center">
              <div className="text-2xl font-bold leading-tight">קהילת</div>
              <div className="text-2xl font-bold leading-tight">ברזל</div>
            </div>
          </div>
          
          {/* Beige Circle - "#מהחזית_לחוזה" */}
          <div className="relative -mr-10 w-40 h-40 rounded-full bg-brand-beige border-4 border-white flex items-center justify-center shadow-xl">
            <div className="text-brand-green text-center">
              <div className="text-xl font-bold leading-tight">#מהחזית</div>
              <div className="text-xl font-bold leading-tight">_לחוזה</div>
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            מהחזית לחוזה רשימתוף קהילת ברזל
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-white">
            מזמינים אתכם לכנס
          </p>
          
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            מעסיקים למען אנשי ונשות המילואים
          </p>
          
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            ההזדמנות שלכם להתחבר למעסיקים מובילים
            <br />
            בחזרה לשוק העבודה
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

