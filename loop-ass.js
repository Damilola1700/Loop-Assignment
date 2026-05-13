let evenNumber = 0;
const myArray = [10, 40, "Apple", 21, 42, 11, 56, 40, "Banana"];


for (let i = 0; i < myArray.length; i++) {
  

  if (isNaN(myArray[i])) {
    continue;
  } else {
    if (myArray[i] % 2 === 0 && myArray[i] > 20) {
      evenNumber += myArray[i];
    } 
  }
}

console.log(evenNumber);
console.log(`The sum of even number greater than 20 is ${evenNumber}`);


