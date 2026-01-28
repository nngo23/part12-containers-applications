import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL || "/api";

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

export default { login };
