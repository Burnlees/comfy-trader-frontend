import { useQuery } from "@tanstack/react-query";
import { fetchOpenOrders } from "../tradeService";
import { Progress } from "@/components/ui/progress";
import CancelOrderButton from "./CancelOrderButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const OpenOrders = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["OpenOrders"],
    queryFn: fetchOpenOrders,
  });


  if (isPending) return <Progress />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div className="text-sm">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Open Orders</h4> <CancelOrderButton />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data
            ? Object.entries(data).map(([key, value], index) => {
                return (
                  <TableRow className={index % 2 === 0 ? "bg-secondary" : ""}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{value || "N/A"}</TableCell>
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
    </div>
  );
};

export default OpenOrders;

// <section className="grid grid-cols-2">
//   <div className="col-start-1">Entry:</div>
//   <div className="col-start-2">{data?.entryPrice || "N/A"}</div>
//   <div className="col-start-1">Volume:</div>
//   <div className="col-start-2">{data?.volume || "N/A"}</div>
//   <div className="col-start-1">Filled:</div>
//   <div className="col-start-2">{data?.orderFilled || "N/A"}</div>
//   <div className="col-start-1">Type:</div>
//   <div className="col-start-2">{data?.type || "N/A"}</div>
//   <div className="col-start-1">Pair:</div>
//   <div className="col-start-2">{data?.pair || "N/A"}</div>
//   <div className="col-start-1">Take Profit:</div>
//   <div className="col-start-2">{data?.takeProfit || "N/A"}</div>
//   <div className="col-start-1">Stop Loss:</div>
//   <div className="col-start-2">{data?.stopLoss || "N/A"}</div>
// </section>
