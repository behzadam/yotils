import { toChunks } from "./";

describe("splitIntoChunks", () => {
  test("should return array of chunks or an empty array", () => {
    const chunks = toChunks(
      "Lorem ipsum dolor sit amet, consectetur adipis",
      4
    );
    expect(chunks.length).toBe(4);
  });
});
