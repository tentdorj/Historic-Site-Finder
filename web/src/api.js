import axios from "axios";
const BASE_URL = "http://localhost:3001/api"; // Your API base URL

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
      const data = { username: email, password: pw };
      const response = await axiosInstance.post("/login", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  signup: async (email, pw, vp) => {
    try {
      const data = { username: email, password: pw, verifyPassword: vp};
      const response = await axiosInstance.post("/signup", data);
      return response.data;
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
