import comfy from "@/api";
import axios from "axios";

export const getUserBalances = async () => {
  try {
    const path = "/get-balance";
    const response = await comfy.get(path);
    return response.data.balanceData;
  } catch (error) {
    throw error;
  }
};

export const fetchPrice = async (ticker: string) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ticker}&vs_currencies=usd`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTradeHistory = async () => {
  try {
    const path = "/get-trades-history";
    const { data } = await comfy.get(path);
    const tradeArray = Object.keys(data.tradesHistory.trades).map((entry) => {
      return data.tradesHistory.trades[entry];
    });
    return tradeArray;
  } catch (error) {
    throw error;
  }
};

export const fetchLedgerInfo = async () => {
  try {
    const path = "/api/kraken/ledger-info";
    const { data } = await comfy.get(path);

    const ledgerInfo = data.ledgerInfo.ledger;

    return ledgerInfo;
  } catch (error) {}
};
