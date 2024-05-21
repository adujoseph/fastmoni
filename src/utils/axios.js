import axios from 'axios';
// import {API_BASE_URL_LIVE, API_BASE_URL_TEST} from '@env';
// import React from 'react';
// import {Alert} from 'react-native';
// import * as RootNavigation from '../../RootNavigation';
// import {dash, errorScreen, login} from './constants';


export const Axios = axios.create({
  baseURL: `https://walktheisle.xyz/api`,
  //timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(
  config => {
    // console.log({config})
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);


Axios.interceptors.response.use(
  config => {
    console.log({config})
    return config;
  },
  error => {
    const {
      response: {data},
    } = error;
    return data;
    // return Promise.reject(data);
  },
);