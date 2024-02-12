import axios from 'axios';

const BASE_URL = 'https://dev.coumo.shop';

// 인증 값 필요없는 경우
export const defaultInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 인증 값 필요, json
const token = 'access token';
export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
});

// 인증 값 필요, FormData
export const formAuthInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: 'Bearer ' + token,
  },
});
