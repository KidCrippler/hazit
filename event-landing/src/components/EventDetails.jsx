import { Linkedin, Camera, Beer, Sparkles } from 'lucide-react';
import TEDBackground from './TEDBackground';

const EventDetails = () => {
  const features = [
    {
      icon: Linkedin,
      title: 'סדנת לינקדאין',
      description: 'עם רועי משה - בניית פרופיל מקצועי שמושך מגייסות ויצירת נטוורקינג חכם',
      iconBg: '#A8B687',
      iconColor: '#5C6A40',
      accentColor: '#8B9E5F'
    },
    {
      icon: Camera,
      title: 'צילום תמונת פרופיל',
      description: 'צילום מקצועי על ידי צלם מומחה לתמונת לינקדאין מנצחת',
      iconBg: '#FFCDD6',
      iconColor: '#C81F4A',
      accentColor: '#FF6B8A'
    },
    {
      icon: Beer,
      title: 'מינגלינג ופיצות',
      description: 'אווירה נינוחה עם אוכל ושתייה לנטוורקינג',
      iconBg: '#DDE2CD',
      iconColor: '#5C6A40',
      accentColor: '#8B9E5F'
    },
    {
      icon: Sparkles,
      title: 'כלים פרקטיים',
      description: 'שימוש בכלי AI לכתיבת קורות חיים מותאמים אישית',
      iconBg: '#FFE4E8',
      iconColor: '#A71D43',
      accentColor: '#FF6B8A'
    },
  ];

  return (
    <section className="relative z-10 py-12 md:py-20 lg:py-24 overflow-hidden">
      <TEDBackground />
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
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
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: feature.iconBg }}
                  >
                    {Icon && <Icon
                      className="w-8 h-8 md:w-10 md:h-10"
                      strokeWidth={2}
                      style={{ color: feature.iconColor }}
                    />}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-right">
                  <h3 className="text-xl md:text-3xl font-bold text-olive-dark mb-3">
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

