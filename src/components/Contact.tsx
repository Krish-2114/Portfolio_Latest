import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import type { ContactFormData } from '../types';
import { sendEmail } from '../utils/emailjs';
import { Toast } from './Toast';

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  }>({ show: false, message: '', type: 'info' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    const success = await sendEmail(data);
    if (success) {
      setToast({
        show: true,
        type: 'success',
        message: "Message sent! I'll get back to you soon.",
      });
      reset();
    } else {
      setToast({
        show: true,
        type: 'error',
        message: 'Something went wrong. Please try again.',
      });
    }
    setLoading(false);
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 5000);
  };

  const fieldClass =
    'w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all';

  return (
    <section id="contact" ref={ref} className="section font-inter relative">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="outlined-text text-4xl md:text-6xl text-center mb-4"
      >
        GET IN TOUCH
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-400 mb-12"
      >
        Let&apos;s create something amazing together
      </motion.p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-2xl mx-auto w-full glass rounded-xl p-8"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium mb-2 text-gray-200">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="John Doe"
              className={fieldClass}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium mb-2 text-gray-200">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="john@example.com"
              className={fieldClass}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium mb-2 text-gray-200">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={6}
              placeholder="Tell me about your project..."
              className={`${fieldClass} resize-none`}
              {...register('message', {
                required: 'Message is required',
                minLength: { value: 10, message: 'Min 10 characters' },
              })}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-primary to-secondary py-4 rounded-lg font-bold text-lg text-white hover:shadow-glow-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                  aria-hidden
                />
                SENDING...
              </>
            ) : (
              <>
                <FiSend />
                SEND MESSAGE
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      <AnimatePresence>
        {toast.show && (
          <Toast
            key={toast.message}
            message={toast.message}
            type={toast.type}
            onClose={() => setToast((t) => ({ ...t, show: false }))}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
