import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

export const fetchDataFromApi = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, {
      params: {
        hl: 'en',
        gl: 'US'
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
      }
    });

    return response.data;
  } catch (error) {
    // Handle errors, e.g., log them or throw a custom error
    console.error("Error fetching data from the API:", error);
    throw error;
  }
};
