export const isZipCode = (zipCode: string) => new RegExp(/\d{5}/).test(zipCode);
