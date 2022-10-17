'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items){
  //  console.log(item[i], i)
  }
}
printIndices(["apple", "berry", "cherry"])

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
}

// 3. smallestNItems
function smallestNItems(items, n){
  // Replace this with your code
  // let sorted = items.sort((a,b) => a-b);
  //console.log(sorted)
  items.sort((a, b) => a - b);
  const sliced = items.slice(0, n)
  console.log(items, sliced)
}

smallestNItems([10, 8, 20, 3], 2)