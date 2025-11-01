import { motion } from 'framer-motion';
import danielImg from '../../assets/daniel.jpeg';
import noaImg from '../../assets/noa.jpeg';
import nadavImg from '../../assets/nadav.jpeg';

const Speakers = () => {
  const speakers = [
    {
      name: 'דניאל דיין',
      title: 'היום שאחרי המילואים -',
      subtitle: 'בואו ללמוד',
      description: 'הכל על לינקדאין',
      image: danielImg,
      imagePosition: 'center 35%',
    },
    {
      name: 'נדב ניסן רודה',
      title: 'לפרוץ אחרי מאמץ -',
      subtitle: 'כלים נגישים במסע',
      description: 'חיפוש העבודה',
      image: nadavImg,
      imagePosition: 'center 10%',
    },
    {
      name: 'נעה ליבוביץ',
      title: 'הצד שלו, הצד שלה -',
      subtitle: 'חיפוש עבודה',
      description: 'בעיניים של מגייסת',
      image: noaImg,
      imagePosition: 'center 10%',
    },
  ];

  return (
    <section className="bg-brand-beige py-8 md:py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto"
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`text-center ${
                index === 2 ? 'col-span-2 md:col-span-1' : 'col-span-1'
              }`}
            >
              {/* Avatar Circle */}
              <div className="mb-3 md:mb-4 flex justify-center">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-brand-green border-4 border-brand-green-dark shadow-xl overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: speaker.imagePosition,
                      imageRendering: '-webkit-optimize-contrast',
                      transform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      WebkitFontSmoothing: 'antialiased',
                      filter: 'contrast(1.05) saturate(1.1)',
                    }}
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
              
              {/* Speaker Info */}
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-brand-green-dark">
                  {speaker.name}
                </h3>
                <p className="text-xs md:text-sm text-brand-green-dark">
                  {speaker.title}
                </p>
                <p className="text-xs md:text-sm text-brand-green-dark">
                  {speaker.subtitle}
                </p>
                <p className="text-xs md:text-sm text-brand-green-dark">
                  {speaker.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
