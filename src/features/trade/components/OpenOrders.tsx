import { useQuery } from "@tanstack/react-query";
import { cancelOpenOrders, fetchOpenOrders } from "../tradeService";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import CancelOrderButton from "./CancelOrderButton";

const OpenOrders = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["OpenOrders"],
    queryFn: fetchOpenOrders,
  });

  const handleOrderCancel = () => {};

  if (isPending) return <Progress />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div className="text-sm border">
      <div className="flex justify-between items-center px-4">
        <h4 className="font-semibold">Open Orders</h4> <CancelOrderButton />
      </div>
      <section className="grid grid-cols-2 p-4">
        <div className="col-start-1 bg-secondary">Entry:</div>
        <div className="col-start-2">{data?.entryPrice || "N/A"}</div>
        <div className="col-start-1">Volume:</div>
        <div className="col-start-2">{data?.volume || "N/A"}</div>
        <div className="col-start-1">Filled:</div>
        <div className="col-start-2">{data?.orderFilled || "N/A"}</div>
        <div className="col-start-1">Type:</div>
        <div className="col-start-2">{data?.type || "N/A"}</div>
        <div className="col-start-1">Pair:</div>
        <div className="col-start-2">{data?.pair || "N/A"}</div>
        <div className="col-start-1">Take Profit:</div>
        <div className="col-start-2">{data?.takeProfit || "N/A"}</div>
        <div className="col-start-1">Stop Loss:</div>
        <div className="col-start-2">{data?.stopLoss || "N/A"}</div>
      </section>
    </div>
  );
};

export default OpenOrders;
