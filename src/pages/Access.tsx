import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "@/components/ui/toaster";
import { ConfirmEmailForm } from "@/features/auth/components/ConfirmEmailForm";
import SignInForm from "@/features/auth/components/SignInForm";
import { SignUpForm } from "@/features/auth/components/SignUpForm";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export type codeDestination = {
  email: string;
  user: string;
};

const Access = () => {
  const { toast } = useToast();
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [codeDestination, setCodeDestination] = useState<codeDestination>({
    email: "",
    user: "",
  });

  return (
    <div className="h-lvh flex justify-center items-center">
      <Tabs defaultValue="register" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="register" className="">
          {!signUpSuccess ? (
            <SignUpForm
              setCodeDestination={setCodeDestination}
              setSignUpSuccess={setSignUpSuccess}
            />
          ) : (
            <ConfirmEmailForm codeDestination={codeDestination} />
          )}
        </TabsContent>
        <TabsContent value="sign-in">
          <SignInForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Access;
