type typeRoute = {
  home: string;
  email: { confirmation: string; resendConfirmation: string };
  loginRegister: string;
  faq: string;
  cookiesPolicy: string;
  legalAdvice: string;
  API: {
    volunteers: {
      register: string;
      login: string;
      uploadCv: string;
      uploadPhoto: string;
      profile: string;
    };
    email: { resendConfirmation: string; confirmEmail: (hash: string) => string };
    proposals: {
      register: string;
      fetchProposal: (id: number) => string;
      joinProposal: (id: number) => string;
      registerAsReviser: string;
      fetchListOfProposals: (page: number, size: number) => string;
      fetchListOfProposalsAsReviser: (page: number, size: number) => string;
      submitRevision: (id: number) => string;
      fetchVolunteers: (id: number) => string;
      fetchProposalsAndVolunteers: (id: number) => string;
      cancelProposal: (id: number) => string;
      changeStatusOfVolunteerInProposal: string;
    };
    organizations: {
      register: string;
      delete: (id: number) => string;
      registerAsReviser: string;
      registerEsalEmployee: string;
      duda: (id: number) => string;
    };
    tokens: { refresh: string };
    unLoggedUsers: {
      sendEmailForRecoveringPassword: string;
      updatePassword: (hash: string) => string;
    };
    users: {
      updatePassword: string;
    };
  };
  organizations: {
    register: string;
  };
  proposals: { list: string; register: string; details: string };
  volunteers: { profile: string };
};

const V1 = 'v1';
const ENDPOINT_VOLUNTEERS = `/api/${V1}/volunteers`;
const ENDPOINT_EMAILCONFIRMATION = `/api/${V1}/email-confirmation`;
const ENDPOINT_AUTHENTICATION = `/api/${V1}/authentication`;
const ENDPOINT_PROPOSALS = `/api/${V1}/proposals`;
const ENDPOINT_ORGANIZATIONS = `api/${V1}/esal`;
const ENDPOINT_CONTACTPERSON = `api/${V1}/contactperson`;
const ENDPOINT_RECOVERYPASSWORD = `api/${V1}/handling-password`;

export const ROUTE: typeRoute = {
         proposals: {
           details: '/proposal-details',
           list: '/propopsals-list',
           register: '/proposal-register',
         },
         organizations: {
           register: '/organization-register',
         },
         home: '/',
         email: {
           confirmation: '/email-confirmation-register',
           resendConfirmation: '/resend-email-confirmation',
         },
         cookiesPolicy: '/cookies-policy',
         loginRegister: '/login-register',
         faq: '/frequently-asked-questions',
         legalAdvice: '/legal-advice',
         volunteers: {
           profile: '/profile',
         },
         API: {
           volunteers: {
             register: `${ENDPOINT_VOLUNTEERS}`,
             login: `${ENDPOINT_AUTHENTICATION}/login`,
             uploadCv: `${ENDPOINT_VOLUNTEERS}/profile/cv`,
             uploadPhoto: `${ENDPOINT_VOLUNTEERS}/profile/photo`,
             profile: `${ENDPOINT_VOLUNTEERS}/profile`,
           },
           email: {
             resendConfirmation: `${ENDPOINT_EMAILCONFIRMATION}/resend-email-confirmation`,
             confirmEmail: (hash: string) => `${ENDPOINT_EMAILCONFIRMATION}/${hash}`,
           },
           proposals: {
             register: `${ENDPOINT_PROPOSALS}`,
             fetchProposal: (id: number) => `${ENDPOINT_PROPOSALS}/${id}`,
             joinProposal: (id: number) => `${ENDPOINT_PROPOSALS}/${id}/join`,
             registerAsReviser: `${ENDPOINT_PROPOSALS}/reviser`,
             fetchListOfProposals: (page: number, size: number) =>
               `${ENDPOINT_PROPOSALS}/${page}/${size}`,
             fetchListOfProposalsAsReviser: (page: number, size: number) =>
               `${ENDPOINT_PROPOSALS}/${page}/${size}/reviser`,
             submitRevision: (id: number) => `${ENDPOINT_PROPOSALS}/revision/${id}`,
             fetchVolunteers: (id: number) => `${ENDPOINT_PROPOSALS}/${id}/volunteers`,
             fetchProposalsAndVolunteers: (id: number) =>
               `${ENDPOINT_PROPOSALS}/${id}/proposal`,
             cancelProposal: (id: number) => `${ENDPOINT_PROPOSALS}/${id}/cancel`,
             changeStatusOfVolunteerInProposal: `${ENDPOINT_PROPOSALS}/changeStatusVolunteerProposal`,
           },
           organizations: {
             register: `${ENDPOINT_ORGANIZATIONS}`,
             delete: (id: number) => `${ENDPOINT_ORGANIZATIONS}/${id}`,
             registerAsReviser: `${ENDPOINT_ORGANIZATIONS}/reviser`,
             registerEsalEmployee: `${ENDPOINT_CONTACTPERSON}`,
             duda: (id: number) => `${ENDPOINT_CONTACTPERSON}/${id}`,
           },
           unLoggedUsers: {
             sendEmailForRecoveringPassword: `${ENDPOINT_EMAILCONFIRMATION}/sendRecoveryPasswordEmail`,
             updatePassword: (hash: string) =>
               `${ENDPOINT_EMAILCONFIRMATION}/changePassword/${hash}`,
           },
           users: {
             updatePassword: `${ENDPOINT_EMAILCONFIRMATION}/editPassword`,
           },
           tokens: { refresh: `/api/${V1}/refresh` },
         },
       };
