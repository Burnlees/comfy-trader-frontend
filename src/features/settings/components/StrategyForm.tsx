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
  currentStrategy,
  handleSubmit,
  strategy,
}: StrategyProps) => {
  const handleStrategyChange = (value: string) => {
    setStrategy((currBotSettings) => {
      return { ...currBotSettings, strategy: value };
    });
    console.log(strategy);
  };
  const handleRiskChange = (event: BaseSyntheticEvent) => {
    setStrategy((currBotSettings) => {
      return { ...currBotSettings, risk: event.target.value };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        Current:{" "}
        <Select
          defaultValue={currentStrategy.strategy}
          onValueChange={handleStrategyChange}
        >
          <SelectTrigger>
            <SelectValue placeholder={currentStrategy.strategy} />
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
          defaultValue={[currentStrategy.risk]}
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
