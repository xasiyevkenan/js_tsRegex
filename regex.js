"use strict";
//Part 1
const text =
  "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";
const regexSpain = /Spain/;
const changedText = text.match(regexSpain);
console.log(changedText);
//Part 2
const rainRegex = /rain/g;
const textMatches = [...text.matchAll(rainRegex)];
for (let i = 0; i < textMatches.length; i++) {
  console.log(textMatches[i].index);
}
//Part 3
const spainRegex = /Spain/;
const updatedText = text.replace(spainRegex, "France");
console.log(updatedText);
//Part 4
const newText = text.replaceAll(rainRegex, "sun");
console.log(updatedText);
//Part 5
const searchedWord = text.search(/plain/);
console.log(searchedWord);
