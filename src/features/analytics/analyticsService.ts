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
    console.log(response);
    
    // const data = await response.json();
  } catch (error) {
    console.error(error);
  }
};
