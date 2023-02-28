
//1. Una funció que donat un array retorni un nou array amb l'arrel quadrada de cadascun dels valors.
console.log("1. Una funció que donat un array retorni un nou array amb l'arrel quadrada de cadascun dels valors.");
let array1 = [1, 2, 3, 4, 5, 6];
let map1 = array1.map(x => Math.sqrt(x));
console.log(map1);

//2. Una funció que retorni la suma dels elements positius d'un array.
console.log("Una funció que retorni la suma dels elements positius d'un array.");
let array2 = [1, -2, 3, -4, 5, 6];
let sumaPositius = array2.filter(num => num > 0).reduce((a, b) => a + b);;
console.log(sumaPositius);

//3. Una funció que calculi el factorial d'un número.
console.log("3. Una funció que calculi el factorial d'un número.");
let factorialDe = 5;
let numeros3 = Array.from({ length: factorialDe }, (_, i) => i + 1);
var factorial = numeros3.reduce((a, b) => a * b, 1);
console.log(factorial);

//4. Una funció que et retorni la mida de cada array en un array d'arrays
console.log("4. Una funció que et retorni la mida de cada array en un array d'arrays");
let array4 = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
let lengthPorArray = array4.map(subarray => subarray.length);
console.log(lengthPorArray);

//5.  Donat el següent array, volem que ens retorni els noms dels treballadors del deparatament IT que cobren menys de 60000
console.log("5. Donat el següent array, volem que ens retorni els noms dels treballadors del deparatament IT que cobren menys de 60000");
let employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];

let salaryMaxim = 60000;
let departament = "IT";
let filtrados = employees.filter(objeto => objeto.department === departament && objeto.salary < salaryMaxim);
let nombres = filtrados.map(objeto => objeto.name);
console.log(nombres);