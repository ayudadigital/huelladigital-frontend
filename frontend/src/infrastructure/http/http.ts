const headers = {
  'Content-Type': 'application/json',
};

const get = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers,
  });
  return response;
};

const post = async (url: string, body: string) => {
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
