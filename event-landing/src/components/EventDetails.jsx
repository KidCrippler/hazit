import { motion } from 'framer-motion';
import { Presentation, Briefcase, Users, UserPlus } from 'lucide-react';

const EventDetails = () => {
  const features = [
    {
      icon: Presentation,
      title: 'הרצאות',
      description: 'מומחים בתחום העבודה והקריירה',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: 'יריד משרות',
      description: 'חברות מובילות מחפשות עובדים',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'ראיונות עם חברות',
      description: 'הזדמנות להתחבר למגייסים',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: UserPlus,
      title: 'מפגשים עם מנטורים',
      description: 'ממיזם "מהחזית לחוזה"',
      color: 'from-orange-500 to-orange-600'
    },
  ];

  return (
    <section className="relative mt-8 z-10 pb-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-brand-beige shadow-2xl p-4 md:p-12 lg:p-16 border-t-4 border-brand-green"
        >
          {/* Section Header */}
          <div className="text-center mb-4 md:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-green-dark mb-2 md:mb-4"
            >
              מה כולל האירוע?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              יום מלא בהזדמנויות, קשרים מקצועיים וכלים למציאת העבודה המושלמת
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-3 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-3 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Content */}
                <div className="relative flex items-start gap-2 md:gap-4 text-right">
                  {/* Icon */}
                  <div className="flex-shrink-0 order-2">
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 order-1">
                    <h3 className="text-base md:text-2xl font-bold text-brand-green-dark mb-1 md:mb-2 group-hover:text-brand-green transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;

