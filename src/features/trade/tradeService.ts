import comfy from "@/api";

export const fetchPnl = async () => {
  try {
    const path = "/get-pnl";
    const response = await comfy.get(path);
    return response.data.unrealisedPnl;
  } catch (error) {
    throw error;
  }
};

export const fetchOpenOrders = async () => {
  try {
    const path = "/get-open-orders";
    const response = await comfy.get(path);
    const orderData = response.data.openOrdersData.open;

    const formattedData = {
      entryPrice: "",
      stopLoss: "",
      takeProfit: "",
      volume: "",
      orderFilled: "",
      pair: "",
      type: "",
    };

    Object.keys(orderData).forEach((order) => {
      if (orderData[order].descr.ordertype === "take-profit-limit") {
        formattedData.takeProfit = orderData[order].descr.price;
      } else if (orderData[order].descr.ordertype === "limit") {
        formattedData.entryPrice = orderData[order].descr.price;
        formattedData.pair = orderData[order].descr.pair;
        formattedData.volume = orderData[order].vol;
        formattedData.orderFilled = orderData[order].vol_exec;
        formattedData.type = orderData[order].descr.type;
        const closeArray = orderData[order].descr.close.split(" ");
        formattedData.stopLoss = closeArray[closeArray.length - 1];
      }
    });

    console.log(formattedData);

    return formattedData;
  } catch (error) {}
};

export const cancelOpenOrders = async () => {
  try {
    const path = "/cancel-all-orders";
    const response = await comfy.patch(path);
    console.log(response);
    
    return response;
  } catch (error) {
    throw error;
  }
};
