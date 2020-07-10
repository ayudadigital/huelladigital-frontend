export function setCookie(key: string, value: any) {
  const expires = new Date();
  const days = 1;
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/;`;
}

function getCookie(key: string) {
  const keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return keyValue ? keyValue[2] : null;
}
