import { getCookie } from './cookies';
const preHeaders = {
  Authorization: 'Bearer ' + getCookie('accessToken'),
  'X-XSRF-TOKEN': '' + getCookie('XSRF-TOKEN'),
};

const get = async (url: string) => {
  const headers = preHeaders;
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
  const headers = { ...preHeaders, 'Content-Type': contentType };
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
