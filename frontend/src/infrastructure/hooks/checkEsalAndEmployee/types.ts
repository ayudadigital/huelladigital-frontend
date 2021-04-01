import { stateValidateTypes } from '../../view/components/atoms/InputFieldForm/types';

export interface CheckInterface {
  name: stateValidateTypes;
  surname: stateValidateTypes;
  phoneNumber: stateValidateTypes;
  email: stateValidateTypes;
  repeatEmail: stateValidateTypes;
  password: stateValidateTypes;
}
