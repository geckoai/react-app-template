import { AxiosError } from 'axios';
import { HttpClient, HttpException } from '@geckoai/http';
import qs from 'qs';

import { notification } from 'antd';

export const UCenterAPI = HttpClient.create({
  paramsSerializer: (params) =>
    qs.stringify(params, {
      allowDots: true,
      arrayFormat: 'repeat',
    }),
  transformRequest: [
    (data, config) => {
      if (config && config['Content-Type'] === 'application/json') {
        return JSON.stringify(data);
      }
      if (
        data instanceof FormData ||
        Object.prototype.toString.call(data) === '[object FormData]' ||
        Object.prototype.toString.call(data) === '[object String]'
      ) {
        return data;
      }
      return qs.stringify(data, {
        allowDots: true,
        // arrayFormat: 'repeat',
      });
    },
  ],
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

const EXCLUDE_CODE_URLS = [''];

UCenterAPI.interceptors.response.use(
  (res) => {
    const { data, config } = res;
    if (
      !(data instanceof ArrayBuffer) &&
      data.code !== '200' &&
      // Support xml response
      typeof data !== 'string'
    ) {
      if (!EXCLUDE_CODE_URLS.includes(config.url as string)) {
        notification.error({
          message: data.message,
        });

        // switch (data.code) {
        //   case '500':
        //     res.status = 500;
        //     break;
        //   case '403':
        //     res.status = 403;
        //     break;
        //   case '401':
        //     res.status = 401;
        //     break;
        //   default:
        //     res.status = 404;
        // }
        throw new HttpException(res.config, res, data.message);
      }
    }
    return res;
  },
  (err: AxiosError<any>) => {
    if (err.isAxiosError) {
      if (err.response) {
        const { status, statusText, data } = err.response;
        if (status === 401) {
          if (localStorage.getItem('token')) {
            notification.error({
              message: statusText,
              description: err.message,
            });
          }
        } else if (data && data.msg) {
          notification.error({
            message: statusText,
            description: data.msg,
          });
        } else if (statusText) {
          notification.error({
            message: statusText,
            description: err.message,
          });
        }
      }
    }
    return Promise.reject(err);
  }
);
