/*Rewrite the code so the global array bookList is not 
changed inside either function. The add function should 
add the given bookName to the end of the array passed to 
it and return a new array (list). The remove function 
should remove the given bookName from the array passed 
to it.*/


// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(arr, bookName) {

  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(arr, bookName) {
  let newArr = [...arr]
  if (newArr.indexOf(bookName) >= 0) {

    newArr.splice(newArr.indexOf(bookName), 1)
    return newArr;

    // Cambia el código encima de esta línea
    }
}