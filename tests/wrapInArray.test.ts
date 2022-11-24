import { describeGen } from "../src/describeGen";
import wrapInArray from "../src/array/wrapInArray";

const validCases = test.each`
  target | expected
  ${"A"} | ${["A"]}
  ${1}   | ${[1]}
  ${[1]} | ${[[1]]}
`;
describe(describeGen(wrapInArray.name).valid, () => {
  validCases(
    "should return $expected when target is $target",
    ({ target, expected }) => {
      expect(wrapInArray(target)).toStrictEqual(expected);
    }
  );
});
