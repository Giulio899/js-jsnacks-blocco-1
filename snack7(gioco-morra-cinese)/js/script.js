// Realizziamo il gioco della morra cinese in JavaScript. Vince chi totalizza per primo 4 punti.

var punteggioPc = 0;
var punteggioGiocatore = 0;

var sceltaPc;




var sceltaUtente;
var esito;

document.getElementById('btn-carta').onclick = function() {
  document.getElementById('container-risultato').className = 'show';
  sceltaUtente = 'Carta';
  console.log(sceltaUtente);
  document.getElementById('scelta-giocatore').innerHTML = sceltaUtente;
  sceltaPc = randomNumber(1, 3);
  document.getElementById('scelta-pc').innerHTML = sceltaPc;
  esito = risultato(sceltaPc, sceltaUtente); document.getElementById('risultato').innerHTML = esito;
  document.getElementById('punteggio-pc').innerHTML = punteggioPc;
  document.getElementById('punteggio-giocatore').innerHTML = punteggioGiocatore;
  dichiaraVincitore();
};

document.getElementById('btn-forbice').onclick = function() {
  document.getElementById('container-risultato').className = 'show';
  sceltaUtente = 'Forbice';
  console.log(sceltaUtente);
  document.getElementById('scelta-giocatore').innerHTML = sceltaUtente;
  sceltaPc = randomNumber(1, 3);
  document.getElementById('scelta-pc').innerHTML = sceltaPc;
  esito = risultato(sceltaPc, sceltaUtente);
  document.getElementById('risultato').innerHTML = esito;
  document.getElementById('punteggio-pc').innerHTML = punteggioPc;
  document.getElementById('punteggio-giocatore').innerHTML = punteggioGiocatore;
  dichiaraVincitore();
};

document.getElementById('btn-sasso').onclick = function() {
  document.getElementById('container-risultato').className = 'show';
  sceltaUtente = 'Sasso';
  console.log(sceltaUtente);
  document.getElementById('scelta-giocatore').innerHTML = sceltaUtente;
  sceltaPc = randomNumber(1, 3);
  document.getElementById('scelta-pc').innerHTML = sceltaPc;
  esito = risultato(sceltaPc, sceltaUtente);
  document.getElementById('risultato').innerHTML = esito;
  document.getElementById('punteggio-pc').innerHTML = punteggioPc;
  document.getElementById('punteggio-giocatore').innerHTML = punteggioGiocatore;
  dichiaraVincitore();
};



//
//
//
//
//
//
// FUNZIONE GENERA NUMERO CASUALE E LO ASSOCIA A CARTA, FPRBICE O SASSO
function randomNumber(min, max) {
  sceltaPc = Math.floor(Math.random() * (max - min + 1)) + min;

  if (sceltaPc == 1) {
    sceltaPc = 'Carta';
    return sceltaPc;
  } else if (sceltaPc == 2) {
    sceltaPc = 'Forbice';
    return sceltaPc;
  } else {
    sceltaPc = 'Sasso';
    return sceltaPc;
  }
  console.log(sceltaPc);
}

// FUNZIONE RISULTATO
function risultato(pc, utente) {
  if (pc == utente) {
    return esito = 'Pareggio';
  } else if (pc == 'Carta' && utente == 'Forbice') {
    punteggioGiocatore++;
    return esito = 'Hai vinto';
  } else if (pc == 'Carta' && utente == 'Sasso') {
    punteggioPc++;
    return esito = 'Hai perso';
  } else if (pc == 'Forbice' && utente == 'Carta') {
    punteggioPc++;
    return esito = 'Hai perso';
  } else if (pc == 'Forbice' && utente == 'Sasso') {
    punteggioGiocatore++;
    return esito = 'Hai vinto';
  } else if (pc == 'Sasso' && utente == 'Carta') {
    punteggioGiocatore++;
    return esito = 'Hai vinto';
  } else if (pc == 'Sasso' && utente == 'Forbice') {
    punteggioPc++;
    return esito = 'Hai perso';
  }
}

// FUNZIONE DICHIARA VINCITORE
function dichiaraVincitore() {
  if (punteggioPc == 4) {
    alert('Hai perso ' + punteggioPc + ' a ' + punteggioGiocatore + '. Gioca di nuovo!');
    document.getElementById('scelta-giocatore').innerHTML = "";
    document.getElementById('scelta-pc').innerHTML = "";
    document.getElementById('risultato').innerHTML = "";
    document.getElementById('punteggio-pc').innerHTML ="0";
    document.getElementById('punteggio-giocatore').innerHTML = "0";
    document.getElementById('container-risultato').className = 'hide';
    punteggioPc = 0;
    punteggioGiocatore = 0;
  } else if (punteggioGiocatore == 4) {
    alert('Hai vinto ' + punteggioGiocatore + ' a ' + punteggioPc + '!');
    document.getElementById('scelta-giocatore').innerHTML = "";
    document.getElementById('scelta-pc').innerHTML = "";
    document.getElementById('risultato').innerHTML = "";
    document.getElementById('punteggio-pc').innerHTML ="0";
    document.getElementById('punteggio-giocatore').innerHTML = "0";
    document.getElementById('container-risultato').className = 'hide';
    punteggioPc = 0;
    punteggioGiocatore = 0;
  }
}
// document.getElementById("hello").attributes["name"].value;
