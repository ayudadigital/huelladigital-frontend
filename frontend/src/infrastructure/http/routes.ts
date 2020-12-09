type typeRoute = {
  home: string;
  email: { confirmation: string; resendConfirmation: string };
  loginRegister: string;
  faq: string;
  API: {
    volunteers: { register: string; login: string };
    email: { resendConfirmation: string };
    convocatories: {
      register: string;
      fetchConvocatory: (id: number) => string;
      joinConvocatory: (id: number) => string;
      registerAsReviser: string;
      fetchListOfConvocatories: (page: number, size: number) => string;
      submitRevision: (id: number) => string;
      fetchVolunteers: (id: number) => string;
      fetchProposalsAndVolunteers: (id: number) => string;
    };
    organizations: {
      register: string;
      delete: (id: number) => string;
      registerAsReviser: string;
    };
    tokens: { refresh: string };
  };
  organizations: {
    register: string;
  };
  convocatories: { list: string; register: string; details: string };
};

const V1 = 'v1';
const ENDPOINT_VOLUNTEERS = `/api/${V1}/volunteers`;
const ENDPOINT_EMAILCONFIRMATION = `/api/${V1}/email-confirmation`;
const ENDPOINT_AUTHENTICATION = `/api/${V1}/authentication`;
const ENDPOINT_PROPOSALS = `/api/${V1}/proposals`;
const ENDPOINT_ORGANIZATIONS = `api/${V1}/esal`;

export const ROUTE: typeRoute = {
  convocatories: {
    details: '/convocatory-details',
    list: '/convocatories-list',
    register: '/convocatory-register',
  },
  organizations: {
    register: '/organization-register',
  },
  home: '/',
  email: {
    confirmation: '/email-confirmation-register',
    resendConfirmation: '/resend-email-confirmation',
  },
  loginRegister: '/login-register',
  faq: '/frequently-asked-questions',
  API: {
    volunteers: {
      register: `${ENDPOINT_VOLUNTEERS}`,
      login: `${ENDPOINT_AUTHENTICATION}/login`,
    },
    email: {
      resendConfirmation: `${ENDPOINT_EMAILCONFIRMATION}/resend-email-confirmation`,
    },
    convocatories: {
      register: `${ENDPOINT_PROPOSALS}`,
      fetchConvocatory: (id: number) => `${ENDPOINT_PROPOSALS}/${id}`,
      joinConvocatory: (id: number) => `${ENDPOINT_PROPOSALS}/${id}/join`,
      registerAsReviser: `${ENDPOINT_PROPOSALS}/reviser`,
      fetchListOfConvocatories: (page: number, size: number) =>
        `${ENDPOINT_PROPOSALS}/${page}/${size}`,
      submitRevision: (id: number) => `${ENDPOINT_PROPOSALS}/revision/${id}`,
      fetchVolunteers: (id: number) => `${ENDPOINT_PROPOSALS}/${id}/volunteers`,
      fetchProposalsAndVolunteers: (id: number) => `${ENDPOINT_PROPOSALS}/${id}/proposal`,
    },
    organizations: {
      register: `${ENDPOINT_ORGANIZATIONS}`,
      delete: (id: number) => `${ENDPOINT_ORGANIZATIONS}/${id}`,
      registerAsReviser: `${ENDPOINT_ORGANIZATIONS}/reviser`,
    },
    tokens: { refresh: `/api/${V1}/refresh` },
  },
};
