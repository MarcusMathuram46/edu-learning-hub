import axios from "axios";

const instance = axios.create({
  baseURL: "https://edu-learning-hub.onrender.com/api",
  withCredentials: true,
});

export default instance;
