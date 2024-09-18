import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { codeDestination } from "@/pages/Access";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { postConfirmUser, resendConfirmationCode } from "../authService";

interface ConfirmEmailProps {
  codeDestination: codeDestination;
}

export const ConfirmEmailForm = ({ codeDestination }: ConfirmEmailProps) => {
  const [verficationSuccess, setverificationSuccess] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmationCode(event.target.value);
  };

  const handleResendCode = async () => {
    try {
      await resendConfirmationCode(codeDestination.user);
    } catch (error: any) {
      setErrorMessage(error);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await postConfirmUser(codeDestination.user, confirmationCode);
      setverificationSuccess(true);
    } catch (error: any) {
      setErrorMessage(error);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>Confirm Email</CardHeader>
        {verficationSuccess ? (
          <CardContent>
            <p className="text-green-600">Email confirmed, please sign in.</p>
          </CardContent>
        ) : (
          <CardContent>
            <CardDescription className="mb-4">
              {codeDestination.email}
            </CardDescription>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <Input
                  type="text"
                  placeholder="Confirmation Code"
                  value={confirmationCode}
                  onChange={handleCodeChange}
                />
                <Button
                  type="button"
                  variant={"link"}
                  size={"sm"}
                  className="flex justify-end"
                  onClick={handleResendCode}
                >
                  Resend Code
                </Button>
              </div>
              <Button type="submit" variant={"default"} size={"sm"}>
                Confirm
              </Button>
              <CardDescription className="text-red-600 text-xs text-center text-wrap">
                {errorMessage}
              </CardDescription>
            </form>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
