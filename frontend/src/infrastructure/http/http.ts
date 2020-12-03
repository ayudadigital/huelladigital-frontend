import { getCookie } from './cookies';

const getHeaders = {
  'Content-Type': 'application/json',
};

const postHeaders = {
  Authorization: 'Bearer ' + getCookie('accessToken'),
  'X-XSRF-TOKEN': '' + getCookie('XSRF-TOKEN'),
};

const get = async (url: string) => {
  const headers = getHeaders;
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers,
  });
  return response;
};

const post = async (
  url: string,
  body: string | FormData,
  contentType = 'application/json',
) => {
  const headers = { ...postHeaders, 'Content-Type': contentType };
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers,
    body,
  });
  return response;
};

export const http = {
  get,
  post,
};
