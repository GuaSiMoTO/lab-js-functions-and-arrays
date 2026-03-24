// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    // if (num1 > num2) return num1;
    // else return num2;
    return num1>num2 ? num1: num2; //solución con terciarios

    // resultado con librerías
    //return Math.max(a,b);

}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {

   
    if (array.length === 0) return null; // if (!array.length) return null; en JS se hace con la !
    
    // sin .reduce()
    // let palabraLarga = array[0]
    // for (let i = 1; i < array.length; i++) {
    //     if(array[i].length > palabraLarga.length) palabraLarga = array[i];
    // return palabraLarga;    

    //usando .reduce()
    return array.reduce((palabraLarga, current) =>
        current.length > palabraLarga.length ? current : palabraLarga);

}


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    
    if (!array.length) return 0; // si el array está vació devuelve 0

    // sin .reduce()
    // let sum = 0;
    // for (let i=0; i<array.length; i++) sum += array[i];
    // return sum;

    //con .reduce()
    return array.reduce((sum, num) => sum += num, 0); 
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numeros) {
    // usando sumNumbers() y con terciario
    //return numeros.length === 0 ? 0 : sumNumbers(numeros) / numeros.length;

    //sin usar sunMumbers()  ni .reduce() ni terciario

    let sum =0;
    if (numeros.length !== 0) {
        for (let i=0; i < numeros.length; i++) {
            sum += numeros[i];
        }
        return sum / numeros.length;
    } else {
        return 0;
    }

    // usando .reduce() y con terciario
    //return numeros.reduce((sum, num) => sum += num, 0);
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(palabras, palabraAbuscar) {
    
    if(!palabras.length) return null; //si el array está vacío devuelvo null
    
    // solución básica con for-if
    for (let i = 0; i < palabras.length; i++) {
        if (palabraAbuscar === palabras[i]) return true;
    }
    return false;

    //con .reduce()
    //return palabras.reduce((encontrado, palabra) => encontrado || palabra === palabraAbuscar , false);

    //usando .includes()
    //return palabras.includes(palabraAbuscar);

}
