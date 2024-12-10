import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ApiForm from "./ApiForm";
import CurrentApi from "./CurrentApi";
import { postApiKeys } from "../settingsService";
import { FormEvent, useState } from "react";
import { ApiKeys } from "../settingsTypes";
import { useUserContext } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const APIManagement = () => {
  const { user } = useUserContext();
  const { toast } = useToast();
  const [apiKeys, setApiKeys] = useState<ApiKeys>({
    username: user?.userId,
    email: user?.email,
    apiKey: "",
    privateKey: "",
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await postApiKeys(apiKeys);
    } catch (error: any) {
      toast({ title: "API Error", description: error.message });
    }
  };

  return (
    <section className="h-full">
      <Card className="h-full overflow-hidden">
        <CardHeader className="">
          <CardTitle>API Management</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 mt-4">
          <CurrentApi />
          <ApiForm
            apiKeys={apiKeys}
            setApiKeys={setApiKeys}
            handleSubmit={handleSubmit}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} size={"sm"} className="ml-auto">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default APIManagement;
