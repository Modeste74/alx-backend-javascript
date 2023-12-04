export default function createInt8TypedArray(length, position, value) {
  const typedArray = new ArrayBuffer(length);
  const int8Array = new Int8Array(typedArray);
  if (position < 0 || position >= int8Array.length) {
    throw new Error('Position outside range');
  }
  int8Array[position] = value;
  return new DataView(typedArray);
}
