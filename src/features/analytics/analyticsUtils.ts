import { dateFormatter } from "@/lib/utils";
import {
  EquityChartDataPoint,
  LedgerData,
  WinLossDataPoint,
  WinLossDataPoints,
} from "./analyticsTypes";

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

export const formatWinLossChartData = (data: LedgerData) => {
  const arr: WinLossDataPoints = [];

  Object.keys(data)
    .filter((entry) => data[entry].type === "margin")
    .forEach((entry) => {
      const dataPointObj: WinLossDataPoint = {
        month: "",
        wins: 0,
        losses: 0,
      };
      const monthOfEntry = dateFormatter(data[entry].time).slice(8, 11);

      if (!arr.length) {
        dataPointObj.month = monthOfEntry;
        parseFloat(data[entry].amount) > 0
          ? (dataPointObj.wins += 1)
          : (dataPointObj.losses += 1);
        arr.push(dataPointObj);
        return;
      }

      for (const dataPoint of arr) {
        if (dataPoint.month === monthOfEntry) {
          parseFloat(data[entry].amount) > 0
            ? (dataPoint.wins += 1)
            : (dataPoint.losses += 1);
          return;
        }
      }

      dataPointObj.month = monthOfEntry;
      parseFloat(data[entry].amount) > 0
        ? (dataPointObj.wins += 1)
        : (dataPointObj.losses += 1);
      arr.push(dataPointObj);
      return;
    });
  return arr;
};
