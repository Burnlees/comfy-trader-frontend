import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StrategyProps } from "../settingsTypes";
import { Slider } from "@/components/ui/slider";
import { BaseSyntheticEvent } from "react";

const StrategyForm = ({
  setStrategy,
  strategy,
}: StrategyProps) => {
  const handleStrategyChange = (value: string) => {
    setStrategy((currBotSettings) => {
      return { ...currBotSettings, strategy: value };
    });
  };

  const handleRiskChange = (event: BaseSyntheticEvent) => {
    setStrategy((currBotSettings) => {
      return { ...currBotSettings, risk: event.target.value };
    });
  };

  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        Current:{" "}
        <Select
          defaultValue={strategy.strategy}
          onValueChange={handleStrategyChange}
        >
          <SelectTrigger>
            <SelectValue placeholder={strategy.strategy} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="MACD">MACD</SelectItem>
            <SelectItem value="RSI">RSI</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4">
        Risk %: {strategy.risk}
        <Slider
          defaultValue={[strategy.risk]}
          max={100}
          step={1}
          className=""
          onChange={handleRiskChange}
        />
      </div>
    </form>
  );
};

export default StrategyForm;
