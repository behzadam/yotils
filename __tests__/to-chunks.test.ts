import { toChunks } from "@lib";

describe("splitIntoChunks", () => {
  test("should return array of chunks or an empty array", () => {
    let chunks = toChunks("Lorem ipsum dolor sit amet, consectetur adipis", 4);
    console.log(chunks);
    expect(chunks.length).toBe(4);
    chunks = toChunks("", 4);
    expect(chunks.length).toBe(0);
  });
});
