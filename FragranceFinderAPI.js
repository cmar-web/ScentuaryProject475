import axios from 'axios';
import { RAPIDAPI_KEY, RAPIDAPI_HOST } from '@env';

// Create axios instance for making requests to the API
const axiosInstance = axios.create({
  baseURL: 'https://fragrancefinder-api.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': RAPIDAPI_KEY,
    'x-rapidapi-host': RAPIDAPI_HOST,
  },
});

// Search perfumes function
export const searchPerfumes = async (searchText) => {
  try {
    const response = await axiosInstance.get(`/perfumes/search?q=${searchText}`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching perfumes:", error);
    return { hits: [] }; // Return an empty array 
  }
};

// Get dupes
export const getDupes = async (perfumeId) => {
  try {
    const response = await axiosInstance.get(`/dupes/${perfumeId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching similar perfumes:', error);
    throw error; 
  }
};