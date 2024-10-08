import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StrategyProps } from "../settingsTypes";
import { Slider } from "@/components/ui/slider";

const StrategyForm = ({
  strategy,
  setStrategy,
  currentStrategy,
  handleSubmit,
}: StrategyProps) => {
  const handleStrategyChange = (value: string) => {
    setStrategy((currBotSettings) => {
      return { ...currBotSettings, strategy: value };
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
        Risk %: 10{" "}
        <Slider defaultValue={[50]} max={100} step={1} className="" />
      </div>
    </form>
  );
};

export default StrategyForm;
