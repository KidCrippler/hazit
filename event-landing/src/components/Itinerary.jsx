import { motion } from 'framer-motion';
import { Clock, Users, Coffee, Mic, Heart, Sparkles } from 'lucide-react';

const Itinerary = () => {
  const events = [
    { time: '17:00-17:30', title: 'התכנסות', icon: Users, gradient: 'linear-gradient(to bottom right, #4a8359, #2d5f3f)' },
    { time: '17:30-17:50', title: 'דברי פתיחה', subtitle: 'ירין ודניאלה', icon: Mic, gradient: 'linear-gradient(to bottom right, #2d5f3f, #1e4029)' },
    { time: '17:50-18:00', title: 'סיפור הצלחה - אוריאל', subtitle: 'איך עברתי מהחזית לחוזה', icon: Sparkles, gradient: 'linear-gradient(to bottom right, #4a8359, #2d5f3f)' },
    { time: '18:00-18:45', title: 'פאנל מעסיקים', icon: Users, gradient: 'linear-gradient(to bottom right, #2d5f3f, #1e4029)' },
    { time: '18:45-19:00', title: 'הפסקה', icon: Coffee, gradient: 'linear-gradient(to bottom right, #4a8359, #2d5f3f)' },
    { time: '19:00-20:00', title: 'הרצאות בסגנון TED', subtitle: 'כלים פרקטיים ומנטליים לחיפוש עבודה ביום שאחרי', icon: Mic, gradient: 'linear-gradient(to bottom right, #2d5f3f, #1e4029)' },
    { time: '19:00-21:00', title: 'ספיד דייטינג', subtitle: 'ראיונות עם מעסיקים', icon: Heart, gradient: 'linear-gradient(to bottom right, #4a8359, #2d5f3f)' },
  ];

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-2">
            לו״ז אירוע
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-green-light to-brand-green mx-auto rounded-full"></div>
        </motion.div>

        {/* Modern Table Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Table Container with Glass Effect */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-brand-green/10">
            

            {/* Scrollable Table Body */}
            <div className="max-h-[450px] overflow-y-auto custom-scrollbar">
              {events.map((event, index) => {
                const Icon = event.icon;
                const isLastTwo = index >= events.length - 2;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={`
                      flex items-center justify-between p-4 md:p-5 border-b border-brand-green/5
                      min-h-[88px] md:min-h-[96px]
                      ${index % 2 === 0 ? 'bg-brand-beige/20' : 'bg-white'}
                      hover:bg-brand-green/5 transition-all duration-300 group
                      ${isLastTwo ? 'relative overflow-hidden' : ''}
                    `}
                  >
                    {/* Highlight for parallel sessions */}
                    {isLastTwo && (
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-50/50 to-transparent opacity-50"></div>
                    )}

                    {/* Event Title Column */}
                    <div className={`relative z-10 flex-1 flex flex-col ${!event.subtitle ? 'justify-center' : ''}`}>
                      <h3 className="text-lg md:text-xl font-bold text-brand-green-dark group-hover:text-brand-green transition-colors duration-300">
                        {event.title}
                      </h3>
                      {event.subtitle && (
                        <p className="text-sm md:text-base text-brand-green/80 font-medium mt-1">
                          {event.subtitle}
                        </p>
                      )}
                    </div>

                    {/* Time Column */}
                    <div className="flex items-center gap-3 relative z-10">
                      <div 
                        className="px-4 py-2 rounded-xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300 flex items-center gap-2 min-w-[140px] md:min-w-[160px] justify-center"
                        style={{ background: event.gradient }}
                      >
                        <Icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                        <span className="text-sm md:text-base text-white">{event.time}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer with Parallel Sessions Note */}
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 p-4 border-t-2 border-purple-300/20">
              <div className="flex items-center justify-center gap-2 text-brand-green-dark">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-sm md:text-base font-semibold">
                  ספיד דייטינג יתקיים במקביל לפעילויות נוספות
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, rgba(232, 228, 217, 0.3), rgba(232, 228, 217, 0.1));
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #4a8359, #2d5f3f, #1e4029);
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2d5f3f, #1e4029);
          border-color: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Itinerary;

