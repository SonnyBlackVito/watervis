import { api } from '@/lib/axios';

export const contactAPI = {
  sendContact: async (contactData) => {
    try {
      const response = await api.post('/contacts', contactData);
      return response.data;
    } catch (error) {
      console.error('Error sending contact:', error);
      throw error;
    }
  },
};

export const contactFormTypes = {
  firstName: 'string',
  lastName: 'string', 
  email: 'string',
  phone: 'string',
  message: 'string'
};

export const validateContactForm = (data) => {
  const errors = {};
  
  if (!data.firstName?.trim()) {
    errors.firstName = 'First name is required';
  }
  
  if (!data.lastName?.trim()) {
    errors.lastName = 'Last name is required';
  }
  
  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }
  
  if (!data.message?.trim()) {
    errors.message = 'Message is required';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
