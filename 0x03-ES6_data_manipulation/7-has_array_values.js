export default function hasValuesFromArray(setArray, anArray) {
  return anArray.every((element) => setArray.has(element));
}
