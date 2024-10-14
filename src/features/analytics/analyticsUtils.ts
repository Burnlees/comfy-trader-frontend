import { dateFormatter } from "@/lib/utils";
import { EquityChartDataPoint, LedgerData } from "./analyticsTypes";

export const formatEquityChartData = (data: LedgerData) => {
  const usdtDataPoints = Object.keys(data)
    .filter((entry) => data[entry].asset === "USDT")
    .sort((a, b) => data[a].time - data[b].time)
    .map((entry) => {
      const dataPoint: EquityChartDataPoint = {
        refid: "",
        date: "",
        balance: "",
      };

      dataPoint.refid = data[entry].refid;
      dataPoint.date = dateFormatter(data[entry].time).slice(8, 11);
      dataPoint.balance = data[entry].balance;

      return dataPoint;
    });

  return usdtDataPoints;
};
