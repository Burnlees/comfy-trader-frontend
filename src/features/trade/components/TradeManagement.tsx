import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfitAndLoss from "./ProfitAndLoss";
import OpenOrders from "./OpenOrders";

const TradeManagement = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Trade Management</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfitAndLoss />
          <OpenOrders />
        </CardContent>
      </Card>
    </div>
  );
};

export default TradeManagement;
