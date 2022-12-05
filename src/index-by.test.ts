import { indexBy } from ".";

describe("indexBy cases", () => {
  const input = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ];

  const expected = {
    "1": { id: 1, name: "A" },
    "2": { id: 2, name: "B" },
    "3": { id: 3, name: "C" },
  };

  test.each`
    input    | expected
    ${input} | ${expected}
  `("should return $expected when input is: $input", ({ input, expected }) => {
    expect(indexBy([...input], "id")).toStrictEqual(expected);
  });
});
