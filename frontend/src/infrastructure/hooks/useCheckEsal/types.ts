import {stateValidateTypes} from '../../view/components/atoms/InputFieldForm/types';

export interface CheckInterface {
    name: stateValidateTypes;
    description: stateValidateTypes;
    website: stateValidateTypes;
    entityType: stateValidateTypes;
    registeredEntity: stateValidateTypes;
    privacyPolicy: stateValidateTypes;
    dataProtectionPolicy: stateValidateTypes;
    island: stateValidateTypes;
    zipCode: stateValidateTypes;
    nameEmployee: stateValidateTypes;
    surname: stateValidateTypes;
    phoneNumber: stateValidateTypes;
    email: stateValidateTypes;
    repeatEmail: stateValidateTypes;
    password: stateValidateTypes;
}
