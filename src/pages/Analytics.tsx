import PortfolioPieChart from "@/features/analytics/components/PortfolioPieChart";
import TradesHistory from "@/features/analytics/components/TradesHistory";

const Analytics = () => {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-4">
      <PortfolioPieChart />
      <div className="lg:col-start-2 lg:row-span-2">
        <TradesHistory />
      </div>
    </div>
  );
};

export default Analytics;
