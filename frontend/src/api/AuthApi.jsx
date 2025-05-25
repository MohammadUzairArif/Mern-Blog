import axios from "axios";

// Create Axios Instance
const api = axios.create({
  baseURL:  "http://localhost:5000/api",
});

export const signUp = (data) => {
  return api.post("/auth/signup", data);
};