// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.

var punteggioPc = 0;
var punteggioUtente = 0;

while (punteggioPc < 4 && punteggioUtente < 4) {

  var sceltaPc = randomNumber(1, 3);
  if (sceltaPc == 1) {
    sceltaPc = 'carta';
  } else if (sceltaPc == 2) {
    sceltaPc = 'forbice';
  } else {
    sceltaPc = 'sasso';
  }
  console.log(sceltaPc);

  var sceltaUtente = prompt('Scegli carta, forbice o sasso');
  var esito = risultato(sceltaPc, sceltaUtente);
  console.log(esito);
  console.log(punteggioPc, punteggioUtente);

}

if (punteggioPc == 4) {
  alert('Hai perso. Gioca di nuovo');
} else if (punteggioUtente == 4) {
  alert('Hai vinto!');
}






// FUNZIONE GENERA NUMERO CASUALE
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNZIONE RISULTATO
function risultato(pc, utente) {
  if (pc == utente) {
    return esito = 'Pareggio';
  } else if (pc == 'carta' && utente == 'forbice') {
    punteggioUtente++;
    return esito = 'Hai vinto';
  } else if (pc == 'carta' && utente == 'sasso') {
    punteggioPc++;
    return esito = 'Hai perso';
  } else if (pc == 'forbice' && utente == 'carta') {
    punteggioPc++;
    return esito = 'Hai perso';
  } else if (pc == 'forbice' && utente == 'sasso') {
    punteggioUtente++;
    return esito = 'Hai vinto';
  } else if (pc == 'sasso' && utente == 'carta') {
    punteggioUtente++;
    return esito = 'Hai vinto';
  } else if (pc == 'sasso' && utente == 'forbice') {
    punteggioPc++;
    return esito = 'Hai perso';
  }
}
