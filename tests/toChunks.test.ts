import toChunks from "../src/to-chunks";

describe("splitIntoChunks", () => {
  test("should return array of chunks or an empty array", () => {
    let chunks = toChunks("Lorem ipsum dolor sit amet, consectetur adipis", 4);
    expect(chunks.length).toBe(4);
    chunks = toChunks("", 4);
    expect(chunks.length).toBe(0);
  });
});
