import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StrategyForm from "./StrategyForm";
import { useUserContext } from "@/contexts/UserContext";
import { useEffect, useState } from "react";
import { BotSettings } from "../settingsTypes";
import {
  getUserSettings,
  usePatchUserSettings,
  usePostUserSettings,
} from "../settingsService";
import StrategyActiveSwitch from "./StrategyActiveSwitch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { Progress } from "@/components/ui/progress";

const StrategyManagement = () => {
  const { user } = useUserContext();
  const { toast } = useToast();
  const { mutate: postUserSettingsMutate } = usePostUserSettings();
  const { mutate: patchUserSettingsMutate } = usePatchUserSettings();

  const [strategy, setStrategy] = useState<BotSettings>({
    strategy: "",
    bot_on: false,
    risk: 0,
  });

  const { isPending, error, data } = useQuery({
    queryKey: ["userStrategy"],
    queryFn: () => getUserSettings(user?.userId),
  });

  useEffect(() => {
    if (data) {
      setStrategy(() => {
        const fetchedSettings: BotSettings = {
          strategy: data.strategy,
          bot_on: data.bot_on,
          risk: data.risk,
        };
        return fetchedSettings;
      });
    }
  }, [data]);

  const handleSubmit = async () => {
    try {
      if (data) {
        await patchUserSettingsMutate({
          settings: strategy,
          username: user?.userId,
        });
      } else {
        await postUserSettingsMutate({
          settings: strategy,
          username: user?.userId,
        });
      }
      toast({
        title: "Strategy Updated",
        description: "Strategy settings succesfully updated.",
      });
    } catch (error: any) {
      toast({ title: "Strategy Error", description: error.message });
    }
  };

  if (isPending) return <Progress />;
  if (error) return "An error has occured: " + error.message;

  return (
    <section className="h-full">
      <Card className="flex flex-col justify-between h-full overflow-hidden">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>Strategy Management</CardTitle>
          <StrategyActiveSwitch strategy={strategy} setStrategy={setStrategy} />
        </CardHeader>
        <CardContent className="flex flex-col gap-2 mt-4">
          <StrategyForm
            strategy={strategy}
            setStrategy={setStrategy}
            isPending={isPending}
          />
        </CardContent>
        <CardFooter className="mt-4">
          <Button onClick={handleSubmit} size={"sm"} className="ml-auto">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default StrategyManagement;