import {useEffect, useState} from 'react';
import {CheckInterface} from '../../view/components/organisms/Forms/MixModifyUserForm/types';
import formatRoles from '../../../infrastructure/view/components/atoms/InputFieldForm/types';
import {Profile} from '../../../domain/models/Profile';
import provinceLasPalmas from '../../../infrastructure/assets/Las_Palmas.json';
import provinceTenerife from '../../../infrastructure/assets/Tenerife.json';

export const useCorrectFormat = () => {
    const [data, setData] = useState<Profile>({
        name: '',
        surname: '',
        birthDate: '',
        phoneNumber: '',
        email: '',
        province: '',
        zipCode: '',
        town: '',
        address: '',
        island: '',
        twitter: '',
        instagram: '',
        linkedin: '',
        additionalInformation: '',
    });
    const [check, setCheck] = useState<CheckInterface>({
        name: '',
        surname: '',
        birthDate: '',
        phoneNumber: '',
        email: '',
        province: '',
        zipCode: '',
        town: '',
        address: '',
        island: '',
        twitter: '',
        instagram: '',
        linkedin: '',
        additionalInformation: '',
    });

    const [inputValue, setInputValue] = useState<string>();
    const [nameEvent, setNameEvent] = useState<string>();
    const [town, setTown] = useState<string[]>([]);
    const calculateAge = (ageDate: Date) => {
        const diffAge = Date.now() - ageDate.getTime();
        const ageCheck = new Date(diffAge);
        return Math.abs(ageCheck.getUTCFullYear() - 1970);
    };

    const province = {
        35: 'Las Palmas',
        38: 'Santa Cruz de Tenerife',
    };

    useEffect(() => {
        const minLength: number = 3;
        const maxLength: number = 30;
        if (inputValue) {
            switch (nameEvent) {
                case 'email':
                    if (formatRoles.regexEmail.test(inputValue)) {
                        setCheck({...check, email: 'correct'});
                        setData({...data, email: inputValue});
                    } else {
                        setCheck({...check, email: 'incorrect'});
                    }
                    break;
                case 'name':
                    if (
                        formatRoles.regexOnlyText.test(inputValue) &&
                        inputValue.length >= minLength &&
                        inputValue.length <= maxLength
                    ) {
                        setCheck({...check, name: 'correct'});
                        setData({...data, name: inputValue});
                    } else {
                        setCheck({...check, name: 'incorrect'});
                    }
                    break;
                case 'surname':
                    if (
                        formatRoles.regexOnlyText.test(inputValue) &&
                        inputValue.length >= minLength &&
                        inputValue.length <= maxLength
                    ) {
                        setCheck({...check, surname: 'correct'});
                        setData({...data, surname: inputValue});
                    } else {
                        setCheck({...check, surname: 'incorrect'});
                    }
                    break;
                case 'birthday':
                    const age = new Date(inputValue);

                    if (formatRoles.regexDate.test(inputValue) && calculateAge(age) >= 16) {
                        setCheck({...check, birthDate: 'correct'});
                        setData({...data, birthDate: inputValue});
                    } else {
                        setCheck({...check, birthDate: 'incorrect'});
                    }
                    break;
                case 'phoneNumber':
                    if (formatRoles.regexPhone.test(inputValue)) {
                        setCheck({...check, phoneNumber: 'correct'});
                        setData({...data, phoneNumber: inputValue});
                    } else {
                        setCheck({...check, phoneNumber: 'incorrect'});
                    }
                    break;
                case 'zipcode':
                    if (formatRoles.regexZipcode.test(inputValue)) {
                        setCheck({...check, zipCode: 'correct'});
                        setData({...data, zipCode: inputValue});
                    } else {
                        setCheck({...check, zipCode: 'incorrect'});
                    }
                    break;
                case 'town':
                    if (formatRoles.regexOnlyText.test(inputValue)) {
                        setCheck({...check, town: 'correct'});
                        setData({...data, town: inputValue});
                    } else {
                        setCheck({...check, town: 'incorrect'});
                    }
                    break;
                case 'address':
                    if (formatRoles.regexAddress.test(inputValue)) {
                        setCheck({...check, address: 'correct'});
                        setData({...data, address: inputValue});
                    } else {
                        setCheck({...check, address: 'incorrect'});
                    }
                    break;
                case 'twitter':
                    if (formatRoles.regexTwitter.test(inputValue)) {
                        setCheck({...check, twitter: 'correct'});
                        setData({...data, twitter: inputValue});
                    } else {
                        setCheck({...check, twitter: 'incorrect'});
                    }
                    break;
                case 'instagram':
                    if (formatRoles.regexInstagram.test(inputValue)) {
                        setCheck({...check, instagram: 'correct'});
                        setData({...data, instagram: inputValue});
                    } else {
                        setCheck({...check, instagram: 'incorrect'});
                    }
                    break;
                case 'linkedin':
                    if (formatRoles.regexLinkedin.test(inputValue)) {
                        setCheck({...check, linkedin: 'correct'});
                        setData({...data, linkedin: inputValue});
                    } else {
                        setCheck({...check, linkedin: 'incorrect'});
                    }
                    break;
                case 'information':
                    if (formatRoles.regexOnlyText.test(inputValue) && inputValue.length <= 500) {
                        setCheck({...check, additionalInformation: 'correct'});
                        setData({...data, additionalInformation: inputValue});
                    } else {
                        setCheck({...check, additionalInformation: 'incorrect'});
                    }
                    break;
            }
        }
    }, [inputValue, nameEvent]);
    const formatString = (name: string) => {
        let correctFormatName: string = '';
        const whiteSpace = ' ';
        let searchBlank = name.indexOf(' ');
        let searchBlankFromLast = name.lastIndexOf(' ');
        let firstSubstr: string;
        let secondSubstr: string;
        let thirdSubstr: string;
        const searchFirstParenthesis = name.indexOf('(');
        const searchSecondParenthesis = name.indexOf(')');
        const searchDash = name.indexOf('-');


        if (searchBlank === searchBlankFromLast && searchBlank !== -1) {

            if (searchFirstParenthesis !== searchSecondParenthesis && searchFirstParenthesis !== -1) {
                correctFormatName = name.substring(searchFirstParenthesis + 1, searchFirstParenthesis + 2).toUpperCase() +
                    name.substring(searchFirstParenthesis + 2, searchSecondParenthesis) + whiteSpace + name.substring(0, 1).toUpperCase() +
                    name.substring(1, searchFirstParenthesis - 1);
            } else {
                correctFormatName = name.substring(0, 1).toUpperCase() + name.substring(1, searchBlank).toLowerCase()
                    + name.substring(searchBlank, searchBlank + 2).toUpperCase()
                    + name.substring(searchBlank + 2).toLowerCase();
            }

        } else if (searchBlank !== searchBlankFromLast && searchBlank !== -1) {
            firstSubstr = name.substring(0, searchBlank);
            secondSubstr = name.substring(searchBlankFromLast);
            thirdSubstr = name.substring(searchBlank, searchBlankFromLast);
            searchBlank = thirdSubstr.indexOf(' ');
            searchBlankFromLast = thirdSubstr.lastIndexOf(' ');

            if (searchBlank === searchBlankFromLast && thirdSubstr.substring(1).startsWith('d')) {
                correctFormatName = firstSubstr.substring(0, 1).toUpperCase() + firstSubstr.substring(1) + thirdSubstr + secondSubstr.substring(0, 2).toUpperCase() + secondSubstr.substring(2);

            } else if (!thirdSubstr.substring(1).startsWith('d')) {
                correctFormatName = firstSubstr.substring(0, 1).toUpperCase() + firstSubstr.substring(1) + thirdSubstr.substring(0, 2).toUpperCase()
                    + thirdSubstr.substring(2) + secondSubstr.substring(0, 2).toUpperCase() + secondSubstr.substring(2);

            }

        } else {
            if (searchDash !== -1) {
                correctFormatName = name.substring(0, 1).toUpperCase() + name.substring(1, searchDash) + name.substring(searchDash, searchDash + 1) +
                    name.substring(searchDash + 1, searchDash + 2).toUpperCase() + name.substring(searchDash + 2);

            } else {
                correctFormatName = name.substring(0, 1).toUpperCase() + name.substring(1);

            }
        }
        return correctFormatName;
    };
    useEffect(() => {
        let islandCorrectNameFormat: string;
        if (data.zipCode.startsWith('35')) {
            const items = provinceLasPalmas.filter(
                (postalCode) => postalCode.postal_code === data.zipCode,
            );

            items.map((names) => {
                if (names.island) {
                    const [{island: islandName}] = items;

                    islandCorrectNameFormat = formatString(islandName.toLowerCase());
                    setData({
                        ...data,
                        province: province['35'],
                        island: islandCorrectNameFormat,
                    });

                    const towns = items.map((townName) =>formatString(townName.population_name.toLowerCase()));

                    setTown(towns);
                }
            });


        } else if (data.zipCode.startsWith('38')) {
            const items = provinceTenerife.filter(
                (postalCode) => postalCode.postal_code === data.zipCode,
            );

            items.map((names) => {
                if (names.island) {
                    const [{island: islandName}] = items;
                    islandCorrectNameFormat = formatString(islandName.toLowerCase());
                    setData({
                        ...data,
                        province: province['38'],
                        island: islandCorrectNameFormat,
                    });
                    const towns = items.map((townName) =>formatString(townName.population_name.toLowerCase()));
                    setTown(towns);
                }
            });


        }
    }, [data.zipCode]);


    return {check, data, town, setInputValue, setNameEvent};
};
