import { Presentation, Briefcase, Users, UserPlus } from 'lucide-react';

const EventDetails = () => {
  const features = [
    {
      icon: Presentation,
      title: 'הרצאות',
      description: 'מומחים בתחום העבודה והקריירה',
      iconBg: '#bfdbfe',
      iconColor: '#1e40af',
      accentColor: '#2563eb'
    },
    {
      icon: Briefcase,
      title: 'יריד משרות',
      description: 'חברות מובילות מחפשות עובדים',
      iconBg: '#8ccba8',
      iconColor: '#1e4029',
      accentColor: '#4a8359'
    },
    {
      icon: Users,
      title: 'ראיונות עם חברות',
      description: 'הזדמנות להתחבר למגייסים',
      iconBg: '#e9d5ff',
      iconColor: '#6b21a8',
      accentColor: '#9333ea'
    },
    {
      icon: UserPlus,
      title: 'מפגשים עם מנטורים',
      description: 'ממיזם "מהחזית לחוזה"',
      iconBg: '#fed7aa',
      iconColor: '#9a3412',
      accentColor: '#ea580c'
    },
  ];

  return (
    <section className="relative z-10 py-12 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-brand-green-dark mb-3">
            מה כולל האירוע?
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            יום מלא בהזדמנויות, קשרים מקצועיים וכלים למציאת העבודה המושלמת
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-start gap-6 flex-row-reverse"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className="w-14 h-14 md:w-18 md:h-18 rounded-xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: feature.iconBg }}
                  >
                    <Icon
                      className="w-7 h-7 md:w-9 md:h-9"
                      strokeWidth={2}
                      style={{ color: feature.iconColor }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-right">
                  <h3 className="text-xl md:text-3xl font-bold text-brand-green-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

