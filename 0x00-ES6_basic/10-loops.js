export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [];
  for (const idx of array) {
    const value = appendString + idx;
    updatedArray.push(value);
  }

  return updatedArray;
}
