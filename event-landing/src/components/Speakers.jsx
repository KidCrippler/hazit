import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    {
      name: 'דניאל דיין',
      title: 'הוא שאחרי המילואים-',
      subtitle: 'בואו ללמוד',
      description: 'הכל על לינקדאין',
    },
    {
      name: 'נעה ליבוביץ',
      title: 'הצד שלו, הצד שלה-',
      subtitle: 'חיפוש עבודה',
      description: 'בעיניים של מגייסת',
    },
    {
      name: 'נדב ניסן רודה',
      title: 'לפרוץ אחרי מאמץ-',
      subtitle: 'כלים נגישים במסע',
      description: 'חיפוש העבודה',
    },
  ];

  return (
    <section className="bg-brand-beige py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Avatar Circle */}
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-brand-green border-3 border-brand-green-dark shadow-lg flex items-center justify-center">
                  <User className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Speaker Info */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-brand-green-dark">
                  {speaker.name}
                </h3>
                <p className="text-sm text-brand-green-dark">
                  {speaker.title}
                </p>
                <p className="text-sm text-brand-green-dark">
                  {speaker.subtitle}
                </p>
                <p className="text-sm text-brand-green-dark">
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

