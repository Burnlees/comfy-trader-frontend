import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfitAndLoss from "./ProfitAndLoss";
import OpenOrders from "./OpenOrders";
import { Separator } from "@/components/ui/separator";

const TradeManagement = () => {
  return (
    <div className="h-full">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Trade Management</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <ProfitAndLoss />
          <Separator />
          <OpenOrders />
        </CardContent>
      </Card>
    </div>
  );
};

export default TradeManagement;
