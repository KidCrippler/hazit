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
    name: 'משרדי IMAGEN',
    address: 'אריאל שרון 4, גבעתיים - קומה 35',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.1!2d34.8116!3d32.0720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9e8b3a5f7d%3A0x1234567890abcdef!2sAriel%20Sharon%204%2C%20Givatayim!5e0!3m2!1sen!2sil!4v1234567890',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=אריאל+שרון+4+גבעתיים',
    transportation: {
      train: 'תחנת סבידור מרכז - הליכה של 7 דקות',
      parking: 'חניון ברוריה או חניון הלולאה'
    }
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
              className="text-3xl md:text-4xl font-bold text-olive-dark mb-3 md:mb-4"
            >
              איך מגיעים?
            </h2>
            <p className="text-lg md:text-xl text-olive-dark/80 mb-4">
              {locationData.name} - {locationData.address}
            </p>
            
            {/* Transportation Info */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm md:text-base">
              <div className="flex items-center gap-2 bg-olive/10 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span className="font-medium text-olive-dark">ברכבת: {locationData.transportation.train}</span>
              </div>
              <div className="flex items-center gap-2 bg-coral/10 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="font-medium text-coral-dark">חניה: {locationData.transportation.parking}</span>
              </div>
            </div>
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
              className="absolute -inset-2 bg-gradient-to-br from-olive/20 via-transparent to-coral/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"
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
                      <MapPin className="w-12 h-12 text-olive/30 animate-pulse" />
                      <span className="text-olive-dark/60 text-sm">טוען מפה...</span>
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
                  className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 bg-white/95 backdrop-blur-sm rounded-full text-olive hover:text-white hover:bg-olive font-medium text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-olive focus:ring-offset-2"
                  aria-label={`פתח את ${locationData.name} ב-Google Maps בכרטיסייה חדשה`}
                >
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                  <span>פתח ב-Google Maps</span>
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
