// Realizzare (utilizzando i cicli for) una piramide di asterischi come questa:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

//      *  5 spazi 1 asterisco
//     ***  4 spazi 3 asterischi
//    *****  3 spazi 5 asterischi
//   *******  2 spazi 7 asterischi
//  *********  1 spazio 9 asterischi
// ***********  0 spazi 11 asterischi

var n = 6;
var spazio = '&nbsp;&nbsp;';
var asterisco = '*';

// con 1 solo ciclo for
for(var i = 1; i <= n; i++) {
  var spazi = spazio.repeat(n-i);
  var asterischi = asterisco.repeat(i * 2 - 1);
  document.getElementById('piramide1').innerHTML += spazi + asterischi + '<br>';
}

// con 3 cicli for
for (var i = 0; i < n; i++) {
  var str = '';
  for (var j = 1; j < n-i; j++) {
    str += spazio;
  }

  for (var k = 1; k <= (2*i+1); k++) {
    str += asterisco;
  }
  document.getElementById('piramide2').innerHTML += str + '<br>';
}

// con 4 cicli for
for (var i = 0; i < n; i++) {
  var str1 = '';
  for (var j = n; j > i + 1; j--) {
    str1 += spazio;
  }
  for (var k = 0; k <= i; k++) {
    str1 += asterisco;
  }
  for (var l = 1; l <= i; l++) {
    str1 += asterisco;
  }
  document.getElementById('piramide3').innerHTML += str1 + '<br>';
}


// Prove

// var righe = 6;
// for (var i = 0; i < righe; i++) {
//   var content = '';
//   for (var k = righe; k > i + 1; k--) {
//     content += spazio;
//   } for (var j = 1; j <= (2 * i + 1); j++) {
//     content += asterisco;
//   }
//   document.getElementById('piramide-prova1').innerHTML += content + '<br>';
// }
//
// for (var i = 0; i < righe; i++) {
//   var content = '';
//   for (var j = 1; j < righe - i; j++) {
//     content += spazio;
//   } for (var k = 1; k <= (i * 2) + 1; k++) {
//     content += asterisco;
//   }
//   document.getElementById('piramide-prova2').innerHTML += content + '<br>';
// }
//
// for (var i = 0; i < righe; i++) {
//   var spaces = spazio.repeat(righe - i - 1);
//   var asterisks = asterisco.repeat((i * 2) + 1);
//   var riga = spaces + asterisks;
//   document.getElementById('piramide-prova3').innerHTML += riga + '<br>';
// }
