import comfy from "@/api";

export const fetchPnl = async () => {
  try {
    const path = "/api/kraken/pnl";
    const response = await comfy.get(path);
    return response.data.unrealisedPnl;
  } catch (error) {
    throw error;
  }
};

export const fetchOpenOrders = async () => {
  try {
    const path = "/api/kraken/open-orders";
    const response = await comfy.get(path);
    const orderData = response.data.openOrdersData.open;

    const formattedData = {
      "Entry Price": "",
      "Stop Loss": "",
      "Take Profit": "",
      Volume: "",
      Filled: "",
      Pair: "",
      Type: "",
    };

    Object.keys(orderData).forEach((order) => {
      if (orderData[order].descr.ordertype === "take-profit-limit") {
        formattedData["Take Profit"] = orderData[order].descr.price;
      } else if (orderData[order].descr.ordertype === "limit") {
        formattedData["Entry Price"] = orderData[order].descr.price;
        formattedData["Pair"] = orderData[order].descr.pair;
        formattedData["Volume"] = orderData[order].vol;
        formattedData["Filled"] = orderData[order].vol_exec;
        formattedData["Type"] = orderData[order].descr.type;
        const closeArray = orderData[order].descr.close.split(" ");
        formattedData["Stop Loss"] = closeArray[closeArray.length - 1];
      }
    });

    console.log(formattedData);

    return formattedData;
  } catch (error) {}
};

export const cancelOpenOrders = async () => {
  try {
    const path = "/api/kraken/cancel-all-orders";
    const response = await comfy.patch(path);
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
};
