import removeEmptyKeys from "../src/remove-empty-keys";

test("removeEmptyKeys", () => {
  const result = removeEmptyKeys({
    key1: "1",
    key2: "2",
    key3: "",
    key4: { key5: "" },
  });
  console.log(result);
});
