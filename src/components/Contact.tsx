import React, { useState, useRef } from 'react';
import { Mail, Send, Check, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="section-container bg-light-200 dark:bg-dark-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Contact</h2>
        
        <div className="bg-white dark:bg-dark-700 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-primary-700 dark:bg-primary-900 text-white p-8">
              <div className="flex items-center mb-6">
                <Mail className="h-6 w-6 mr-2" />
                <h3 className="text-xl font-semibold">Contactez-moi</h3>
              </div>
              
              <p className="mb-8">
                N'hésitez pas à me contacter pour toute question, opportunité de collaboration
                ou simplement pour échanger sur la cybersécurité et les technologies.
              </p>
              
              <div className="mb-4">
                <p className="font-medium">Localisation:</p>
                <p>Rabat - Salé, Maroc</p>
              </div>
              
              <div className="mb-4">
                <p className="font-medium">Email:</p>
                <a 
                  href="mailto:aarabyassine30@gmail.com"
                  className="hover:underline"
                >
                  aarabyassine30@gmail.com
                </a>
              </div>
              
              <div>
                <p className="font-medium">Téléphone:</p>
                <a 
                  href="tel:+212763952285"
                  className="hover:underline"
                >
                  +212 763 952 285
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-dark-800 dark:text-light-100">
                Envoyez un message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label 
                    htmlFor="name" 
                    className="block text-dark-700 dark:text-light-300 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-field ${errors.name ? 'border-error' : ''}`}
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="mt-1 text-error text-sm">{errors.name}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="email" 
                    className="block text-dark-700 dark:text-light-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-error' : ''}`}
                    placeholder="Votre email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-error text-sm">{errors.email}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className="block text-dark-700 dark:text-light-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`input-field min-h-[120px] ${errors.message ? 'border-error' : ''}`}
                    placeholder="Votre message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-error text-sm">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2\" viewBox="0 0 24 24">
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : submitStatus === 'success' ? (
                    <span className="flex items-center">
                      <Check className="h-5 w-5 mr-2" />
                      Message envoyé !
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer
                    </span>
                  )}
                </button>
                
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 bg-error/10 text-error rounded-md flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <p>Une erreur est survenue. Veuillez réessayer plus tard.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;