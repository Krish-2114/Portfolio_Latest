import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types';

export const sendEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS environment variables are missing.');
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
      },
      publicKey,
    );

    return response.status === 200;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};
