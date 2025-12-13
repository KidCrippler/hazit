import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { AlertCircle, Upload, CheckCircle, Loader2, User, Phone, Mail, FileText, X } from 'lucide-react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    file: null
  });
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  // Enhanced validation states
  const [touched, setTouched] = useState({});
  const [validationStatus, setValidationStatus] = useState({});
  const [focusedField, setFocusedField] = useState(null);
  const [shouldShake, setShouldShake] = useState(false);
  
  // Refs
  const emailDebounceRef = useRef(null);
  const formRef = useRef(null);

  // Helper text for each field
  const helperTexts = {
    fullName: 'שם פרטי ושם משפחה',
    phone: 'דוגמה: 050-1234567 או 02-1234567',
    email: 'כתובת אימייל תקינה',
    file: 'PDF, JPG או PNG עד 5MB'
  };

  // Validate individual field
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName': {
        if (!value.trim()) {
          return { isValid: false, message: 'נא למלא שם מלא' };
        }
        const words = value.trim().split(/\s+/);
        if (words.length < 2) {
          return { isValid: false, message: 'נא להזין שם פרטי ושם משפחה (לדוגמה: יוסי כהן)' };
        }
        return { isValid: true, message: '' };
      }
      case 'phone': {
        if (!value.trim()) {
          return { isValid: false, message: 'נא למלא מספר טלפון' };
        }
        const cleanPhone = value.replace(/[\s-]/g, '');
        const israeliPhoneRegex = /^0(5[0-9]|[2-4]|[8-9]|7[0-9])\d{7}$/;
        if (!israeliPhoneRegex.test(cleanPhone)) {
          return { isValid: false, message: 'מספר טלפון ישראלי לא תקין. דוגמה: 050-1234567' };
        }
        return { isValid: true, message: '' };
      }
      case 'email': {
        if (!value.trim()) {
          return { isValid: false, message: 'נא למלא כתובת אימייל' };
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return { isValid: false, message: 'כתובת אימייל לא תקינה. דוגמה: name@example.com' };
        }
        return { isValid: true, message: '' };
      }
      default:
        return { isValid: true, message: '' };
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Clear validation status when user changes value
    if (validationStatus[name]) {
      setValidationStatus(prev => ({ ...prev, [name]: null }));
    }
    
    // Debounced email validation
    if (name === 'email') {
      if (emailDebounceRef.current) {
        clearTimeout(emailDebounceRef.current);
      }
      
      setValidationStatus(prev => ({ ...prev, email: 'validating' }));
      
      emailDebounceRef.current = setTimeout(() => {
        const validation = validateField('email', value);
        if (touched.email) {
          setValidationStatus(prev => ({ 
            ...prev, 
            email: validation.isValid ? 'valid' : 'invalid' 
          }));
          if (!validation.isValid) {
            setErrors(prev => ({ ...prev, email: validation.message }));
          }
        }
      }, 500);
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocusedField(null);
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate on blur
    const validation = validateField(name, value);
    setValidationStatus(prev => ({ 
      ...prev, 
      [name]: validation.isValid ? 'valid' : 'invalid' 
    }));
    
    if (!validation.isValid && value.trim()) {
      setErrors(prev => ({ ...prev, [name]: validation.message }));
    } else if (validation.isValid) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const processFile = (file) => {
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    
    setTouched(prev => ({ ...prev, file: true }));
    
    if (file.size > maxSize) {
      setErrors(prev => ({ ...prev, file: `הקובץ גדול מדי (${(file.size / 1024 / 1024).toFixed(2)}MB). גודל מקסימלי: 5MB` }));
      setValidationStatus(prev => ({ ...prev, file: 'invalid' }));
      setFileName('');
      setFileSize(0);
      setFormData(prev => ({ ...prev, file: null }));
      return false;
    }
    
    if (!allowedTypes.includes(file.type)) {
      setErrors(prev => ({ ...prev, file: `סוג קובץ לא נתמך (${file.type}). נא להעלות PDF, JPG או PNG` }));
      setValidationStatus(prev => ({ ...prev, file: 'invalid' }));
      setFileName('');
      setFileSize(0);
      setFormData(prev => ({ ...prev, file: null }));
      return false;
    }
    
    setFormData(prev => ({ ...prev, file }));
    setFileName(file.name);
    setFileSize(file.size);
    setValidationStatus(prev => ({ ...prev, file: 'valid' }));
    if (errors.file) {
      setErrors(prev => ({ ...prev, file: '' }));
    }
    return true;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const success = processFile(file);
      if (!success) {
        e.target.value = ''; // Reset file input on error
      }
    }
  };

  const handleRemoveFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Clear file data
    setFormData(prev => ({ ...prev, file: null }));
    setFileName('');
    setFileSize(0);
    setValidationStatus(prev => ({ ...prev, file: null }));
    setErrors(prev => ({ ...prev, file: '' }));
    setTouched(prev => ({ ...prev, file: false }));
    
    // Reset the file input
    const fileInput = document.getElementById('file');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'נא למלא שם מלא';
    } else {
      // Check if name has at least 2 words
      const words = formData.fullName.trim().split(/\s+/);
      if (words.length < 2) {
        newErrors.fullName = 'נא להזין שם פרטי ושם משפחה';
      }
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא למלא מספר טלפון';
    } else {
      // Israeli phone number validation: supports formats like 050-1234567, 0501234567, 02-1234567, 021234567
      const cleanPhone = formData.phone.replace(/[\s-]/g, '');
      const israeliPhoneRegex = /^0(5[0-9]|[2-4]|[8-9]|7[0-9])\d{7}$/;
      if (!israeliPhoneRegex.test(cleanPhone)) {
        newErrors.phone = 'מספר טלפון ישראלי לא תקין';
      }
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'נא למלא כתובת אימייל';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }
    
    if (!formData.file) {
      newErrors.file = 'נא לצרף טופס 3010';
    } else if (formData.file.size > 5 * 1024 * 1024) {
      newErrors.file = 'הקובץ גדול מדי. גודל מקסימלי: 5MB';
    }
    
    return newErrors;
  };

  // Check if form is valid without setting errors (for button disable state)
  const isFormValid = () => {
    // Check full name has at least 2 words
    const words = formData.fullName.trim().split(/\s+/);
    if (words.length < 2) return false;
    
    // Check Israeli phone
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const israeliPhoneRegex = /^0(5[0-9]|[2-4]|[8-9]|7[0-9])\d{7}$/;
    if (!israeliPhoneRegex.test(cleanPhone)) return false;
    
    // Check email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
    
    // Check file exists and is under 5MB
    if (!formData.file || formData.file.size > 5 * 1024 * 1024) return false;
    
    return true;
  };

  // Calculate form completion
  const getCompletedFields = () => {
    let completed = 0;
    const total = 4;
    
    if (validateField('fullName', formData.fullName).isValid) completed++;
    if (validateField('phone', formData.phone).isValid) completed++;
    if (validateField('email', formData.email).isValid) completed++;
    if (formData.file && formData.file.size <= 5 * 1024 * 1024) completed++;
    
    return { completed, total };
  };

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      if (emailDebounceRef.current) {
        clearTimeout(emailDebounceRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Mark all fields as touched
      setTouched({ fullName: true, phone: true, email: true, file: true });
      
      // Trigger shake animation
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 650);
      
      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('file', formData.file);
      formDataToSend.append('fileName', formData.file.name);

        // Send to n8n webhook
        const response = await fetch('https://primary-production-759d0.up.railway.app/webhook-test/hazit-registration', {
          method: 'POST',
          body: formDataToSend,
        });

      const result = await response.json();

      if (response.ok) {
        alert('הרשמה התקבלה בהצלחה! נתראה באירוע 🎉');
        // Reset form
        setFormData({ fullName: '', phone: '', email: '', file: null });
        setFileName('');
        setFileSize(0);
        setErrors({});
        setTouched({});
        setValidationStatus({});
        setFocusedField(null);
        document.getElementById('file').value = ''; // Reset file input
      } else if (response.status === 429) {
        // 100 applicant limit reached
        alert(result.message || 'מצטערים, הגענו למספר המקסימלי של משתתפים.');
      } else {
        throw new Error(result.message || 'אירעה שגיאה');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('אירעה שגיאה בשליחת הטופס. אנא נסה שנית או פנה לתמיכה.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-olive-dark mb-4">
            הרשמה לאירוע
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
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
          <motion.div 
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-10"
            animate={shouldShake ? {
              x: [0, -10, 10, -10, 10, 0],
              transition: { duration: 0.6 }
            } : {}}
          >
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

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-right text-gray-700 font-semibold mb-2">
                  שם מלא <span className="text-coral">*</span>
                </label>
                <div className="relative">
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('fullName')}
                    onBlur={handleBlur}
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                    aria-describedby={errors.fullName ? 'fullName-error' : focusedField === 'fullName' ? 'fullName-helper' : undefined}
                    className={`w-full px-4 py-3 pr-11 border-2 rounded-xl text-right focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.fullName
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : validationStatus.fullName === 'valid'
                        ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
                        : 'border-gray-200 focus:border-olive focus:ring-olive/20'
                    }`}
                    placeholder="הזן שם מלא"
                  />
                  {validationStatus.fullName === 'valid' && (
                    <motion.div
                      initial={{ scale: 0, x: 10 }}
                      animate={{ scale: 1, x: 0 }}
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                  )}
                  {errors.fullName && (
                    <motion.div
                      initial={{ scale: 0, x: -10 }}
                      animate={{ scale: 1, x: 0 }}
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                </div>
                <AnimatePresence mode="wait">
                  {errors.fullName && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      id="fullName-error"
                      className="text-red-500 text-sm mt-1 text-right flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.fullName}
                    </motion.p>
                  )}
                  {!errors.fullName && focusedField === 'fullName' && (
                    <motion.p
                      key="helper"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      id="fullName-helper"
                      className="text-gray-500 text-sm mt-1 text-right"
                    >
                      💡 {helperTexts.fullName}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-right text-gray-700 font-semibold mb-2">
                  טלפון <span className="text-coral">*</span>
                </label>
                <div className="relative">
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : focusedField === 'phone' ? 'phone-helper' : undefined}
                    className={`w-full px-4 py-3 pr-11 border-2 rounded-xl text-right focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.phone
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : validationStatus.phone === 'valid'
                        ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
                        : 'border-gray-200 focus:border-olive focus:ring-olive/20'
                    }`}
                    placeholder="050-1234567"
                  />
                  {validationStatus.phone === 'valid' && (
                    <motion.div
                      initial={{ scale: 0, x: 10 }}
                      animate={{ scale: 1, x: 0 }}
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                  )}
                  {errors.phone && (
                    <motion.div
                      initial={{ scale: 0, x: -10 }}
                      animate={{ scale: 1, x: 0 }}
                      className="absolute left-3 top-1/2 -translate-y-1/2"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                </div>
                <AnimatePresence mode="wait">
                  {errors.phone && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      id="phone-error"
                      className="text-red-500 text-sm mt-1 text-right flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </motion.p>
                  )}
                  {!errors.phone && focusedField === 'phone' && (
                    <motion.p
                      key="helper"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      id="phone-helper"
                      className="text-gray-500 text-sm mt-1 text-right"
                    >
                      💡 {helperTexts.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-right text-gray-700 font-semibold mb-2">
                  דואר אלקטרוני <span className="text-coral">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : focusedField === 'email' ? 'email-helper' : undefined}
                    className={`w-full px-4 py-3 pl-11 border-2 rounded-xl text-left focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                        : validationStatus.email === 'valid'
                        ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
                        : 'border-gray-200 focus:border-olive focus:ring-olive/20'
                    }`}
                    placeholder="email@example.com"
                    dir="ltr"
                  />
                  {validationStatus.email === 'validating' && (
                    <motion.div
                      initial={{ scale: 0, x: -10 }}
                      animate={{ scale: 1, x: 0 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <Loader2 className="w-5 h-5 text-olive animate-spin" />
                    </motion.div>
                  )}
                  {validationStatus.email === 'valid' && (
                    <motion.div
                      initial={{ scale: 0, x: -10 }}
                      animate={{ scale: 1, x: 0 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                  )}
                  {errors.email && (
                    <motion.div
                      initial={{ scale: 0, x: -10 }}
                      animate={{ scale: 1, x: 0 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                </div>
                <AnimatePresence mode="wait">
                  {errors.email && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      id="email-error"
                      className="text-red-500 text-sm mt-1 text-right flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </motion.p>
                  )}
                  {!errors.email && focusedField === 'email' && (
                    <motion.p
                      key="helper"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      id="email-helper"
                      className="text-gray-500 text-sm mt-1 text-right"
                    >
                      💡 {helperTexts.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* File Upload with Drag & Drop */}
              <div>
                <label htmlFor="file" className="block text-right text-gray-700 font-semibold mb-2">
                  טופס 3010 (אישור משרת מילואים) <span className="text-coral">*</span>
                </label>
                <div 
                  className="relative"
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    onFocus={() => handleFocus('file')}
                    onBlur={() => setFocusedField(null)}
                    accept=".pdf,.jpg,.jpeg,.png,image/jpeg,image/png,application/pdf"
                    className="sr-only"
                    disabled={isSubmitting}
                    tabIndex={0}
                    aria-invalid={errors.file ? 'true' : 'false'}
                    aria-describedby={errors.file ? 'file-error' : focusedField === 'file' ? 'file-helper' : undefined}
                  />
                  <label
                    htmlFor="file"
                    tabIndex={-1}
                    className={`flex flex-col md:flex-row items-center justify-between w-full px-4 py-4 md:py-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      isDragging
                        ? 'border-olive bg-olive/10 scale-[1.02]'
                        : errors.file
                        ? 'border-red-300 hover:border-red-500'
                        : validationStatus.file === 'valid'
                        ? 'border-green-300 bg-green-50'
                        : fileName
                        ? 'border-olive bg-olive/5'
                        : focusedField === 'file'
                        ? 'border-olive ring-2 ring-olive/20'
                        : 'border-gray-200 hover:border-olive'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center gap-3 mb-2 md:mb-0 flex-1">
                      {validationStatus.file === 'valid' ? (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : fileName ? (
                        <FileText className="w-5 h-5 text-olive flex-shrink-0" />
                      ) : (
                        <Upload className={`w-5 h-5 flex-shrink-0 ${isDragging ? 'text-olive' : 'text-gray-400'}`} />
                      )}
                      <div className="flex flex-col items-start flex-1 min-w-0">
                        <span className={`truncate max-w-full ${validationStatus.file === 'valid' ? 'text-green-600 font-medium' : fileName ? 'text-olive font-medium' : isDragging ? 'text-olive font-medium' : 'text-gray-500'}`}>
                          {isDragging ? 'שחרר כאן...' : fileName || 'בחר קובץ או גרור לכאן'}
                        </span>
                        {fileName && fileSize > 0 && (
                          <span className="text-xs text-gray-400">
                            {(fileSize / 1024 / 1024).toFixed(2)} MB
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Remove file button */}
                    {fileName && !isSubmitting && (
                      <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        type="button"
                        onClick={handleRemoveFile}
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors duration-200 mb-2 md:mb-0 md:ml-3"
                        aria-label="הסר קובץ"
                        title="הסר קובץ"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </motion.button>
                    )}
                    
                    {!fileName && (
                      <span className="text-xs text-gray-400 text-center md:text-left">PDF, JPG, PNG (מקס 5MB)</span>
                    )}
                  </label>
                </div>
                <AnimatePresence mode="wait">
                  {errors.file && (
                    <motion.p
                      key="error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      id="file-error"
                      className="text-red-500 text-sm mt-1 text-right flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.file}
                    </motion.p>
                  )}
                  {!errors.file && focusedField === 'file' && (
                    <motion.p
                      key="helper"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      id="file-helper"
                      className="text-gray-500 text-sm mt-1 text-right"
                    >
                      💡 {helperTexts.file}
                    </motion.p>
                  )}
                </AnimatePresence>
                {!errors.file && !focusedField && (
                  <p className="text-xs text-gray-500 mt-2 text-right hidden md:block">
                    💡 ניתן לגרור קובץ לכאן במקום ללחוץ
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <motion.button
                  whileHover={!isSubmitting && isFormValid() ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && isFormValid() ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  style={{ 
                    backgroundColor: isSubmitting ? '#748650' : !isFormValid() ? '#9ca3af' : '#5c6a40',
                    color: '#ffffff',
                    cursor: !isFormValid() || isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                  className={`w-full text-white font-bold text-lg py-4 rounded-xl shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-olive/30 flex items-center justify-center gap-2 ${
                    !isFormValid() || isSubmitting ? 'opacity-60' : 'hover:shadow-2xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin text-white" />
                      <span className="text-white font-bold">שולח...</span>
                    </>
                  ) : (
                    <span className="text-white font-bold">שלח הרשמה</span>
                  )}
                </motion.button>
                
                {/* Form status hint with completion info */}
                <AnimatePresence>
                  {!isFormValid() && !isSubmitting && (() => {
                    const { completed, total } = getCompletedFields();
                    const remaining = total - completed;
                    return (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-xs text-gray-500 text-center mt-2 flex items-center justify-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        {remaining === total 
                          ? 'נא למלא את כל השדות כדי להמשיך'
                          : `נותרו ${remaining} ${remaining === 1 ? 'שדה' : 'שדות'} למילוי`
                        }
                      </motion.p>
                    );
                  })()}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;

