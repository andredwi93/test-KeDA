const sortNumber = require("../question1.js");

test("mengurutkan angka dari terbesar ke terkecil", () => {
  expect(sortNumber([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([
    5, 4, 3, 3, 2, 2, 1, 1,
  ]);
});
