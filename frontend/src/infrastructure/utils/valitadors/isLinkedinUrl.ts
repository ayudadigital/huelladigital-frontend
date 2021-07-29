export const isLinkedinUrl = (url: string) =>
  new RegExp(/(https):\/\/(www\.)(linkedin)\.(com)\/(in)\/[-a-zA-Z0-9+&@#%=~_|]+/).test(url);
