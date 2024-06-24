const studentList = ['Wasif', 'Siddiq', 'Shihab'];

console.log(studentList[0] + ' ' + studentList[1] + ' ' + studentList[2]);
console.log(studentList.length);
console.log(studentList.indexOf('Siddiq'));
studentList.push('Shihab', 'Wasif');
studentList.pop();
studentList.shift();
studentList.unshift('Wasif', 'Shihab');
console.log(studentList);