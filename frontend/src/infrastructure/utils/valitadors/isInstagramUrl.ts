export const isInstagramUrl = (url: string) =>
  new RegExp(/(https):\/\/(twitter)\.(com)\/[-a-zA-Z0-9+&@#%=~_|]+/).test(url);
