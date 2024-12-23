import axios from "axios";

const API_URL = "http://localhost:5003/api";

export const fetchChapters = async () => {
  try {
    const response = await axios.get(`${API_URL}/chapters`);
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
};
