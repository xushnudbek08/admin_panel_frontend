import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Ensure to set this in your .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

const authFetch = (token: string) => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export { api, authFetch };