function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const diffrence = target - array[i] 
    for(let j = i + 1; j < array.length; j++) {
      if (array[j] === diffrence){
        return true
      }
  }
}
return false
}

function hasTargetSum2(array, target) {
  const seenNumbers = {};
  for(const number of array) {
    const diffrence = target - number;
    if (diffrence in seenNumbers) return true
    seenNumbers[number] = true;
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  hasTargetSum has a run time of O(n^2)
  hasTargetSum2 has a run time of O(n)
*/

/* 
  Add your pseudocode here
   1 write a function that takes in an array and target
   2 take the first number and add it to every other number in the array
   3 if no matches then take second number and add it to every other number in the array
   5 write condition to compare add values in step 3 to target number return true if numbers match'

   target - num1
   compare the diffrence to the other nums in the array if match is found return true
   5, 4, 2, 3   7
*/

/*
  Add written explanation of your solution here
  take numbers in the array and add them to each other. If any of the numbers add up to the target number then return true
   
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("=>", hasTargetSum2([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); 
  console.log("=>", hasTargetSum2([22, 19, 4, 6, 30], 25));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("=>", hasTargetSum2([1, 2, 5], 4));
  console.log("")
  
  console.log("Expecting true");
  console.log("=>", hasTargetSum([3, 1, 2, 3, 5, 7, 8], 6))
  console.log("=>", hasTargetSum2([3, 1, 2, 3, 5, 7, 8], 6))
  console.log("")

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 2, 10, 19], 5))
  console.log("=>", hasTargetSum2([1, 2, 2, 10, 19], 5))
}

module.exports = hasTargetSum;
