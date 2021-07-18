export const isPhone = (phone: string) => new RegExp(/[+][0-9]{1,3}\s\d+$/).test(phone);
