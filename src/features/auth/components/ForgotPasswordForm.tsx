import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { type ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ForgotPasswordFromProps, ResetPasswordDetails } from "../authTypes";
import { passwordInputValidation } from "../inputValidation";
import { resetUserPassword } from "../authService";

const ForgotPasswordForm = ({ setResetSuccess }: ForgotPasswordFromProps) => {
  const [resetPassword, setResetPassword] = useState<ResetPasswordDetails>({
    email: "",
    password: "",
    code: "",
  });
  const [resetPasswordValidation, setResetPasswordValidation] = useState({
    minLength: false,
    number: false,
    specChar: false,
    upperChar: false,
    lowerChar: false,
  });
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setResetPassword((currReset) => {
      return { ...currReset, email: event.target.value };
    });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setResetPassword((currReset) => {
      return { ...currReset, password: event.target.value };
    });
  };

  const handleCodeChange = (newValue: string) => {
    setResetPassword((currReset) => {
      return { ...currReset, code: newValue };
    });
  };

  useEffect(() => {
    passwordInputValidation(resetPassword.password, setResetPasswordValidation);
  }, [resetPassword.password]);

  useEffect(() => {
    if (!Object.values(resetPasswordValidation).includes(false)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [resetPasswordValidation]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const confirmation = await resetUserPassword(resetPassword);
      setResetSuccess(() => {
        return true;
      });
      console.log(confirmation);
    } catch (error: any) {
      setErrorMessage(error);
    }
  };

  return (
    <div>
      <Card className="drop-shadow-lg">
        <CardHeader>Reset Password</CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={resetPassword.email}
              onChange={handleEmailChange}
            />
            <Input
              type="password"
              placeholder="Password"
              value={resetPassword.password}
              onChange={handlePasswordChange}
            />
            <CardDescription>Enter verification code</CardDescription>
            <InputOTP
              maxLength={6}
              value={resetPassword.code}
              onChange={handleCodeChange}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Button disabled={disabled}>Submit</Button>
            <CardDescription className="text-red-600 text-xs text-center">
              {errorMessage}
            </CardDescription>
          </form>
          <div className="p-4">
            <p className="text-sm text-slate-900">
              Password Must Include Atleast:
            </p>
            <ul className="font-light text-sm text-slate-400 p-1 list-disc list-inside">
              <li
                className={
                  resetPasswordValidation.minLength ? "text-green-700" : ""
                }
              >
                8 Characters
              </li>
              <li
                className={
                  resetPasswordValidation.number ? "text-green-700" : ""
                }
              >
                1 Number
              </li>
              <li
                className={
                  resetPasswordValidation.specChar ? "text-green-700" : ""
                }
              >
                1 Special Character
              </li>
              <li
                className={
                  resetPasswordValidation.upperChar ? "text-green-700" : ""
                }
              >
                1 Uppercase Character
              </li>
              <li
                className={
                  resetPasswordValidation.number ? "text-green-700" : ""
                }
              >
                1 Lowercase Character
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
