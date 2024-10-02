import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { UserAuthenticationDetails } from "../authTypes";
import { userSignIn } from "../authService";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState<UserAuthenticationDetails>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignIn((currSignIn) => {
      return { ...currSignIn, email: event.target.value };
    });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignIn((currSignIn) => {
      return { ...currSignIn, password: event.target.value };
    });
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const tokens = await userSignIn(signIn);
      console.log(tokens, "<<<");

      localStorage.setItem("x-token", tokens.accessToken);
      localStorage.setItem("x-refresh-token", tokens.refreshToken);
      localStorage.setItem("idToken", tokens.idToken)

      navigate("/dashboard");
    } catch (error: any) {
      setErrorMessage(error);
    }
  };

  return (
    <div>
      <Card className="drop-shadow-lg">
        <CardHeader>Sign In</CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Email"
                value={signIn.email}
                onChange={handleEmailChange}
              ></Input>
              <div className="flex flex-col">
                <Input
                  type="password"
                  placeholder="Password"
                  value={signIn.password}
                  onChange={handlePasswordChange}
                ></Input>
                <Button
                  type="button"
                  variant={"link"}
                  size={"sm"}
                  onClick={handleForgotPassword}
                  className="flex justify-end"
                >
                  Forgot Password?
                </Button>
              </div>
            </div>
            <Button type="submit" size={"sm"}>
              Sign In
            </Button>
            <CardDescription className="text-red-600 text-xs text-center">
              {errorMessage}
            </CardDescription>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInForm;
