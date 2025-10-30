import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const EventInfo = () => {
  return (
    <section className="bg-brand-beige py-2">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-brand-green-dark"
        >
          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-brand-green" strokeWidth={2} />
            <div className="text-right">
              <div className="text-lg font-semibold">משרדי חברת fiverr.</div>
              <div className="text-base">אליעזר קפלן 8, ת״א</div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-brand-green" strokeWidth={2} />
            <div className="text-right">
              <div className="text-lg font-semibold">11.11.2025</div>
              <div className="text-base">17.00-21.00</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventInfo;

