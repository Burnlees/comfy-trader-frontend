import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import StrategyForm from "./StrategyForm";
import { useUserContext } from "@/contexts/UserContext";
import { FormEvent, useEffect, useState } from "react";
import { BotSettings } from "../settingsTypes";
import {
  getUserSettings,
  patchUserSettings,
  postUserSettings,
} from "../settingsService";
import StrategyActiveSwitch from "./StrategyActiveSwitch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const StrategyManagement = () => {
  const { user } = useUserContext();
  const { toast } = useToast();
  const [currentStrategy, setCurrentStrategy] = useState<BotSettings>({
    strategy: "",
    bot_on: false,
  });
  const [strategy, setStrategy] = useState<BotSettings>({
    strategy: "",
    bot_on: false,
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settingsData = await getUserSettings(user?.userId);
        const strategySettings: BotSettings = {
          strategy: settingsData?.data.userSettings.strategy,
          bot_on: settingsData?.data.userSettings.bot_on,
        };
        setCurrentStrategy(strategySettings);
        setStrategy((currStrategy: BotSettings) => {
          return { ...currStrategy, bot_on: strategySettings.bot_on };
        });
      } catch (error) {
        console.log(error, "<<<");
      }
    };
    fetchSettings();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (
        currentStrategy.strategy === "" ||
        currentStrategy.strategy === undefined
      ) {
        await postUserSettings(strategy, user?.userId);
      } else {
        await patchUserSettings(strategy, user?.userId);
      }
    } catch (error: any) {
      toast({ title: "Strategy Error", description: error.message });
    }
  };

  return (
    <section className="h-full">
      <Card className="flex flex-col justify-between h-full overflow-hidden drop-shadow-lg">
        <CardHeader className="flex flex-row justify-between bg-muted drop-shadow-lg border-b-[1px] border-slate-500">
          <h2>Strategy Management</h2>
          <StrategyActiveSwitch
            strategy={strategy}
            setStrategy={setStrategy}
            currentStrategy={currentStrategy}
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-2 mt-4">
          <StrategyForm
            strategy={strategy}
            setStrategy={setStrategy}
            currentStrategy={currentStrategy}
            handleSubmit={handleSubmit}
          />
        </CardContent>
        <CardFooter className="mt-4">
          <Button onClick={handleSubmit} size={"sm"} className="ml-auto">
            {currentStrategy.strategy === "" ||
            currentStrategy.strategy === undefined
              ? "Submit"
              : "Update"}
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default StrategyManagement;
