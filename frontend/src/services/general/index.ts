import { apiService } from '../restclient';

export const getGeneralService = async () => {
  try {
    const generalResponse = await apiService.get('/general');
    return generalResponse;
  } catch (error) {
    throw error;
  }
};
