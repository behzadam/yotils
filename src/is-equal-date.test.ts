import { isEqualDate } from "./";

describe("isEqualDate cases", () => {
  it("should return true when two dates are equal", () => {
    const target = new Date(2016, 1, 1);
    const other = new Date(2016, 1, 1);

    expect(isEqualDate(target, other)).toBe(true);
  });
});
