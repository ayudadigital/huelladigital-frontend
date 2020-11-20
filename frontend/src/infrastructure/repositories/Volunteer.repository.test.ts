import { volunteerRepository } from './Volunteer.repository';
import { http } from '../http/http';
import { VolunteerCredentialsDTO } from '../http/dtos/CredentialsDTO';
import { mockComponent } from 'react-dom/test-utils';

describe('volunteerRepository', () => {
  let spyFunction: jest.SpyInstance;
  beforeEach(() => {
    spyFunction = jest.spyOn(global, 'fetch');
  });
  it('should try to login with an http post', () => {
    const credentialsDto: VolunteerCredentialsDTO = {
      email: 'example@example.com',
      password: 'example',
    };
    volunteerRepository.login(credentialsDto);
    expect(spyFunction).toBeCalled();
  });
  it('should try to register with an http post', () => {
    const credentialsDto: VolunteerCredentialsDTO = {
      email: 'example@example.com',
      password: 'example',
    };
    volunteerRepository.register(credentialsDto);
    expect(spyFunction).toBeCalled();
  });
});
