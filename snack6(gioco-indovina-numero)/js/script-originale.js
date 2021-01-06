// 1. Realizziamo il classico gioco indovina numero in JavaScript
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.
// Bonus: provate 3 livelli di complessità

var difficolta = parseInt(prompt('Indica una difficoltà da 1 a 3', 'Scrivi 1, 2 o 3'));

while (difficolta < 1 || difficolta > 3) {
  difficolta = parseInt(prompt('Hai inserito un valore non corretto', 'Scrivi 1, 2 o 3'));
}

switch (difficolta) {
  case 1:
    var numeroCasuale = randomNumbers(1, 100);
    console.log(numeroCasuale);

    break;

  case 2:
    var numeroCasuale = randomNumbers(1, 50);
    console.log(numeroCasuale);

    break;

  case 3:
    var numeroCasuale = randomNumbers(1, 20);
    console.log(numeroCasuale);

    break;

  default:
    alert('Inserisci un valore da 1 a 3');

}



var sentinella = true;

var i = 0;
while (i < 4 && sentinella) {
  var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 100'));
  if (numeroUtente == numeroCasuale) {
    alert('Complimenti, hai indovinato!');
    sentinella = false;
  } else if (numeroUtente != numeroCasuale && i == 3) {
    alert('Hai perso');
    i++;
  }
  else {
    alert('Non hai indovinato. Hai ancora ' + (3 - i) + ' tentativi. Clicca OK per avere un piccolo suggerimento');
    if (numeroUtente < numeroCasuale) {
      alert('Scegli un numero più grande');
    } else {
      alert('Scegli un numero più piccolo');
    }
    i++;
  }

}


// FUNZIONE GENERA NUMERO CASUALE
function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
