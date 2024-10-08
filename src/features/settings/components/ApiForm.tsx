import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEvent, useState } from "react";
import { ApiProps } from "../settingsTypes";

const ApiForm = ({ apiKeys, setApiKeys, handleSubmit }: ApiProps) => {
  const handleApiChange = (event: ChangeEvent<HTMLInputElement>) => {
    setApiKeys((currApi) => {
      return { ...currApi, apiKey: event.target.value };
    });
  };

  const handlePrivateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setApiKeys((currApi) => {
      return { ...currApi, privateKey: event.target.value };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="API-Key"
        value={apiKeys.apiKey}
        onChange={handleApiChange}
      ></Input>
      <Input
        type="text"
        placeholder="Private-Key"
        value={apiKeys.privateKey}
        onChange={handlePrivateChange}
      ></Input>
    </form>
  );
};

export default ApiForm;
