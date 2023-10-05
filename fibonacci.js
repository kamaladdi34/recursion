// Interative method:
function fibs(number) {
  let array = [];
  for (let i = 0; i < number; i++) {
    if (i === 0) {
      array.push(0);
    } else if (i == 1) {
      array.push(1);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }
  return array;
}
console.log(`Iterative method: [${fibs(8)}]`);
// Recursive method:
function fibsRecursive(number) {
  if (number == 0) {
    return [];
  } else if (number === 1) {
    return [0];
  } else if (number === 2) {
    return [0, 1];
  }
  let array = fibsRecursive(number - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}
console.log(`Recursive method: [${fibsRecursive(8)}]`);
