//Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función
// deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna 
//el array resultante.
 const futbol = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap (array, posicion1, posicion2){
    let elemento1 = array[posicion1];
    let elemento2 = array[posicion2];
    array[posicion1] = elemento2;
    array[posicion2] = elemento1;
    return array;
}
console.log(swap(futbol, 2,3));