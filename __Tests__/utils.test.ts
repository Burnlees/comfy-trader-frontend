import { dateFormatter } from "../src/lib/utils";
import { describe, test, expect } from "vitest";

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
