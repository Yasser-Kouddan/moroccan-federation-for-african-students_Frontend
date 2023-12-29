import axios from "axios"

const baseURL = "http://127.0.0.1:8000/api";

const API = axios.create({
    baseURL: `${baseURL}`,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

export default API;