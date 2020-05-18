const decide = (arr, element) => {	// decide if the 'element' is exist in the array
  for (const actual of arr) {
    if (actual === element) {
      return true;
    }
  }
  return false;
};
module.exports = {
	decide
};
