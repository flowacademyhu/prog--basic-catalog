// Copy the content of an array

const copy = (src, dest) => {
  for (let i = 0; i < src.length; i++) {
    dest[i] = src[i];
  }
  return dest;
};

module.exports = {
  copy: copy
};
