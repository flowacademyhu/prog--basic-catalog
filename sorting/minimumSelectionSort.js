const minimumSelectionSort = (src) => {
  for (let i = 0; i < src.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < src.length; j++) {
      if (src[j] < src[minIndex]) {
        minIndex = j;
      }
    }
    console.log(i, ':', src, 'min', src[minIndex]);
    if (minIndex !== i) {
      const temp = src[i];
      src[i] = src[minIndex];
      src[minIndex] = temp;
    }
  }
};

module.exports = {
  minimumSelectionSort
};
