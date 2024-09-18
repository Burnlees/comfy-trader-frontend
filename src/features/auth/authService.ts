import axios from "axios";
import { ResetPasswordDetails, UserAuthenticationDetails } from "./authTypes";

const comfy = axios.create({
  baseURL: "https://normal-ibex-safely.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postSignUp = async (details: UserAuthenticationDetails) => {
  const { email, password } = details;
  const request = {
    email,
    password,
  };

  try {
    const path = "/register";
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
    const path = "/confirm-sign-up";
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
    const path = "/resend-confirmation-code";
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
    const path = "/sign-in";
    const response = await comfy.post(path, request);
    return response;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const sendResetCode = async (email:string) => {
  const request = {
    email,
  };
  try {
    const path = "/forgot-password";
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
    code
  };
  try {
    const path = "/confirm-forgot-password";
    const response = await comfy.post(path, request);
    return response;
  } catch (error: any) {
    throw error.response.data.message;
  }
};
