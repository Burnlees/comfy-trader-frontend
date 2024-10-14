import { useQuery } from "@tanstack/react-query";
import { fetchTradeHistory } from "../analyticsService";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dateFormatter } from "@/lib/utils";

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
          <Table className="text-xs">
            <TableCaption>List of recent trades</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>TXID</TableHead>
                <TableHead>Pair</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Volume</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.keys(data.trades).map((trade, index) => {
                return (
                  <TableRow
                    key={trade}
                    className={index % 2 === 0 ? "bg-secondary" : ""}
                  >
                    <TableCell>{data.trades[trade].ordertxid}</TableCell>
                    <TableCell>{data.trades[trade].pair}</TableCell>
                    <TableCell
                      className={
                        data.trades[trade].type === "buy"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {data.trades[trade].type}
                    </TableCell>
                    <TableCell>{data.trades[trade].vol}</TableCell>
                    <TableCell>
                      {dateFormatter(data.trades[trade].time)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradesHistory;
