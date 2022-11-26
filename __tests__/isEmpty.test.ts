import isEmpty from "../src/is-empty";
import { describeGen } from "./utils/describe-gen";

describe(describeGen(isEmpty.name).valid, () => {
  test("should return true on empty values", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty("")).toBe(true);
  });
});

describe(describeGen(isEmpty.name).invalid, () => {
  test("should return false on non empty values", () => {
    expect(isEmpty({ id: 1 })).toBe(false);
    expect(isEmpty([1, 2])).toBe(false);
    expect(isEmpty("hello")).toBe(false);
  });
});
