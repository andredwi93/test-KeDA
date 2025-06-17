const nestedEvenSum = require("../question3.js");

test("mendapatkan jumlah semua bilangan genap dalam nested objek input ke 1", () => {
  const obj = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };
  expect(nestedEvenSum(obj)).toBe(6);
});

test("mendapatkan jumlah semua bilangan genap dalam nested objek input ke 2", () => {
  const obj = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: "car" },
  };
  expect(nestedEvenSum(obj)).toBe(12);
});
