import { stateValidateTypes } from '../../../atoms/InputFieldForm/types';

export interface CheckInterface {
  name: stateValidateTypes;
  surname: stateValidateTypes;
  birthDate: stateValidateTypes;
  phoneNumber: stateValidateTypes;
  email: stateValidateTypes;
  province: stateValidateTypes;
  zipCode: stateValidateTypes;
  town: stateValidateTypes;
  address: stateValidateTypes;
  island: stateValidateTypes;
  twitter: stateValidateTypes;
  instagram: stateValidateTypes;
  linkedin: stateValidateTypes;
  additionalInformation: stateValidateTypes;
}

const formatRoles = {
  regexPhone: new RegExp(/[+][0-9]{1,3}\s\d+$/),
  regexEmail: new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  ),
  regexOnlyText: new RegExp(/^[a-zA-Z]+/),
  regexDate: new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/),
  regexTwitter: new RegExp(/(https):\/\/(twitter)\.(com)\/[-a-zA-Z0-9+&@#%=~_|]+/),
  regexInstagram: new RegExp(/(https):\/\/(instagram)\.(com)\/[-a-zA-Z0-9+&@#%=~_|]+/),
  regexLinkedin: new RegExp(
    /(https):\/\/(www\.)(linkedin)\.(com)\/(in)\/[-a-zA-Z0-9+&@#%=~_|]+/,
  ),
  regexZipcode: new RegExp(/\d{5}/),
  regexAddress: new RegExp(/^[a-z A-Z]+\s[0-9]+$/),
};

export default formatRoles;
