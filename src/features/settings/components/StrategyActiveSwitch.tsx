import { Switch } from "@/components/ui/switch";
import { StrategyProps } from "../settingsTypes";

const StrategyActiveSwitch = ({
  strategy,
  setStrategy,
}: StrategyProps) => {
  const handleClick = () => {
    setStrategy((currStrategy) => {
      return { ...currStrategy, bot_on: !currStrategy.bot_on };
    });
  };

  return (
    <>
      <Switch
        id="strategy-active"
        onClick={handleClick}
        checked={strategy.bot_on}
        className="mt-0"
      />
    </>
  );
};

export default StrategyActiveSwitch;
