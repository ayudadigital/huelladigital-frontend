type typeRoute = {
  home: string;
  email: { confirmation: string; resendConfirmation: string };
  API: { volunteers: { register: string }, email: { resendConfirmation: string } };
};

const V1 = 'v1';
const ENDPOINT_VOLUNTEERS = `/api/${V1}/volunteers`;
const ENDPOINT_EMAILCONFIRMATION = `/api/${V1}/email-confirmation`;

export const ROUTE: typeRoute = {
  home: '/',
  email: {
    confirmation: '/email-confirmation-register',
    resendConfirmation: '/resend-email-confirmation',
  },
  API: {
    volunteers: {
      register: `${ENDPOINT_VOLUNTEERS}/register`,
    },
    email: {
      resendConfirmation: `${ENDPOINT_EMAILCONFIRMATION}/resend-email-confirmation`,
    },
  },
};
