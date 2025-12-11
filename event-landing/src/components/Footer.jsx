import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="text-white py-8 md:py-10" style={{ backgroundColor: '#5C6A40' }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-right"
        >
          {/* Right Column - Organization Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold">מהחזית לחוזה</h3>
            <p className="text-sm opacity-90 leading-relaxed">תמיכה במילואימניקים בדרכם חזרה לשוק העבודה</p>
            <p className="text-xs opacity-75">ארגון ללא מטרות רווח</p>
          </div>
          
          {/* Center Column - Event Details */}
          <div className="space-y-2">
            <p className="text-sm font-semibold">29.12.2025 | 17:00-21:00</p>
            <p className="text-sm opacity-90">IMAGEN</p>
            <p className="text-xs opacity-75">אריאל שרון 4, גבעתיים</p>
          </div>
          
          {/* Left Column - LinkedIn */}
          <div className="flex flex-col items-center md:items-start">
            <a 
              href="https://www.linkedin.com/company/%D7%9E%D7%94%D7%97%D7%96%D7%99%D7%AA-%D7%9C%D7%97%D7%95%D7%96%D7%94/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="עקבו אחרינו ב-LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-10 h-10"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                />
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                />
              </svg>
            </a>
          </div>
        </motion.div>
        
        {/* Bottom Copyright Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-white/20 text-center text-xs opacity-75"
        >
          <p>© 2025 מהחזית לחוזה. כל הזכויות שמורות</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

