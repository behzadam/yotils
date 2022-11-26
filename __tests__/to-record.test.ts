import toRecord from "../src/to-record";
import { describeGen } from "./utils/describe-gen";

describe(describeGen(toRecord.name).valid, () => {
  test("should return record of an array", () => {
    const array = [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
      { id: 3, name: "C" },
    ];
    const record = toRecord(array, "id");
    expect(record).toStrictEqual({
      "1": { id: 1, name: "A" },
      "2": { id: 2, name: "B" },
      "3": { id: 3, name: "C" },
    });
  });
});
