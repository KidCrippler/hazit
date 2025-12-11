import { motion } from 'framer-motion';
import { useState } from 'react';
import { AlertCircle, Upload, CheckCircle } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    file: null
  });
  const [fileName, setFileName] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, file }));
      setFileName(file.name);
      if (errors.file) {
        setErrors(prev => ({ ...prev, file: '' }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'נא למלא שם מלא';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא למלא מספר טלפון';
    } else if (!/^0\d{1,2}-?\d{7}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'נא למלא כתובת אימייל';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }
    
    if (!formData.file) {
      newErrors.file = 'נא לצרף טופס 3010';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Integrate with Baserow API
    // This is a placeholder - actual integration will be added later
    console.log('Form submitted:', formData);
    alert('הטופס התקבל בהצלחה! (אינטגרציה ל-Baserow תתווסף בהמשך)');
    
    // Reset form
    setFormData({ fullName: '', phone: '', email: '', file: null });
    setFileName('');
    setErrors({});
  };

  return (
    <section className="relative bg-gradient-to-br from-olive via-olive-dark to-olive-dark py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-coral rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            הרשמה לאירוע
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            מספר המקומות מוגבל בהחלט - מהרו להירשם!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
            {/* Important Note */}
            <div className="bg-coral/10 border-2 border-coral/30 rounded-2xl p-4 mb-6 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-coral flex-shrink-0 mt-0.5" />
              <div className="text-right">
                <p className="font-semibold text-coral-dark mb-1">חשוב לדעת</p>
                <p className="text-sm text-gray-700">
                  יש לצרף טופס 3010 (אישור משרת מילואים) תקין ועדכני על מנת להשתתף בכנס
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-right text-gray-700 font-semibold mb-2">
                  שם מלא <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl text-right focus:outline-none focus:ring-2 transition-all ${
                    errors.fullName
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                      : 'border-gray-200 focus:border-olive focus:ring-olive/20'
                  }`}
                  placeholder="הזן שם מלא"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1 text-right">{errors.fullName}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-right text-gray-700 font-semibold mb-2">
                  טלפון <span className="text-coral">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl text-right focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                      : 'border-gray-200 focus:border-olive focus:ring-olive/20'
                  }`}
                  placeholder="050-1234567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1 text-right">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-right text-gray-700 font-semibold mb-2">
                  דואר אלקטרוני <span className="text-coral">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl text-right focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                      : 'border-gray-200 focus:border-olive focus:ring-olive/20'
                  }`}
                  placeholder="email@example.com"
                  dir="ltr"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 text-right">{errors.email}</p>
                )}
              </div>

              {/* File Upload */}
              <div>
                <label htmlFor="file" className="block text-right text-gray-700 font-semibold mb-2">
                  טופס 3010 (אישור משרת מילואים) <span className="text-coral">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                  />
                  <label
                    htmlFor="file"
                    className={`flex items-center justify-between w-full px-4 py-3 border-2 rounded-xl cursor-pointer transition-all hover:border-olive ${
                      errors.file
                        ? 'border-red-300 hover:border-red-500'
                        : fileName
                        ? 'border-olive bg-olive/5'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {fileName ? (
                        <CheckCircle className="w-5 h-5 text-olive" />
                      ) : (
                        <Upload className="w-5 h-5 text-gray-400" />
                      )}
                      <span className={fileName ? 'text-olive font-medium' : 'text-gray-500'}>
                        {fileName || 'בחר קובץ להעלאה'}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">PDF, JPG, PNG</span>
                  </label>
                </div>
                {errors.file && (
                  <p className="text-red-500 text-sm mt-1 text-right">{errors.file}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-l from-coral to-coral-dark text-white font-bold text-lg py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-coral/30"
              >
                שלח הרשמה
              </motion.button>
            </form>

            {/* Developer Note */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                💡 הערה למפתח: אינטגרציה עם Baserow תתווסף בהמשך
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;

