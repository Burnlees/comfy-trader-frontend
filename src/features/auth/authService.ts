import axios from "axios";
import { UserSignUpDetails } from "./components/SignUpForm";

const comfy = axios.create({
  baseURL: "https://normal-ibex-safely.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postSignUp = async (details: UserSignUpDetails) => {
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
