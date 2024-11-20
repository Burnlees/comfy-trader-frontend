import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { type ChangeEvent, useEffect, useState } from "react";
import { postSignUp } from "../authService";
import { passwordInputValidation } from "../inputValidation";
import { codeDestination } from "@/pages/Access";
import { UserAuthenticationDetails } from "../authTypes";
import PasswordValidation from "./PasswordValidation";

interface SignUpFormProps {
  setCodeDestination: React.Dispatch<React.SetStateAction<codeDestination>>;
  setSignUpSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignUpForm = ({
  setCodeDestination,
  setSignUpSuccess,
}: SignUpFormProps) => {
  const [signUp, setSignUp] = useState<UserAuthenticationDetails>({
    email: "",
    password: "",
  });
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    number: false,
    specChar: false,
    upperChar: false,
    lowerChar: false,
  });
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUp((currSignUp) => {
      return { ...currSignUp, email: event.target.value };
    });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUp((currSignUp) => {
      return { ...currSignUp, password: event.target.value };
    });
  };

  useEffect(() => {
    passwordInputValidation(signUp.password, setPasswordValidation);
  }, [signUp.password]);

  useEffect(() => {
    if (!Object.values(passwordValidation).includes(false)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [passwordValidation]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await postSignUp(signUp);
      setCodeDestination((currDestination: codeDestination) => {
        return {
          ...currDestination,
          email: response.data.signUpData.codeDestination,
          user: signUp.email,
        };
      });
      setSignUpSuccess(() => {
        return true;
      });

      setErrorMessage("");
    } catch (error: any) {
      setErrorMessage(error);
    }
  };

  return (
    <div>
      <Card className="drop-shadow-lg">
        <CardHeader>Sign Up</CardHeader>
        <CardContent className="">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email"
              value={signUp.email}
              onChange={handleEmailChange}
            ></Input>
            <Input
              type="password"
              placeholder="Password"
              value={signUp.password}
              onChange={handlePasswordChange}
            ></Input>
            <Button disabled={disabled} variant={"default"} size={"sm"}>
              Create account
            </Button>
            <CardDescription className="text-red-600 text-xs text-center">
              {errorMessage}
            </CardDescription>
          </form>
          <PasswordValidation passwordValidation={passwordValidation} />
         
        </CardContent>
      </Card>
    </div>
  );
};
