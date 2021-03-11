export interface EsalEmployeeDTO {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export interface EsalDTO {
  name: string;
  description: string;
  website: string;
  registeredEntity: boolean;
  entityType: string;
  privacyPolicy: boolean;
  dataProtectionPolicy: boolean;
  island: string;
  zipCode: string;
}
