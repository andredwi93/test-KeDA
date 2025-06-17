// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
function nestedEvenSum(obj) {
  let sum = 0;

  function helper(innerObj) {
    for (let key in innerObj) {
      const value = innerObj[key];
      if (typeof value === "object" && value !== null) {
        helper(value);
      } else if (typeof value === "number" && value % 2 === 0) {
        sum += value;
      }
    }
  }

  helper(obj);
  return sum;
}

const obj1 = {
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

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));

module.exports = nestedEvenSum;