/* Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía*/

// Solución 1 - Utilizando filter e indexOf

function prepareGifts(array) {
  let result = array.filter((value, index) => {
    return array.indexOf(value) === index;
  });
  return result.sort((a, b) => a - b);
}

// Solución 2 - Utilizando Set (más optimo)

function prepareGiftss(array) {
  const set = new Set(array);
  let result1 = [...set];
  return result1.sort((a, b) => a - b);
}

// Solución 3 - Utilizando reduce

function prepareGiftsss(array) {
  const result2 = array.reduce((accumulator, value) => {
    if (!accumulator.includes(value)) {
      accumulator.push(value);
    }
    return accumulator;
  }, []);
  return result2.sort((a, b) => a - b);
}

// Solución 4 - Utilizando bucles

function prepareGiftssss(array) {
  const array1 = [];
  const result3 = array.forEach((element) => {
    if (!array1.includes(element)) {
      array1.push(element);
    }
  });
  return array1.sort((a, b) => a - b);
}
