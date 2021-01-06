// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

var insiemeNumeri = [];
var numeroUtente;
var somma = 0;

var i = 0;
// opzione 1 con while
// while (somma < 50) {
//   numeroUtente = parseInt(prompt('Inserisci un numero'));
//   insiemeNumeri.push(numeroUtente);
//   console.log(insiemeNumeri, 'Insieme Numeri');
//   somma += insiemeNumeri[i];
//   console.log(somma, 'Somma');
//   i++;
// }

// alert('Stop! La somma dei numeri inseriti è ' + somma);

// opzione 2 con do while
do {
  numeroUtente = parseInt(prompt('Inserisci un numero'));
  console.log(numeroUtente, 'numero utente');
  insiemeNumeri.push(numeroUtente);
  console.log(insiemeNumeri, 'Array Numeri');
  somma += insiemeNumeri[i];
  console.log(somma, 'somma');
  i++;
} while (somma < 50);

alert('La somma dei numeri inseriti è ' + somma);
