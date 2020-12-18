// Snack 5.
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1 = prompt('Inserisci una parola');
var parola2 = prompt('Inserisci un\'altra parola');

// versione 1
// if (parola1.length > parola2.length) {
//   document.getElementById('parola').innerHTML = parola2;
// } else if (parola1.length < parola2.length) {
//   document.getElementById('parola').innerHTML = parola1;
// } else {
//   document.getElementById('parola').innerHTML = "Le due parole hanno uguale lunghezza";
// }

// versione 2
var messaggio = "Le due parole hanno uguale lunghezza";
if (parola1.length > parola2.length) {
  messaggio = parola2;
} else if (parola1.length < parola2.length) {
  messaggio = parola1;
}

document.getElementById('parola').innerHTML = messaggio;
