import { motion } from 'framer-motion';

const CompanyLogos = () => {
  const companies = [
    'PAZ',
    'IAI',
    'RIMON Group',
    'NVIDIA',
    'tabeya',
    'fiverr.',
    'Amarel',
    'Gett.',
    'zap group',
    'GONG',
    'Elbit Systems',
  ];

  return (
    <section className="bg-brand-beige py-12 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-brand-green-dark font-bold text-lg md:text-xl"
            >
              {company}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogos;

