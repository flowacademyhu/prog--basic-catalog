// intersecion.js

// const insertionSort = (src) => {
//   for (let i = 1; i < src.length; i++) {
//     const temp = src[i];
//     console.log('tmp', temp, ':', src);
//     let j = i - 1;
//     while (j >= 0 && src[j] > temp) {
//       console.log(src);
//       src[j + 1] = src[j];
//       j--;
//     }
//   }src[j + 1] = temp;
// };
// insertionSort(arr);
// console.log(arr);

// mobule.exports ={
// insertionSort :insertionSort
// }
const intersection = (src1, src2) => {
  const out = [];
  let count = 0;
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      count++;
      if (src1[i] === src2[j] && !out.includes(src1[i])) {
        out.push(src1[i]);
        break;
      }
    }
  }
  return out;
};
module.exports = {
  intersection
};
