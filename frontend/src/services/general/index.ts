import { get } from '../restclient';

export const getGeneralService = async () => {
  try {
    const generalResponse = await get('/general');
    return generalResponse;
  } catch (error) {
    throw error;
  }
};
