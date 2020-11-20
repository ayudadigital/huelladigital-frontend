import { volunteerRepository } from './Volunteer.repository';
import { http } from '../http/http';
import { VolunteerCredentialsDTO } from '../http/dtos/CredentialsDTO';
import { mockComponent } from 'react-dom/test-utils';
import { ROUTE } from '../http/routes';
import { BASE } from '../../infrastructure/base';

describe('volunteerRepository', () => {
  let spyFunction: jest.SpyInstance;
  beforeEach(() => {
    spyFunction = jest.spyOn(http, 'post');
  });
  it('should try to login with an http post', () => {
    const credentialsDto: VolunteerCredentialsDTO = {
      email: 'example@example.com',
      password: 'example',
    };
    volunteerRepository.login(credentialsDto);
    expect(spyFunction).toBeCalledWith(
      `${BASE.API}${ROUTE.API.volunteers.login}`,
      JSON.stringify(credentialsDto),
    );
  });
  it('should try to register with an http post', () => {
    const credentialsDto: VolunteerCredentialsDTO = {
      email: 'example@example.com',
      password: 'example',
    };
    volunteerRepository.register(credentialsDto);
    expect(spyFunction).toBeCalledWith(
      `${BASE.API}${ROUTE.API.volunteers.login}`,
      JSON.stringify(credentialsDto),
    );
  });
});
