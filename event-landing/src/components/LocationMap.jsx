import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const LocationMap = () => {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    // Skip if map already loaded or no IntersectionObserver support
    if (shouldLoadMap || !('IntersectionObserver' in window)) {
      setShouldLoadMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadMap(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px', // Start loading 100px before visible
        threshold: 0.01
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoadMap]);

  const locationData = {
    name: 'משרדי Fiverr',
    address: 'אליעזר קפלן 8, תל אביב',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.828799999999!2d34.788!3d32.078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7a7e3a09ab%3A0x1234567890abcdef!2sEliezer%20Kaplan%20St%208%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1234567890',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=אליעזר+קפלן+8+תל+אביב'
  };

  return (
    <section
      className="relative bg-white py-12 md:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="location-map-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2
              id="location-map-heading"
              className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-3 md:mb-4"
            >
              איך מגיעים?
            </h2>
            <p className="text-lg md:text-xl text-brand-green-dark/80">
              {locationData.name} - {locationData.address}
            </p>
          </motion.div>

          {/* Map Container */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Gradient border effect */}
            <div
              className="absolute -inset-2 bg-gradient-to-br from-brand-green/20 via-transparent to-brand-orange/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"
              aria-hidden="true"
            ></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Map iframe with lazy loading */}
              <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                {shouldLoadMap ? (
                  <iframe
                    src={locationData.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`מפת Google - ${locationData.name}`}
                    className="hover:scale-[1.02] transition-transform duration-700 ease-out"
                    aria-label={`מפה אינטראקטיבית של ${locationData.address}`}
                  ></iframe>
                ) : (
                  // Placeholder while loading
                  <div
                    className="w-full h-full bg-gray-100 flex items-center justify-center"
                    aria-label="המפה נטענת"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <MapPin className="w-12 h-12 text-brand-green/30 animate-pulse" />
                      <span className="text-brand-green-dark/60 text-sm">טוען מפה...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button - Open in Google Maps */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2">
                <a
                  href={locationData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-white/95 backdrop-blur-sm rounded-full text-brand-green hover:text-white hover:bg-brand-green font-medium text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2"
                  aria-label={`פתח את ${locationData.name} ב-Google Maps בכרטיסייה חדשה`}
                >
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                  <span>פתח ב-Google Maps</span>
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8 text-center"
          >
            <p className="text-sm md:text-base text-gray-600">
              חנייה זמינה בסביבה • נגישות מלאה לכיסאות גלגלים
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
