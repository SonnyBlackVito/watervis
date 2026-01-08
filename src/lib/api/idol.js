import { api } from '@/lib/axios';

export const idolAPI = {
  getIdols: async (params) => {
    try {
      const response = await api.get('/idols', { params });
      return response.data;
    } catch (error) {
      console.error('Error get idols:', error);
      throw error;
    }
  },
};