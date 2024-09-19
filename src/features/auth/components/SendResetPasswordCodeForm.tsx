import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ResetPasswordCodeProps } from "../authTypes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type ChangeEvent, FormEvent, useState } from "react";
import { sendResetCode } from "../authService";

const SendResetPasswordCodeForm = ({ setCodeSent }: ResetPasswordCodeProps) => {
  const [resetCodeDestination, setRsetCodeDestination] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRsetCodeDestination(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await sendResetCode(resetCodeDestination);
      setCodeSent(() => {
        return true;
      });
    } catch (error) {}
  };

  return (
    <div>
      <Card className="drop-shadow-lg">
        <CardHeader>Send verfication code</CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={resetCodeDestination}
              onChange={handleEmailChange}
            />
            <Button size={"sm"}>Send</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SendResetPasswordCodeForm;
