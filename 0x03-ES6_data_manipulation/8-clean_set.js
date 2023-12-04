export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const matchingValues = [...set].filter((obj) => obj.startsWith(startString));
  const appendString = matchingValues.map((obj) => obj.slice(startString.length)).join('-');
  return appendString;
}
