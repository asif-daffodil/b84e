function sumThreeNumbers (a, b, c) {
  return a + b + c;
}


function findSmallestElement (arr) {
  return Math.min(...arr);
}


function countCharacters (str) {
  return str.length;
}


function sumArrayElements (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiplyArrayElements (arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
}
