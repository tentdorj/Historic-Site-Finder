import axios from "axios";
const BASE_URL = "https://localhost:3001"; // Your API base URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Adjust timeout as needed
  headers: {
    "Content-Type": "application/json",
    // Add any other common headers here
  },
});

const api = {
  login: async (email, pw) => {
    try {
    } catch (error) {
      throw error;
    }
  },
  getSites: async () => {
    try {
      const response = await axiosInstance.get("/sites");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Define other API functions here
};

export default api;
