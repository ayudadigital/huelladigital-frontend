export type Esal = {
  name: string;
  description: string;
  website: string;
  registeredEntity: boolean;
  entityType: string;
  privacyPolicy: boolean;
  dataProtectionPolicy: boolean;
  island: string;
  zipCode: string;
};

export type EsalEmployee = {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  password: string;
};
