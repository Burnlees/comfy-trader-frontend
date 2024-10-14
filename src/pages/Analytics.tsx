import { fetchLedgerInfo } from "@/features/analytics/analyticsService";
import EquityChart from "@/features/analytics/components/EquityChart";
import PortfolioPieChart from "@/features/analytics/components/PortfolioPieChart";
import TradesHistory from "@/features/analytics/components/TradesHistory";
import { useQuery } from "@tanstack/react-query";

const Analytics = () => {
  const ledgerInfo = useQuery({
    queryKey: ["ledgerInfo"],
    queryFn: fetchLedgerInfo,
  });
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-7 gap-4">
      <PortfolioPieChart />
      <div className="lg:col-start-1">
        <EquityChart ledgerInfo={ledgerInfo} />
      </div>
      <div className="lg:col-start-2 lg:row-start-1 lg:row-span-7">
        <TradesHistory />
      </div>
    </div>
  );
};

export default Analytics;
