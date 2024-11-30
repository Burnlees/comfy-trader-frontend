import { useQuery } from "@tanstack/react-query";
import { fetchPnl } from "../tradeService";
import { Progress } from "@radix-ui/react-progress";

const ProfitAndLoss = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["PnlData"],
    queryFn: fetchPnl,
  });

  if (isPending) return <Progress />;
  if (error) return "An error has occured: " + error.message;

  return <div>PNL: {data}</div>;
};

export default ProfitAndLoss;
