/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const a = 5;
const b = 15;

if (a > b) {
  console.log("a è maggiore");
} else if (a < b) {
  console.log("b è maggiore");
} else {
  console.log("i numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const c = 12;

if (c !== 5) {
  console.log("Not Equal");
} else {
  console.log("Equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const d = 50;

if (d % 5 === 0) {
  console.log("Divisibile per 5!");
} else {
  console.log("Non Divisibile per 5!");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 16;
const y = 8;

if (x || y === 8) {
  console.log("uno è uguale a 8");
} else {
  console.log("nessuno è uguale a 8");
}

if (x + y || x - y === 8) {
  if (x + y === 8) {
    console.log("l'addizione è 8");
  } else {
    console.log("l'addizione non è 8");
  }
  if (x - y === 8) {
    console.log("la sottrazione è 8");
  } else {
    console.log("la sottrazione non è 8");
  }
} else {
  console.log("Nessuna operazione è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = 55;
const shippingCost = 10;

if (totalShoppingCart >= 50) {
  console.log("Free Shipping");
} else {
  console.log(totalShoppingCart + shippingCost);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const blackFriday = 0.2;
const discount = totalShoppingCart * blackFriday;

if (totalShoppingCart - discount >= 50) {
  console.log("Free Shipping");
} else {
  console.log(totalShoppingCart - discount + shippingCost);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 100;
const num2 = 150;
const num3 = 250;

// num1 num2 num3*     num1 num3 num2*    num2 num1 num3    num2 num3 num1   num3 num1 num2*   num3 num2 num1

if (num1 > num2) {
  if (num1 > num3) {
    if (num2 > num3) {
      console.log("num1 num2 num3");
    } else {
      console.log("num1 num3 num2");
    }
  } else {
    console.log("num3 num1 num2");
  }
} else {
  if (num2 > num3) {
    if (num1 > num3) {
      console.log("num2 num1 num3");
    } else {
      console.log("num2 num3 num1");
    }
  } else {
    console.log("num3 num2 num1");
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (typeof num1 === "number") {
  console.log("è un numero!");
} else {
  console.log("Non è un numero");
}

const string = "string";

if (typeof string === "number") {
  console.log("è un numero!");
} else {
  console.log("Non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const evenOrOdd = 17;

if (evenOrOdd % 2 === 0) {
  console.log("Even!");
} else {
  console.log("Odd!");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 5) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let emptyArray = [];

emptyArray.push(1);
emptyArray.push(2);
emptyArray.push(3);
emptyArray.push(4);
emptyArray.push(5);
emptyArray.push(6);
emptyArray.push(7);
emptyArray.push(8);
emptyArray.push(9);
emptyArray.push(10);

console.log(emptyArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

emptyArray.pop();
emptyArray.push(100);

console.log(emptyArray);
