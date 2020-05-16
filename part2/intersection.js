// intersecion.js  

const insertionSort = (src) => {
  for (let i = 1; i < src.length; i++) {
    const temp = src[i];
    console.log('tmp', temp, ':', src);
    let j = i - 1;
    while (j >= 0 && src[j] > temp) {
      console.log(src);
      src[j + 1] = src[j];
      j--;
    }
  }src[j + 1] = temp;
};
insertionSort(arr);
console.log(arr);

