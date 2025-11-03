import { motion } from 'framer-motion';
import pazLogo from '../../assets/paz-logo.png';
import rimonLogo from '../../assets/rimon-logo.png';
import elbitLogo from '../../assets/elbit-logo.png';
import ubeyaLogo from '../../assets/ubeya-logo.png';
import fiverrLogo from '../../assets/fiverr-logo.png';
import amarelLogo from '../../assets/amarel-logo.png';
import zapLogo from '../../assets/zap-logo.png';
import nvidiaLogo from '../../assets/nvidia-logo.png';
import policeLogo from '../../assets/police-logo.png';
import iaiLogo from '../../assets/iai-logo.png';
import gongLogo from '../../assets/gong-logo.png';
import tidharLogo from '../../assets/tidhar-logo.png';
import mobileyeLogo from '../../assets/mobileye-logo.png';
import shabakLogo from '../../assets/shabak-logo.png';
import gettLogo from '../../assets/gett-logo.png';

const CompanyLogos = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const companies = [
    {
      name: 'פז',
      logo: pazLogo,
      jobsUrl: 'https://www.paz.co.il/jobs',
    },
    {
      name: 'קבוצת רימון',
      logo: rimonLogo,
      jobsUrl: 'https://rimongrp.com/he/career-he/',
    },
    {
      name: 'אלביט מערכות',
      logo: elbitLogo,
      jobsUrl: 'https://elbitsystemscareer.com/',
    },
    {
      name: 'Ubeya',
      logo: ubeyaLogo,
      jobsUrl: 'https://careers.ubeya.com/',
    },
    {
      name: 'Fiverr',
      logo: fiverrLogo,
      jobsUrl: 'https://www.fiverr.com/jobs/teams',
    },
    {
      name: 'אמארל',
      logo: amarelLogo,
      jobsUrl: 'https://www.amarel.net/career',
    },
    {
      name: 'קבוצת זאפ',
      logo: zapLogo,
      jobsUrl: 'https://zapgroup.co.il/careers',
    },
    {
      name: 'NVIDIA',
      logo: nvidiaLogo,
      jobsUrl: 'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite',
    },
    {
      name: 'משטרת ישראל',
      logo: policeLogo,
      jobsUrl: 'https://www.police.gov.il/join/CandidateForm/jobs',
    },
    {
      name: 'התעשייה האוירית',
      logo: iaiLogo,
      jobsUrl: 'https://jobs.iai.co.il/jobs/',
    },
    {
      name: 'Gong',
      logo: gongLogo,
      jobsUrl: 'https://www.gong.io/careers/',
    },
    {
      name: 'Tidhar',
      logo: tidharLogo,
      jobsUrl: 'https://',
    },
    {
      name: 'Mobileye',
      logo: mobileyeLogo,
      jobsUrl: 'https://',
    },
    {
      name: 'Shabak',
      logo: shabakLogo,
      jobsUrl: 'https://',
    },
    {
      name: 'Gett',
      logo: gettLogo,
      jobsUrl: 'https://',
    },
  ];

  return (
    <section className="bg-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              {...fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-4"
            >
              החברות שישתתפו בכנס
            </motion.h2>            
            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-brand-green-dark font-bold max-w-3xl mx-auto mt-6 mb-2"
            >
              👉 לחיצה על הלוגו תעביר אתכם לעמוד המשרות של החברה 👈
            </motion.p>
          </div>

          {/* Logo Grid - 5 columns, 3 rows (5-5-5 layout) */}
          <div className="grid grid-cols-5 gap-4 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
            {companies.map((company, index) => (
              <motion.a
                key={index}
                href={company.jobsUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.25,
                }}
                className="flex items-center justify-center w-full h-16 md:h-24 lg:h-28 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div 
                  className="hidden text-brand-green-dark font-bold text-xs md:text-sm text-center"
                  style={{ display: 'none' }}
                >
                  {company.name}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogos;

