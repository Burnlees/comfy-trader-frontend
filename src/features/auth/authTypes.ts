export type UserAuthenticationDetails = {
  email: string;
  password: string;
};

export type ResetPasswordDetails = {
  email: string;
  password: string;
  code: string;
};

export type ResetPasswordCodeProps = {
  setCodeSent: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ForgotPasswordFromProps = {
  setResetSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};
