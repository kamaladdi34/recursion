function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let firstArray = [...array].splice(0, array.length / 2);
  let secondArray = [...array].splice(array.length / 2, array.length);
  let firstArrayResult = mergeSort(firstArray);
  let secondArrayResult = mergeSort(secondArray);
  let result = [];
  let i = 0,
    j = 0;
  while (
    i <= firstArrayResult.length - 1 &&
    j <= secondArrayResult.length - 1
  ) {
    if (firstArrayResult[i] < secondArrayResult[j]) {
      result.push(firstArrayResult[i]);
      i++;
    } else {
      result.push(secondArrayResult[j]);
      j++;
    }
  }
  if (i < firstArrayResult.length) {
    result = result.concat(firstArrayResult.slice(i));
  }
  if (j < secondArrayResult.length) {
    result = result.concat(secondArrayResult.slice(j));
  }
  return result;
}
let sortThis = [7, 2, 9, 4, 1, 8, 5, 3, 6, 10];
console.log("result:", mergeSort(sortThis));
