// Primo snack
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

// Versione 1 con il for
var numero1;
var somma1 = 0;
// ciclo con il for
for (var i = 0; i <5; i++) {
  numero1 = parseInt(prompt('Prima somma', 'Inserisci un numero'));
  somma1 += numero1;
}
// stampa
document.getElementById('risultato-1').innerHTML = somma1;


// Versione 2 con il while
somma1 = 0;
// ciclo while
var i = 0;
while (i < 5) {
  numero1 = parseInt(prompt('Seconda somma', 'Inserisci un numero'));
  somma1 += numero1;
  i++;

}
// stampa
document.getElementById('risultato-2').innerHTML = somma1;
