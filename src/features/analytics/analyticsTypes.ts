import { UseQueryResult } from "@tanstack/react-query";

export type EquityChartProps = {
  ledgerInfo: UseQueryResult<any, Error>;
};

export type EquityChartDataPoint = {
  refid: string;
  balance: string;
  date: string;
};

export type WinLossDataPoint = {
  month: string;
  wins: number;
  losses: number;
};

export type WinLossDataPoints = WinLossDataPoint[];

export type LedgerData = {
  [key: string]: {
    aclass: string;
    amount: string;
    asset: string;
    balance: string;
    fee: string;
    refid: string;
    time: number;
    type: string;
    subtype: string;
  };
};
