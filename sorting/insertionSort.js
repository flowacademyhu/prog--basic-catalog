const insertionSort = (src) => {
  const length = src.length;
  for (let i = 1; i < length; i++) {
    const key = src[i];
    let j = i - 1;
    while (j >= 0 && src[j] > key) {
      src[j + 1] = src[j];
      j = j - 1;
    }
    src[j + 1] = key;
  }
  return src;
};

module.exports = {
  sort: insertionSort
};
