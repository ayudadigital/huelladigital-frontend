export const isPassword = (password: string) =>
  new RegExp(/^[a-zA-Z0-9.,:+`%!@#$^'?(){}~_/\-\[\]]*$/).test(password);
