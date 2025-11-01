import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventInfo = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-brand-beige/30 to-white py-8 md:py-20 overflow-hidden">
      {/* Subtle geometric background elements */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 left-1/3 w-48 h-48 text-brand-orange" fill="currentColor" opacity="0.1">
          <polygon points="96,0 192,192 0,192" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-16 items-center">
            {/* Info Section - Clean Typography */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-12"
            >
              {/* Date */}
              <div className="relative">
                <div className="flex items-start gap-3 md:gap-5 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-green/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <Calendar className="w-7 h-7 md:w-10 md:h-10 text-brand-green relative z-10" strokeWidth={1.5} />
                  </div>
                  <div className="text-right flex-1">
                    <div className="text-[10px] md:text-xs tracking-widest text-brand-green/60 font-medium uppercase mb-1 md:mb-2">תאריך</div>
                    <div className="text-2xl md:text-4xl font-bold text-brand-green-dark tracking-tight">11.11.2025</div>
                  </div>
                </div>
                <div className="hidden md:block absolute -right-4 top-1/2 w-1 h-16 bg-gradient-to-b from-brand-green/0 via-brand-green/30 to-brand-green/0"></div>
              </div>

              {/* Time */}
              <div className="relative">
                <div className="flex items-start gap-3 md:gap-5 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-brand-orange/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <Clock className="w-7 h-7 md:w-10 md:h-10 text-brand-orange relative z-10" strokeWidth={1.5} />
                  </div>
                  <div className="text-right flex-1">
                    <div className="text-[10px] md:text-xs tracking-widest text-brand-orange/60 font-medium uppercase mb-1 md:mb-2">שעות</div>
                    <div className="text-2xl md:text-4xl font-bold text-brand-green-dark tracking-tight">17.00-21.00</div>
                  </div>
                </div>
                <div className="hidden md:block absolute -right-4 top-1/2 w-1 h-16 bg-gradient-to-b from-brand-orange/0 via-brand-orange/30 to-brand-orange/0"></div>
              </div>

              {/* Location */}
              <div className="relative">
                <div className="flex items-start gap-3 md:gap-5 group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <MapPin className="w-7 h-7 md:w-10 md:h-10 text-blue-600 relative z-10" strokeWidth={1.5} />
                  </div>
                  <div className="text-right flex-1">
                    <div className="text-[10px] md:text-xs tracking-widest text-blue-600/60 font-medium uppercase mb-1 md:mb-2">מיקום</div>
                    <div className="text-lg md:text-2xl font-bold text-brand-green-dark mb-0.5 md:mb-1">משרדי חברת fiverr.</div>
                    <div className="text-sm md:text-base text-gray-600">אליעזר קפלן 8, ת״א</div>
                  </div>
                </div>
                <div className="hidden md:block absolute -right-4 top-1/2 w-1 h-16 bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>
              </div>
            </motion.div>

            {/* Google Maps Section - Minimalist Frame */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Subtle border effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-brand-green/20 via-transparent to-brand-orange/20 rounded-lg blur-sm group-hover:blur-md transition-all"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] md:aspect-[4/3] h-[240px] md:h-auto overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.828799999999!2d34.788!3d32.078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7a7e3a09ab%3A0x1234567890abcdef!2sEliezer%20Kaplan%20St%208%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fiverr Office Location"
                    className="hover:scale-105 transition-transform duration-700"
                  ></iframe>
                </div>
                
                {/* Minimal link overlay */}
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=אליעזר+קפלן+8+תל+אביב"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/95 backdrop-blur-sm rounded-full text-brand-green hover:text-white hover:bg-brand-green font-medium text-xs md:text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                    פתח ב-Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;

