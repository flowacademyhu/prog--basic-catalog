const minimumSelectionSort = (src) => {
  for (let i = 0; i < src.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < src.length; j++) {
      if (src[j] < src[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = src[i];
      src[i] = src[minIndex];
      src[minIndex] = temp;
    }
  }
  return src;
};

module.exports = {
  minimumSelectionSort
};

