let evenNumber = 0;
const myArray = [10, 40, "Apple", 21, 42, 11, 56, 40, "Banana"];

let sum = 0;
for (let i = 0; i < myArray.length; i++) {
  

  if (isNaN(myArray[i])) {
    sum += myArray[i];
  } else {
    if (myArray[i] % 2 === 0) {
      evenNumber += myArray[i];
    } else (myArray[i] )
  }
}
console.log(sum);
console.log(evenNumber);
console.log(`The sum of even number is ${evenNumber}`);


