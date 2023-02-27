import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-sow7.onrender.com',
});