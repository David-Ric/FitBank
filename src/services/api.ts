import axios from "axios";

const api = axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json",
  }
});

export default api;