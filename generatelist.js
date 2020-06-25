// Creating the array
let array = Array.from(Array(10000), (value, i) => {
  // Use the map function, grabing the index , if i =0 ,it become 0+1 = 1
  return i + 1;
});

// Using the sort method to do random order
array.sort((a, b) => {
  // 0.5 - Math.random() returns negative number in 50% possibility and positive number in 50%. So it literally becomes 50:50
  //and that makes it random
  return 0.5 - Math.random();
}); // end of sort function

// Display the array in console
console.log(array);
