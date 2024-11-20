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

export type ChangePasswordDetails = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type PasswordValidationValues = {
  minLength: boolean;
  number: boolean;
  specChar: boolean;
  upperChar: boolean;
  lowerChar: boolean;
};
