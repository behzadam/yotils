import { isEqualDate } from "@lib/is-equal-date";
import { describeGen } from "./utils/describe-gen";

describe(describeGen(isEqualDate.name).valid, () => {
  it("should return true when two dates are equal", () => {
    const target = new Date(2016, 1, 1);
    const other = new Date(2016, 1, 1);

    expect(isEqualDate(target, other)).toBe(true);
  });
});

describe(describeGen(isEqualDate.name).invalid, () => {
  it("should return false when two dates are not equal", () => {
    const target = new Date(2016, 1, 1);
    const other = new Date(2017, 1, 1);

    expect(isEqualDate(target, other)).toBe(true);
  });
});
