import axios from 'axios';

// Base URL of the API
const BASE_URL = "https://api.themoviedb.org/3/";

// Environment variable for the TMDB token
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// Headers for the API request
const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,  // Fixed typo and added space
};

// Function to fetch data from the API
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, { headers, params });
        return data;  // Return the data received from the API
    } catch (err) {
        console.log(err);
        return err;  // Return the error if the request fails
    }
};
