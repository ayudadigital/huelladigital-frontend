type typeRoute = {
  home: string;
  email: { confirmation: string; resendConfirmation: string };
  loginRegister: string;
  API: { volunteers: { register: string, login: string }, email: { resendConfirmation: string } };
  convocatories: { list: string; register: string; details: string };
};

const V1 = 'v1';
const ENDPOINT_VOLUNTEERS = `/api/${V1}/volunteers`;
const ENDPOINT_EMAILCONFIRMATION = `/api/${V1}/email-confirmation`;

export const ROUTE: typeRoute = {
    convocatories: {
      details: '/convocatory-details',
      list: '/convocatories-list',
      register: '/convocatory-register',
    },

  home: '/',
  email: {
    confirmation: '/email-confirmation-register',
    resendConfirmation: '/resend-email-confirmation',
  },
  loginRegister: '/login-register',
  API: {
    volunteers: {
      register: `${ENDPOINT_VOLUNTEERS}/register`,
      login: `${ENDPOINT_VOLUNTEERS}/login`,
    },
    email: {
      resendConfirmation: `${ENDPOINT_EMAILCONFIRMATION}/resend-email-confirmation`,
    },
  },
};
