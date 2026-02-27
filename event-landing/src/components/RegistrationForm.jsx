import { motion } from 'framer-motion';
import { CalendarX } from 'lucide-react';

const RegistrationForm = () => {
  return (
    <section id="registration" className="relative bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-olive rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6">
            <CalendarX className="w-16 h-16 text-gray-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-olive-dark">
              האירוע הסתיים
            </h2>
            <p className="text-lg text-gray-600">
              תודה לכל המשתתפים! האירוע התקיים בתאריך 11.11.2025 ואינו פתוח עוד להרשמה.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
