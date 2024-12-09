import comfy from "@/api";
import {
  ChangePasswordDetails,
  ResetPasswordDetails,
  UserAuthenticationDetails,
} from "./authTypes";

export const postSignUp = async (details: UserAuthenticationDetails) => {
  const { email, password } = details;
  const request = {
    email,
    password,
  };

  try {
    const path = "/api/kraken/register";
    const response = await comfy.post(path, request);
    return response;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const postConfirmUser = async (
  user: string,
  confirmationCode: string
) => {
  const request = {
    email: user,
    code: confirmationCode,
  };
  try {
    const path = "/api/auth/confirm-sign-up";
    await comfy.post(path, request);
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const resendConfirmationCode = async (email: string) => {
  const request = {
    email,
  };
  try {
    const path = "/api/auth/resend-confirmation-code";
    await comfy.post(path, request);
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const userSignIn = async (details: UserAuthenticationDetails) => {
  const { email, password } = details;
  const request = {
    email,
    password,
  };
  try {
    const path = "/api/auth/sign-in";
    const response = await comfy.post(path, request);
    return response.data.authenticationResult;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const sendResetCode = async (email: string) => {
  const request = {
    email,
  };
  try {
    const path = "/api/auth/forgot-password";
    const response = await comfy.post(path, request);
    return response;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const resetUserPassword = async (details: ResetPasswordDetails) => {
  const { email, password, code } = details;
  const request = {
    email,
    password,
    code,
  };
  try {
    const path = "/api/auth/confirm-forgot-password";
    const response = await comfy.post(path, request);
    return response;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const verifyAccessToken = async () => {
  try {
    const path = "/api/auth/verify-access";
    await comfy.post(path);
    return true;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    const path = "/api/auth/sign-out";
    const response = await comfy.post(path);
    return response;
  } catch (error) {
    throw error;
  }
};

export const changeUserPassword = async (
  changePasswordDetails: ChangePasswordDetails
) => {
  const { currentPassword, newPassword } = changePasswordDetails;
  const request = {
    previousPassword: currentPassword,
    proposedPassword: newPassword,
  };
  try {
    const path = "/api/auth/change-password";
    const response = await comfy.patch(path, request);
    return response;
  } catch (error) {
    throw error;
  }
};
