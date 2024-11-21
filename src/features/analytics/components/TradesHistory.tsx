import { useQuery } from "@tanstack/react-query";
import { fetchTradeHistory } from "../analyticsService";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./TradesHistory/TradeDataTable";
import columns from "./TradesHistory/columns";

const TradesHistory = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["tradesHistory"],
    queryFn: fetchTradeHistory,
  });

  if (isPending) return <Progress />;
  if (error) return "An error has occured: " + error.message;

  return (
    <div className="">
      <Card className="">
        <CardHeader>
          <CardTitle>Trades History</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default TradesHistory;
