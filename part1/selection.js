// Selection
const selectEvens = (src) => {
  const out = [];
  let j = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      out[j++] = src[i];
    }
  }
  return out;
};

module.exports = {
    selectEvens: selectEvens
  
};
