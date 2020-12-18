// Snack 4.
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var numero1 = parseInt(prompt('Inserisci un numero'));
var numero2 = parseInt(prompt('Inserisci un altro numero'));

if (numero1 > numero2) {
  document.getElementById('numero-maggiore').innerHTML = numero1;
} else {
  document.getElementById('numero-maggiore').innerHTML = numero2;
}
