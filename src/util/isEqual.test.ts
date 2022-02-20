import isEqual from "./isEqual";

const validCases = test.each`
  target                      | other                       | expected
  ${new Date("2022-01-15")}   | ${new Date("2022-01-15")}   | ${true}
  ${1}                        | ${1}                        | ${true}
  ${true}                     | ${true}                     | ${true}
  ${"one"}                    | ${"one"}                    | ${true}
  ${[1, 2, 3, 4]}             | ${[1, 2, 3, 4]}             | ${true}
  ${[1, { 2: 3, 4: [5, 6] }]} | ${[1, { 2: 3, 4: [5, 6] }]} | ${true}
  ${new Map([["a", "v1"]])}   | ${new Map([["a", "v2"]])}   | ${true}
  ${new Set([1, 2, 3])}       | ${new Set([1, 2, 3])}       | ${true}
  ${{ key: "value" }}         | ${{ key: "value" }}         | ${true}
  ${{ key: [1, 2, 3] }}       | ${{ key: [1, 2, 3] }}       | ${true}
`;

const invalidCases = test.each`
  target                      | other                       | expected
  ${new Date("2022-01-15")}   | ${new Date("2021-01-15")}   | ${false}
  ${1}                        | ${2}                        | ${false}
  ${true}                     | ${false}                    | ${false}
  ${"one"}                    | ${"two"}                    | ${false}
  ${[1, 2, 3, 4]}             | ${[5, 6, 7, 8]}             | ${false}
  ${[1, { 2: 3, 4: [5, 6] }]} | ${[1, { 2: 3, 4: [7, 8] }]} | ${false}
  ${new Map([["a", "v1"]])}   | ${new Map([["b", "v1"]])}   | ${false}
  ${new Set([1, 2, 3])}       | ${new Set([3, 4, 5])}       | ${false}
  ${{ key: "value" }}         | ${{ key2: "value" }}        | ${false}
`;

describe("isEqual valid cases", () => {
  validCases(
    "should return $expected when $target is equal to $other",
    ({ target, other, expected }) => {
      expect(isEqual(target, other)).toBe(expected);
    }
  );
});

describe("isEqual invalid cases", () => {
  invalidCases(
    "should return $expected when $target is equal to $other",
    ({ target, other, expected }) => {
      expect(isEqual(target, other)).toBe(expected);
    }
  );
});
