const maxSubarraySum = require("../question2.js");

test("menemukan jumlah maksimum subarray dengan panjang angka 2", () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
});

test("menemukan jumlah maksimum subarray dengan panjang angka 4", () => {
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
});

test("menemukan jumlah maksimum subarray dengan bilangan negatif dan panjang angka 2", () => {
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});
