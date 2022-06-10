import axios from 'axios';
// local
import {TOKEN} from '../common/const/auth.const';
import {getStorage} from '../common/services/storage.service';

const baseURL = 'https://frontend-blog-be.herokuapp.com/';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(async (request: any) => {
  request.headers = {
    ...request.headers,
    token: await getStorage(TOKEN),
  };
  return request;
});

axiosInstance.interceptors.response.use(
  (response: any) => response,
  ({response}: any) => {
    const {status} = response || {};
    if (status === 401 || status === 403) {
      // error page
      console.log(404);
    }

    return Promise.reject(response);
  },
);

export default axiosInstance;
