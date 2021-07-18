export const isAddress = (address: string) =>
  new RegExp(/^[a-z A-Z]+\s[0-9]+$/).test(address);
