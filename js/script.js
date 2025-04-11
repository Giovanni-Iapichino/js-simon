//! Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
//! Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
//! Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
//? NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
//todo BONUS:
//todo - Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
//todo - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

//* RECUPERO ELEMENTI DAL DOM
const formEl = document.getElementById(`answers-form`);
const inputEl = document.getElementById(`input-group`);
const countdownEl = document.getElementById(`countdown`);
const numberListEl = document.getElementById(`numbers-list`);
const messageEl = document.getElementById(`message`);
const instructionEl = document.getElementById(`instruction`);
const buttonEl = document.querySelector(`button`);

//* DEFINIZIONE VARIABILI
const min = 1;
const max = 50;
const totalNumbers = 5;
let time = 30;
let numbers;
let li = ``;

//* INIZIALIZZAZIONE DELLE FUNZIONI
const generateRandomNumbers = (min, max, tot) => {
  const arrayNumbers = [];
  for (let i = 0; i < tot; i++) {
    let randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
    arrayNumbers.push(randomNumbers);
  }
  return arrayNumbers;
};

//* FUNZIONE PER CREARE LA LISTA DEI NUMERI
numbers = generateRandomNumbers(min, max, totalNumbers);
console.log(numbers);

//* MOSTRO I NUMERI IN PAGINA
numberListEl.innerText = numbers.join(" ");

//* FUNZIONE PER CREARE GLI INPUT
countdownEl.innerText = time;

const timer = setInterval(() => {
  time--;
  countdownEl.innerText = time;

  if (time === 0) {
    clearInterval(timer);

    //* NASCONDO I NUMERI E MOSTRO IL FORM
    numberListEl.classList.add("d-none");
    formEl.classList.remove("d-none");
    instructionEl.innerText =
      "Inserisci i numeri che ricordi (in qualsiasi ordine)";
  }
}, 1000);
