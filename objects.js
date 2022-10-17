'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  const words = phrase.split(' ');
  console.log("WORDS: ", words);
  
  const wordCounts = {};
  for (const word of words) {
    if (word in wordCounts) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  // console.log("Word count", wordCounts);
}

// countWords("the quick brown fox jump over the brown fence");

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code

  let melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }

  // melon_prices[5.50] ==> undefined
  // if (num(melon_prices[price]) !== price){
  //   return null
  // } else{
    if (melon_prices.hasOwnProperty(price)) {
      return melon_prices[price];
    } 
    
    return null
}

console.log(getMelonsAtPrice(3.25));
