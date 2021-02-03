import { BASE } from '../base';
import UserProfileDTO from '../http/dtos/UserProfileDTO';
import { http } from '../http/http';
import { ROUTE } from '../http/routes';
import { Profile } from '../../domain/models/Profile';

const profile = () => {
  return http
    .get(`${BASE.API}${ROUTE.API.volunteers.profile}`, true)
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        return response.json().then((res) => {
          return res;
        });
      } else if (response.status === 409) {
        return 409;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const isProfileComplete = (profile: UserProfileDTO) => {
  return (
    !!profile.email &&
    !!profile.name &&
    !!profile.zipCode &&
    !!profile.address &&
    !!profile.birthDate
  );
};

const editProfile = (profile: Profile) => {
  const profileDto: UserProfileDTO = {
    name: profile.name,
    surname: profile.surname,
    birthDate: profile.birthDate,
    phoneNumber: profile.telephoneNumber ? profile.telephoneNumber : '',
    email: profile.email,
    province: profile.province,
    zipCode: profile.zipCode,
    town: profile.town,
    address: profile.address,
    island: profile.island,
    twitter: profile.twitter ? profile.twitter : '',
    instagram: profile.instagram ? profile.instagram : '',
    linkedin: profile.linkedIn ? profile.linkedIn : '',
    additionalInformation: profile.additionalInformation
      ? profile.additionalInformation
      : '',
  };

  http
    .post(
      `${BASE.API}${ROUTE.API.volunteers.profile}`,
      JSON.stringify(profileDto),
      'application/json',
      true,
    )
    .then((response) => {
      console.log(response);
    });
};

export const profileRepository = {
  profile,
  isProfileComplete,
  editProfile,
};
