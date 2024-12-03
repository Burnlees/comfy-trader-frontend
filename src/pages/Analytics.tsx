import { fetchLedgerInfo } from "@/features/analytics/analyticsService";
import EquityChart from "@/features/analytics/components/EquityChart";
import PortfolioPieChart from "@/features/analytics/components/PortfolioPieChart";
import TradesHistory from "@/features/analytics/components/TradesHistory";
import WinLossChart from "@/features/analytics/components/WinLossChart";
import TradeManagement from "@/features/trade/components/TradeManagement";
import { useQuery } from "@tanstack/react-query";

const Analytics = () => {
  const ledgerInfo = useQuery({
    queryKey: ["ledgerInfo"],
    queryFn: fetchLedgerInfo,
  });

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <PortfolioPieChart />
      <div className="lg:col-start-2">
        <WinLossChart ledgerInfo={ledgerInfo} />
      </div>
      <div className="lg:col-start-3">
        <EquityChart ledgerInfo={ledgerInfo} />
      </div>
      <div className="lg:row-start-2 lg:col-span-2">
        <TradesHistory />
      </div>
      <div>
        <TradeManagement />
      </div>
    </div>
  );
};

export default Analytics;
