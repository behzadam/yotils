import splitIntoChunks from "../src/splitIntoChunks";

describe("splitIntoChunks", () => {
  test("should return array of chunks or an empty array", () => {
    let chunks = splitIntoChunks(
      "Lorem ipsum dolor sit amet, consectetur adipis",
      4
    );
    expect(chunks.length).toBe(4);
    chunks = splitIntoChunks("", 4);
    expect(chunks.length).toBe(0);
  });
});
