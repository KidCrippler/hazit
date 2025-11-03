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

          {/* Mobile layout (4-3-4 pattern) */}
          <div className="md:hidden">
            {/* Mobile row 1 - 4 logos */}
            <div className="flex justify-center items-center gap-4 mb-6">
              {companies.slice(0, 4).map((company, index) => (
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
                  className="flex items-center justify-center w-16 h-16 transition-all duration-300 cursor-pointer"
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
                    className="hidden text-brand-green-dark font-bold text-xs text-center"
                    style={{ display: 'none' }}
                  >
                    {company.name}
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Mobile row 2 - 3 logos (offset) */}
            <div className="flex justify-center items-center gap-4 mb-6">
              {companies.slice(4, 7).map((company, index) => (
                <motion.a
                  key={index + 4}
                  href={company.jobsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 4) * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.25,
                  }}
                  className="flex items-center justify-center w-16 h-16 transition-all duration-300 cursor-pointer"
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
                    className="hidden text-brand-green-dark font-bold text-xs text-center"
                    style={{ display: 'none' }}
                  >
                    {company.name}
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Mobile row 3 - 4 logos */}
            <div className="flex justify-center items-center gap-4">
              {companies.slice(7).map((company, index) => (
                <motion.a
                  key={index + 7}
                  href={company.jobsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 7) * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.25,
                  }}
                  className="flex items-center justify-center w-16 h-16 transition-all duration-300 cursor-pointer"
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
                    className="hidden text-brand-green-dark font-bold text-xs text-center"
                    style={{ display: 'none' }}
                  >
                    {company.name}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Desktop layout (6-5 pattern) */}
          <div className="hidden md:block">
            {/* Desktop row 1 - 6 logos */}
            <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-20 mb-8 md:mb-12">
              {companies.slice(0, 6).map((company, index) => (
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
                  className="flex items-center justify-center w-36 h-24 md:w-44 md:h-28 transition-all duration-300 cursor-pointer"
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
                    className="hidden text-brand-green-dark font-bold text-sm text-center"
                    style={{ display: 'none' }}
                  >
                    {company.name}
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Desktop row 2 - 5 logos (offset) */}
            <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-20">
              {companies.slice(6).map((company, index) => (
                <motion.a
                  key={index + 6}
                  href={company.jobsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 6) * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.25,
                  }}
                  className="flex items-center justify-center w-36 h-24 md:w-44 md:h-28 transition-all duration-300 cursor-pointer"
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
                    className="hidden text-brand-green-dark font-bold text-sm text-center"
                    style={{ display: 'none' }}
                  >
                    {company.name}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogos;

