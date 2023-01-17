//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve
// la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 
//Haz varios ejemplos y compruebalos.

const ejemplo1 = [
    'manzana',
    'fresa',
    'piña',
    'melocoton',
];

const texto = 'piña';
function findArrayIndex(array, text) {
    let index;
    for (let i = 0; i < array.length; i++){
        if(text == array[i]){
            index = i;
           }
    }
 return index;
}
console.log(findArrayIndex(ejemplo1, texto));

