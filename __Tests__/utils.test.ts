import { dateFormatter } from "../src/lib/utils";
import { formatEquityChartData } from "../src/features/analytics/analyticsUtils";
import { describe, test, expect } from "vitest";
import { EquityChartDataPoint } from "../src/features/analytics/analyticsTypes";

describe("dateFormatter", () => {
  test("should return a string when passed a timestamp", () => {
    const input = 1725720215.2392526;
    const actual = dateFormatter(input);
    expect(typeof actual).toBe("string");
  });
  test("should return a date string, with the day month, year and time when passed a timestamp", () => {
    const input = 1725720215.2392526;
    const expected = "Sat, 07 Sep 2024 14:43:35 (UTC)";
    const actual = dateFormatter(input);
    expect(actual).toBe(expected);
  });
});

describe("formatEquityChartData", () => {
  test("should return an array when passed a ledger object", () => {
    const input = {
      "LHGE2G-YF3KT-YMXPRE": {
        aclass: "currency",
        amount: "-0.00003000",
        asset: "USDT",
        balance: "0.00000000",
        fee: "0.00000000",
        refid: "TS4G6LO-QLBPU-YFLNKG",
        time: 1728488004.8839543,
        type: "spend",
        subtype: "dustsweeping",
      },
    };
    const actual = formatEquityChartData(input);
    expect(Array.isArray(actual)).toBe(true);
  });
  test("should return an array of data point objects, that have date, balance and refid properties", () => {
    const input = {
      "LHGE2G-YF3KT-YMXPRE": {
        aclass: "currency",
        amount: "-0.00003000",
        asset: "USDT",
        balance: "0.00000000",
        fee: "0.00000000",
        refid: "TS4G6LO-QLBPU-YFLNKG",
        time: 1728488004.8839543,
        type: "spend",
        subtype: "dustsweeping",
      },
    };
    const actual = formatEquityChartData(input);

    expect(actual[0]).toMatchObject({
      refid: expect.any(String),
      date: expect.any(String),
      balance: expect.any(String),
    });
  });
  test("should return an array of data point, that have the correct date and balance values", () => {
    const input = {
      "LHGE2G-YF3KT-YMXPRE": {
        aclass: "currency",
        amount: "-0.00003000",
        asset: "USDT",
        balance: "0.00000000",
        fee: "0.00000000",
        refid: "TS4G6LO-QLBPU-YFLNKG",
        time: 1728488004.8839543,
        type: "spend",
        subtype: "dustsweeping",
      },
    };
    const expected = {
      refid: "TS4G6LO-QLBPU-YFLNKG",
      balance: "0.00000000",
      date: "Oct",
    };
    const actual = formatEquityChartData(input);
    expect(actual[0]).toEqual(expected);
  });
  test("should only return data points from ledger entries that have an asset property of USDT", () => {
    const input = {
      "LHGE2G-YF3KT-YMXPRE": {
        aclass: "currency",
        amount: "-0.00003000",
        asset: "USDC",
        balance: "0.00000000",
        fee: "0.00000000",
        refid: "TS4G6LO-QLBPU-YFLNKG",
        time: 1728488004.8839543,
        type: "spend",
        subtype: "dustsweeping",
      },
      "THGE2G-YF3KT-YMXOR5": {
        aclass: "currency",
        amount: "-0.00003000",
        asset: "USDT",
        balance: "100.00000000",
        fee: "0.00000000",
        refid: "TS4G6LO-QLBPU-YFLNKG",
        time: 1728488004.8839543,
        type: "spend",
        subtype: "dustsweeping",
      },
    };
    const expected = {
      refid: "TS4G6LO-QLBPU-YFLNKG",
      balance: "100.00000000",
      date: "Oct",
    };
    const actual = formatEquityChartData(input);
    expect(actual[0]).toEqual(expected);
  });
  test("should return an array of data point objects, that are sorted by date in ascending order", () => {
    const input = {
      "ABCD1G-YF3KT-YMX123": {
        aclass: "currency",
        amount: "-0.00010000",
        asset: "USDT",
        balance: "0.50000000",
        fee: "0.00001000",
        refid: "REFID123-QLBPU-YFL123",
        time: 1728488004.8839543,
        type: "spend",
        subtype: "transfer",
      },
      "EFGH2G-YF3KT-YMX456": {
        aclass: "currency",
        amount: "0.20000000",
        asset: "USDT",
        balance: "5.00000000",
        fee: "0.00100000",
        refid: "REFID456-QLBPU-YFL456",
        time: 1628488004.1234567,
        type: "deposit",
        subtype: "staking",
      },
      "IJKL3G-YF3KT-YMX789": {
        aclass: "currency",
        amount: "-50.00000000",
        asset: "USDT",
        balance: "5000.00000000",
        fee: "0.10000000",
        refid: "REFID789-QLBPU-YFL789",
        time: 1630488004.1234567,
        type: "spend",
        subtype: "withdrawal",
      },
      "MNOP4G-YF3KT-YMX012": {
        aclass: "currency",
        amount: "-100.00000000",
        asset: "USDT",
        balance: "10000.00000000",
        fee: "1.00000000",
        refid: "REFID012-QLBPU-YFL012",
        time: 1635488004.8839543,
        type: "spend",
        subtype: "payment",
      },
    };
    const expected = [
      {
        refid: "REFID456-QLBPU-YFL456",
        balance: "5.00000000",
        date: "Aug",
      },
      {
        refid: "REFID789-QLBPU-YFL789",
        balance: "5000.00000000",
        date: "Sep",
      },
      {
        refid: "REFID012-QLBPU-YFL012",
        balance: "10000.00000000",
        date: "Oct",
      },
      {
        refid: "REFID123-QLBPU-YFL123",
        balance: "0.50000000",
        date: "Oct",
      },
    ];
    const actual = formatEquityChartData(input);
    expect(actual).toEqual(expected);
  });
  test("should not mutate the input object", () => {
    const input = {
      "ABCD1G-YF3KT-YMX123": {
        aclass: "currency",
        amount: "-0.00010000",
        asset: "USDT",
        balance: "0.50000000",
        fee: "0.00001000",
        refid: "REFID123-QLBPU-YFL123",
        time: 1728488004.8839543,
        type: "spend",
        subtype: "transfer",
      },
      "EFGH2G-YF3KT-YMX456": {
        aclass: "currency",
        amount: "0.20000000",
        asset: "USDT",
        balance: "5.00000000",
        fee: "0.00100000",
        refid: "REFID456-QLBPU-YFL456",
        time: 1628488004.1234567,
        type: "deposit",
        subtype: "staking",
      },
      "IJKL3G-YF3KT-YMX789": {
        aclass: "currency",
        amount: "-50.00000000",
        asset: "USDT",
        balance: "5000.00000000",
        fee: "0.10000000",
        refid: "REFID789-QLBPU-YFL789",
        time: 1630488004.1234567,
        type: "spend",
        subtype: "withdrawal",
      },
      "MNOP4G-YF3KT-YMX012": {
        aclass: "currency",
        amount: "-100.00000000",
        asset: "USDT",
        balance: "10000.00000000",
        fee: "1.00000000",
        refid: "REFID012-QLBPU-YFL012",
        time: 1635488004.8839543,
        type: "spend",
        subtype: "payment",
      },
    };
    const inputCopy = {
      "ABCD1G-YF3KT-YMX123": {
        aclass: "currency",
        amount: "-0.00010000",
        asset: "USDT",
        balance: "0.50000000",
        fee: "0.00001000",
        refid: "REFID123-QLBPU-YFL123",
        time: 1728488004.8839543,
        type: "spend",
        subtype: "transfer",
      },
      "EFGH2G-YF3KT-YMX456": {
        aclass: "currency",
        amount: "0.20000000",
        asset: "USDT",
        balance: "5.00000000",
        fee: "0.00100000",
        refid: "REFID456-QLBPU-YFL456",
        time: 1628488004.1234567,
        type: "deposit",
        subtype: "staking",
      },
      "IJKL3G-YF3KT-YMX789": {
        aclass: "currency",
        amount: "-50.00000000",
        asset: "USDT",
        balance: "5000.00000000",
        fee: "0.10000000",
        refid: "REFID789-QLBPU-YFL789",
        time: 1630488004.1234567,
        type: "spend",
        subtype: "withdrawal",
      },
      "MNOP4G-YF3KT-YMX012": {
        aclass: "currency",
        amount: "-100.00000000",
        asset: "USDT",
        balance: "10000.00000000",
        fee: "1.00000000",
        refid: "REFID012-QLBPU-YFL012",
        time: 1635488004.8839543,
        type: "spend",
        subtype: "payment",
      },
    };
    const actual = formatEquityChartData(input);
    expect(input).toEqual(inputCopy);
  });
  test("should have a return value that has a different memory reference to the input ", () => {
    const input = {
      "ABCD1G-YF3KT-YMX123": {
        aclass: "currency",
        amount: "-0.00010000",
        asset: "USDT",
        balance: "0.50000000",
        fee: "0.00001000",
        refid: "REFID123-QLBPU-YFL123",
        time: 1728488004.8839543,
        type: "spend",
        subtype: "transfer",
      },
      "EFGH2G-YF3KT-YMX456": {
        aclass: "currency",
        amount: "0.20000000",
        asset: "USDT",
        balance: "5.00000000",
        fee: "0.00100000",
        refid: "REFID456-QLBPU-YFL456",
        time: 1628488004.1234567,
        type: "deposit",
        subtype: "staking",
      },
      "IJKL3G-YF3KT-YMX789": {
        aclass: "currency",
        amount: "-50.00000000",
        asset: "USDT",
        balance: "5000.00000000",
        fee: "0.10000000",
        refid: "REFID789-QLBPU-YFL789",
        time: 1630488004.1234567,
        type: "spend",
        subtype: "withdrawal",
      },
      "MNOP4G-YF3KT-YMX012": {
        aclass: "currency",
        amount: "-100.00000000",
        asset: "USDT",
        balance: "10000.00000000",
        fee: "1.00000000",
        refid: "REFID012-QLBPU-YFL012",
        time: 1635488004.8839543,
        type: "spend",
        subtype: "payment",
      },
    };
    const actual = formatEquityChartData(input);
    expect(actual).not.toBe(input);
  });
});
