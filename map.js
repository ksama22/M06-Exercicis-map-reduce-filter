

console.log("1. Una funció que donat un array retorni un nou array amb l'arrel quadrada de cadascun dels valors.");
const array1 = [1, 2, 3, 4, 5, 6];
const map1 = array1.map(x => Math.sqrt(x));
console.log(map1);


console.log("2. Una funció que retorni la suma dels elements positius d'un array.");
const numList = [1, -2, 3, -4, 5, 6];
const numPositius = numList.filter(num => num > 0);
console.log(numPositius);