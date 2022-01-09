function cutString(myString) {
  let newString = myString;
  if (myString.length > 120) {
    newString = myString.slice(0, 120);
    newString = newString + "..."
  }

  return newString;
}

module.exports = cutString;