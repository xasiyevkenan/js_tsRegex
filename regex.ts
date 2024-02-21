//Part 1
const text: string = "The rain in Spain stays mainly in the plain. In Spain, in April, the rain is a pain.";

const regexSpain: RegExp = /Spain/;

const changedText: RegExpMatchArray | null = text.match(regexSpain)!;

console.log(changedText);


//Part 2
const rainRegex: RegExp = /rain/g;

const textMatches: RegExpMatchArray[] | null = [...text.matchAll(rainRegex)];

for (let i: number = 0; i < textMatches.length; i++) {
    console.log(textMatches[i].index);
}

//Part 3
const spainRegex: RegExp = /Spain/;
const updatedText: string | null = text.replace(spainRegex, "France");

console.log(updatedText);

//Part 4
const newText: string = text.replaceAll(rainRegex, 'sun');

console.log(updatedText);

//Part 5
const searchedWord: number | null = text.search(/plain/);

console.log(searchedWord);
