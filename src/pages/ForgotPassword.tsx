import ForgotPasswordForm from "@/features/auth/components/ForgotPasswordForm";
import ReturnToAccess from "@/features/auth/components/ReturnToAccess";
import SendResetPasswordCodeForm from "@/features/auth/components/SendResetPasswordCodeForm";
import { useState } from "react";

const ForgotPassword = () => {
  const [codeSent, setCodeSent] = useState<boolean>(false);
  const [resetSuccess, setResetSuccess] = useState<boolean>(false);

  return (
    <div className="h-lvh flex justify-center items-center">
      {!codeSent ? (
        <SendResetPasswordCodeForm setCodeSent={setCodeSent} />
      ) : !resetSuccess ? (
        <ForgotPasswordForm setResetSuccess={setResetSuccess} />
      ) : (
        <ReturnToAccess />
      )}
    </div>
  );
};

export default ForgotPassword;
