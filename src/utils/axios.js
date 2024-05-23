import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://reqres.in/api',
  //timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );


// Axios.interceptors.response.use(
//   config => {
//     return config;
//   },
//   error => {
//     const {
//       response: {data},
//     } = error;
//     return data;
//   },
// );