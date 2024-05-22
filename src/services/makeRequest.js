/* eslint-disable semi */
import { Axios } from '../utils/axios';

export const requestHandler = async (url, method, payload) => {
  try {
    return await Axios[method.toLowerCase()](url, payload);
  } catch (err) {
    return err.response;
  }
};