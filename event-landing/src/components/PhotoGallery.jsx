import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import atmosphere1 from '../../assets/gallery/atmosphere-1.jpg';
import atmosphere2 from '../../assets/gallery/atmosphere-2.jpg';
import atmosphere3 from '../../assets/gallery/atmosphere-3.jpg';
import photoBooth from '../../assets/gallery/photo-booth.jpg';
import TEDBackground from './TEDBackground';

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      src: atmosphere1,
      alt: 'אווירת האירוע - נטוורקינג',
      caption: 'נטוורקינג ומפגשים'
    },
    {
      src: atmosphere2,
      alt: 'אווירת האירוע - צילומים',
      caption: 'צילומים מקצועיים'
    },
    {
      src: atmosphere3,
      alt: 'אווירת האירוע - סדנה',
      caption: 'סדנאות אינטראקטיביות'
    },
    {
      src: photoBooth,
      alt: 'עמדת צילום מקצועית',
      caption: 'עמדת צילום ב-IMAGEN'
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 relative overflow-hidden">
      <TEDBackground backgroundColor="rgba(249, 250, 251, 1)" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-olive-dark mb-2">
            גלריית תמונות
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            הצצה לאירועים קודמים ולעמדת הצילום ב-IMAGEN
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-olive to-coral mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-[16/10] md:aspect-[21/10] overflow-hidden rounded-3xl shadow-2xl bg-gray-100">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay for Caption */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white text-xl md:text-2xl font-bold text-center"
                    >
                      {photo.caption}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons - RTL adjusted */}
            <button
              onClick={nextSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-olive"
              aria-label="תמונה הבאה"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-olive" />
            </button>
            
            <button
              onClick={prevSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-olive"
              aria-label="תמונה קודמת"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-olive" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white w-8 md:w-10'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`עבור לתמונה ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation (Desktop Only) */}
          <div className="hidden md:flex justify-center gap-4 mt-6">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-24 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-4 ring-olive scale-110 shadow-lg'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;

