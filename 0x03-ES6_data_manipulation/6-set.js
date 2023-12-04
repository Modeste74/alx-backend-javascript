export default function setFromArray(myArray) {
  const uniqueElements = [...new Set(myArray)];
  const elementsString = uniqueElements.join(', ');
  const formattedSetString = `Set { ${elementsString} }`;
  return formattedSetString;
}
