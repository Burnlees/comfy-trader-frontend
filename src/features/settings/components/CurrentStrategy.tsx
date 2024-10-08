import { StrategyProps } from "../settingsTypes";

const CurrentStrategy = ({ strategy }: StrategyProps) => {
  return (
    <div className="border-2 border-primary rounded-md overflow-hidden">
      <span className="bg-primary p-2 text-primary-foreground">
        Current:
      </span>{" "}
      {strategy.strategy ? strategy.strategy : "None"}
    </div>
  );
};

export default CurrentStrategy;
