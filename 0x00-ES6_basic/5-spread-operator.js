export default function concatArrays(array1, array2, string) {
  const concatNate = [...array1, ...array2, ...string];
  return concatNate;
}
