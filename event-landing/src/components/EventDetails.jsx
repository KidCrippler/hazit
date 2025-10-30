import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const EventDetails = () => {
  const features = [
    'הרצאות',
    'יריד משרות',
    'ראיונות עם חברות מגייסות',
    'מפגשים עם מנטורים ממיזם "מהחזית לחוזה"',
  ];

  return (
    <section className="relative -mt-20 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-brand-beige rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16"
        >
          {/* Features List */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-right"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-brand-green rounded-sm flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
                <span className="text-lg md:text-xl font-semibold text-brand-green-dark">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;

