import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventInfo = () => {
  const eventDetails = [
    {
      icon: Calendar,
      label: 'תאריך',
      mainInfo: '29.12.2025',
      subInfo: 'יום שני',
    },
    {
      icon: Clock,
      label: 'שעות',
      mainInfo: '17:00-21:00',
      subInfo: 'ערב',
    },
    {
      icon: MapPin,
      label: 'מיקום',
      mainInfo: 'משרדי IMAGEN',
      subInfo: 'אריאל שרון 4, גבעתיים - קומה 35',
    },
  ];

  return (
    <section className="relative py-10 md:py-24 overflow-hidden" style={{
      background: 'linear-gradient(to bottom right, #8B9E5F, #5C6A40, #4A5533)'
    }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
              פרטי האירוע
            </h2>
            <div className="w-16 h-0.5 md:w-20 md:h-1 bg-white/40 mx-auto rounded-full"></div>
          </motion.div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
            {eventDetails.map((detail, index) => {
              const Icon = detail.icon;

              return (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-full border border-white/20">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <div className="text-[10px] md:text-xs tracking-wider text-white/70 font-medium uppercase mb-1 md:mb-2">
                      {detail.label}
                    </div>
                    <div className="text-xl md:text-3xl font-bold text-white mb-0.5 md:mb-1">
                      {detail.mainInfo}
                    </div>
                    <div className="text-xs md:text-sm text-white/80">
                      {detail.subInfo}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#A8B687' }}></div>
      </div>
    </section>
  );
};

export default EventInfo;

