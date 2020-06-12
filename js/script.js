var numeroElementiDaIndovinare = 5;
//genero i numeri casuali
var array = genera(numeroElementiDaIndovinare);
console.log(array);
var secondi = 30;
//alert numeri casuali
alert('I numeri sono ' + array);
//avvio timeout ed eseguo il programma
timeout(secondi,array,numeroElementiDaIndovinare);



//funzione che genera numeri casuali
//Parametro: numeri di elementi nell'arrayDue
//Return: array
function genera(numero){
 var array = [];
 for (var i = 0; i < 5; i++) {
   array.push(Math.floor(Math.random() * 100 ) +1);
 }
 return array;
}


//funzione che gestisce timeout e programma che segue
//Parametri:
//--> secondi di durata
//--> array con numeri da individuare
//-->numero elementi da individuare
function timeout(secondi,array,numero){
  var milliSecondi = secondi * 1000;
  setTimeout(function () {
    var numeriScelti = [];
    var numeriIndividuati = [];
    //gestisco cosa succede terminato il tempo
    //faccio inserire all'utente i numeri
    for (var i = 0; i < numero; i++) {
      numeriScelti.push(parseInt(prompt('Inserisci uno dei numeri')));
    }
    console.log(numeriScelti);
    console.log(array);
    //controllo quanti numeri ha indovinato
    for (var i = 0; i < numero; i++) {
      console.log(array.indexOf(numeriScelti[i]));
      //se il numero è giusto
      if (array.indexOf(numeriScelti[i]) >= 0) {
        //inserisco il numero in array con i numeri indovinati
        numeriIndividuati.push(numeriScelti[i]);
        //metto un valore di default al posto del numero trovato per avere un risultato corretto
        array[array.indexOf(numeriScelti[i])] = 0;
      }
    }
    console.log(array);
    console.log('Hai indovinato ' + numeriIndividuati.length + ' che sono: ' + numeriIndividuati);
  }, milliSecondi);
}
