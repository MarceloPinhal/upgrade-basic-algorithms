const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

avengers[0]="IRONMAN";
console.log(avengers);

console.log(avengers.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty","Summer");
console.log(rickAndMortyCharacters[4]);

const rickAndMortyCharactersTwo = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharactersTwo.pop()
console.log(rickAndMortyCharactersTwo[0],rickAndMortyCharactersTwo[4]);

const rickAndMortyCharactersThree = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharactersThree.splice(1,1);
console.log(rickAndMortyCharactersThree);
