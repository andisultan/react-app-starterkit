import Cookies from 'js-cookie'
import axios from 'axios'


export const COOKIES_DATA = {
    TOKEN: '_user_token',
}

export const TOKEN = Cookies.get(COOKIES_DATA.TOKEN)

export const httphHeader = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${TOKEN}`,
  },
}

export const httpHeaderMultipart = {
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Basic ${TOKEN}`,
  },
};

const apiUrl = process.env.REACT_APP_API_URL

// Destroy user's access
const redirectToLogin = () => {
  Cookies.remove(COOKIES_DATA.TOKEN)
  window.location.href = '/login'
};

/**
 * axios instance
 */
let instance = axios.create({
  baseURL: apiUrl,
});

// intercept 401 and 403 status code
instance.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      redirectToLogin();
    }
    return Promise.reject(err);
  }
);

export const http = instance
