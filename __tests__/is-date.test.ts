import { isDate } from "@lib";
import { describeGen } from "./utils/describe-gen";

describe(describeGen(isDate.name).valid, () => {
  test("should return true on date type", () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate("2021-10-10")).toBe(false);
  });
});
