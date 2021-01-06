// 1. Realizziamo il classico gioco indovina numero in JavaScript
// Occorre indovinare un numero casuale compreso tra 1 e 100, generato dal computer.
// Il giocatore ha a disposizione 4 tentativi. Quando sbaglia gli verrà detto se il numero da indovinare è più alto oppure più basso.
// Bonus: provate 3 livelli di complessità



  var btnNumeroCasuale = document.getElementById("difficolta");
  btnNumeroCasuale.addEventListener('click',
  function() {

    document.getElementById('container').className = 'show';

    var difficolta = document.getElementById('difficolta').value;
    console.log(difficolta);

    switch (difficolta) {

      case 'difficile':
      numeroCasuale = randomNumbers(1, 100);
      console.log(numeroCasuale);
      document.getElementById('range-numeri').innerHTML = 'da 1 a 100';
      break;

      case 'normale':
      numeroCasuale = randomNumbers(1, 50);
      console.log(numeroCasuale);
      document.getElementById('range-numeri').innerHTML = 'da 1 a 50';
      break;

      case 'facile':
      numeroCasuale = randomNumbers(1, 20);
      console.log(numeroCasuale);
      document.getElementById('range-numeri').innerHTML = 'da 1 a 20';
      break;

      default:
      alert('Inserisci un valore da 1 a 3');

    }

  });



  var i = 0;


  var btnGioca = document.getElementById("btn");
  btnGioca.addEventListener('click',
  function() {

    numeroUtente = document.getElementById('numero').value;
    numeroUtente = parseInt(numeroUtente);
    console.log(numeroUtente, 'numeroutente');
    i++;

    if (numeroUtente == numeroCasuale) {
      alert('Complimenti, hai indovinato in ' + i + ' tentativi! Gioca di nuovo');
      document.getElementById('container').className = 'hide';
      document.getElementById('numero').value ='';
      document.getElementById('tentativi').innerHTML ='Hai 4 tentativi per indovinare.';
      document.getElementById('suggerimento').innerHTML = 'Se sbagli ti daremo un piccolo suggerimento.';
      i = 0;

    } else if (numeroUtente != numeroCasuale && i == 4) {
      // document.getElementById('tentativi').innerHTML = 'Tentativi esauriti, hai perso :(';
      alert('Tentativi esauriti, hai perso. Gioca di nuovo!');
      document.getElementById('container').className = 'hide';
      document.getElementById('numero').value ='';
      document.getElementById('tentativi').innerHTML ='Hai 4 tentativi per indovinare.';
      document.getElementById('suggerimento').innerHTML = 'Se sbagli ti daremo un piccolo suggerimento.';
      i = 0;

    } else {
      document.getElementById('tentativi').innerHTML = 'Non hai indovinato. Hai ancora ' + (4 - i) + ' tentativi.';
      document.getElementById('numero').value ='';

        if (numeroUtente < numeroCasuale) {
        document.getElementById('suggerimento').innerHTML = 'Scegli un numero più grande';
        } else {
        document.getElementById('suggerimento').innerHTML = 'Scegli un numero più piccolo';
        }
    }
  });







  // FUNZIONE GENERA NUMERO CASUALE
  function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
