// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil
// dengan manual tanpa fungsi bawaan javascript
function sortNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const result = sortNumber([1, 2, 4, 3, 5, 3, 2, 1]);
console.log(result);

module.exports = sortNumber;