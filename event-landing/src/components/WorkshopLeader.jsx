import { motion } from 'framer-motion';
import { Linkedin, Brain, Sparkles, Users } from 'lucide-react';
import roiMosheImg from '../../assets/roi-moshe.jpg';
import TEDBackground from './TEDBackground';

const WorkshopLeader = () => {
  const workshopTopics = [
    {
      icon: Linkedin,
      title: 'בניית פרופיל מקצועי',
      description: 'כיצד לבנות פרופיל שמושך מגייסות',
    },
    {
      icon: Users,
      title: 'נטוורקינג חכם',
      description: 'אונליין ובמפגשים פרונטאליים',
    },
    {
      icon: Sparkles,
      title: 'כלי AI',
      description: 'לכתיבת קורות חיים מותאמים אישית',
    },
    {
      icon: Brain,
      title: 'כלים פרקטיים',
      description: 'מזווית ראייה של מגייס טכנולוגי מנוסה',
    },
  ];

  return (
    <section className="py-10 md:py-16 lg:py-20 relative overflow-hidden">
      <TEDBackground backgroundColor="rgba(249, 250, 251, 1)" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-olive-dark mb-4"
        >
          מנחה הסדנה
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-center text-gray-600 mb-12 md:mb-16"
        >
          מומחה לינקדאין ומגייס טכנולוגי מנוסה
        </motion.p>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Roi Moshe Profile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center md:text-right order-1 md:order-2"
            >
              {/* Avatar with gradient border */}
              <div className="mb-6 flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-olive via-coral to-olive-dark rounded-full blur-md opacity-70"></div>
                  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-white p-2 shadow-2xl overflow-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                      <img 
                        src={roiMosheImg} 
                        alt="רועי משה"
                        className="w-full h-full object-cover"
                        style={{ 
                          objectPosition: 'center 20%',
                          imageRendering: '-webkit-optimize-contrast',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Name and Title */}
              <h3 className="text-3xl md:text-4xl font-black text-olive-dark mb-2">
                רועי משה
              </h3>
              <p className="text-lg md:text-xl font-semibold text-coral mb-4">
                מנחה הסדנה
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                מגייס טכנולוגי מנוסה ומומחה לבניית מיתוג אישי ברשתות המקצועיות.
                רועי מתמחה בליווי אנשי טק בחיפוש עבודה ובבניית נוכחות דיגיטלית מקצועית.
              </p>
            </motion.div>

            {/* Workshop Topics */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 border border-olive/10">
                <h4 className="text-2xl md:text-3xl font-bold text-olive-dark mb-6 text-center md:text-right">
                  מה בתוכנית?
                </h4>
                <div className="space-y-4">
                  {workshopTopics.map((topic, index) => {
                    const Icon = topic.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-olive/5 to-coral/5 hover:from-olive/10 hover:to-coral/10 transition-all duration-300"
                      >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-olive to-olive-dark flex items-center justify-center shadow-lg">
                            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 text-right">
                          <h5 className="text-lg md:text-xl font-bold text-olive-dark mb-1">
                            {topic.title}
                          </h5>
                          <p className="text-sm md:text-base text-gray-600">
                            {topic.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopLeader;

