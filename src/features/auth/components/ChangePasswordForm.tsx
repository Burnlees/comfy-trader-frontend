import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ChangePasswordDetails, PasswordValidationValues } from "../authTypes";
import { changeUserPassword, signOutUser } from "../authService";
import PasswordValidation from "./PasswordValidation";
import { passwordInputValidation } from "../inputValidation";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ChangePasswordForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [newPasswordForm, setNewPasswordForm] = useState<ChangePasswordDetails>(
    {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }
  );
  const [passwordValidation, setPasswordValidation] =
    useState<PasswordValidationValues>({
      minLength: false,
      number: false,
      specChar: false,
      upperChar: false,
      lowerChar: false,
    });
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleCurrentPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setNewPasswordForm((currPasswordForm) => {
      return { ...currPasswordForm, currentPassword: event.target.value };
    });
  };

  const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPasswordForm((currPasswordForm) => {
      return { ...currPasswordForm, newPassword: event.target.value };
    });
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setNewPasswordForm((currPasswordForm) => {
      return { ...currPasswordForm, confirmPassword: event.target.value };
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      if (newPasswordForm.newPassword !== newPasswordForm.confirmPassword) {
        setErrorMessage("Passwords do not match");
        throw new Error("Passwords do not match");
      }
      await changeUserPassword(newPasswordForm);
      await signOutUser();
      navigate("/access");
      toast({
        title: "Password Change Successful",
        description: "Please sign in",
      });
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  useEffect(() => {
    passwordInputValidation(newPasswordForm.newPassword, setPasswordValidation);
  }, [newPasswordForm.newPassword]);

  useEffect(() => {
    if (!Object.values(passwordValidation).includes(false)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [passwordValidation]);

  return (
    <div>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <Input
          type="password"
          placeholder="Current Password"
          value={newPasswordForm.currentPassword}
          onChange={handleCurrentPasswordChange}
        />
        <Input
          type="password"
          placeholder="New Password"
          value={newPasswordForm.newPassword}
          onChange={handleNewPasswordChange}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={newPasswordForm.confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <p className="text-red-600 text-xs text-center">
          {errorMessage ? errorMessage : null}
        </p>
        <Button disabled={disabled} className="w-fit ml-auto" size={"sm"}>
          Submit
        </Button>
      </form>
      <div className="mx-auto w-fit">
        <PasswordValidation passwordValidation={passwordValidation} />
      </div>
    </div>
  );
};

export default ChangePasswordForm;
