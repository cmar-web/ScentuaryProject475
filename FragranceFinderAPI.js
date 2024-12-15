import axios from 'axios';
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from '@env';

// Search perfumes function
export const searchPerfumes = async (searchText) => {
  try {
    console.log('RAPIDAPI_KEY:', RAPIDAPI_KEY || 'undefined');
    console.log('RAPIDAPI_HOST:', RAPIDAPI_HOST || 'undefined');
    console.log('Search Text:', searchText);

    const response = await axios.get(
      `https://fragrancefinder-api.p.rapidapi.com/perfumes/search?q=${encodeURIComponent(searchText)}`,
      {
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
        },
      }
    );
    console.log('API Response (Search Perfumes):', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching perfumes:',
      error.response?.data || error.message || 'Unknown error'
    );
    return { hits: [] }; // Return an empty array if an error occurs
  }
};

// Get dupes function
export const getDupes = async (perfumeId) => {
  try {
    console.log('RAPIDAPI_KEY:', RAPIDAPI_KEY || 'undefined');
    console.log('RAPIDAPI_HOST:', RAPIDAPI_HOST || 'undefined');
    console.log('Perfume ID:', perfumeId);

    const response = await axios.get(
      `https://fragrancefinder-api.p.rapidapi.com/dupes/${perfumeId}`,
      {
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
        },
      }
    );

    console.log('Dupes API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error fetching dupes:',
      error.response?.data || error.message || 'Unknown error'
    );
    throw error;
  }
};
