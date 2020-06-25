type typeRoute = {
  home: string;
  email: { confirmation: string; resendConfirmation: string };
  API: { volunteers: { register: string } };
};

const V1 = 'v1';
const ENDPOINT_VOLUNTEERS = `/api/${V1}/volunteers`;

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
  },
};
