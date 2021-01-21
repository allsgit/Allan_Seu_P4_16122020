function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
// fonction edit style pour le message d'erreur

function error_msg_style() {
  // prenom
  errorMsgForFirst.style.color = 'red';
  errorMsgForFirst.style.opacity = '1';
}

function error_msg_style_last() {
  // nom
}

// ERROR MESSAGE

let errorMsgForFirst = document.getElementById('error-first');
let errorMsgForLast = document.getElementById('error-last');
let errorMsgForMail = document.getElementById('error-mail');
let errorMsgForBirth = document.getElementById('error-birth');
let errorMsgForCondition = document.getElementById('error-condition');
let errorMsgForTournament = document.getElementById(
  'error-quantityTournament'
);
let errorValidation = document.getElementById('missing-value-error');
let errorRadio = document.getElementById('error-radio');

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeCross = document.querySelector('.close');
const closeBtn = document.getElementById('close-btn');
let validationBox = document.getElementById('validation-box');

// MODAL
let formBox = document.getElementById('form-user');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const birth = document.getElementById('birthdate');
const mailAdress = document.getElementById('email');

const localisation1 = document.getElementById('location2');
const localisation2 = document.getElementById('location2');
const localisation3 = document.getElementById('location3');
const localisation4 = document.getElementById('location4');
const localisation5 = document.getElementById('location5');
const localisation6 = document.getElementById('location6');
const quantityOfTournament = document.getElementById('quantity');
const radio = document.getElementById('formData');

const condition = document.getElementById('checkbox1');
const checkBoxForNews = document.getElementsByClassName('checkbox-input');

// REGEX
let mailRegex = /[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}/;
let birthRegex = /\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])/;

// launch modal event
modalBtn.forEach(btn => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}
// Close modal Form
closeCross.addEventListener('click', function () {
  modalbg.style.display = 'none';
});

// User input validation / error message /
let checkFirst = false;
let checkLast = false;
let checkBirth = false;
let checkMail = false;
let checkTournament = false;
let radioCheck = false;

function mailTest() {
  let a = RegExp(mailRegex);
  if (a.test(mailAdress.value)) {
    console.log('je suis bon');
  } else {
    console.log('ko');
  }

  if (!mailAdress.value) {
    errorMsgForMail.innerHTML = 'veuillez renseigner votre adresse email';
    errorMsgForMail.style.color = 'red';
    errorMsgForMail.style.opacity = '1';
    console.log(mailAdress.value);
  } else if (a.test(mailAdress.value) == false) {
    errorMsgForMail.innerHTML = "merci d'indiquer une adresse mail valide";
    errorMsgForMail.style.color = 'red';
    errorMsgForMail.style.opacity = '1';
    console.log(mailAdress.value);
    console.log(mailRegex);
    console.log('je test ma regex mais false');
  } else {
    errorMsgForMail.innerHTML = '';
    errorMsgForMail.style.opacity = '0';
    checkMail = true;
    console.log(mailAdress.value);
  }
}
function birthTest() {
  console.log(birth.value);
  console.log(birthRegex);
  console.log(birthRegex.test(birth.value));
  let date = new Date().getFullYear();

  if (!birth) {
    errorMsgForBirth.innerHTML = 'veuillez renseigner votre birth';
    console.log('birth = ' + checkBirth);
  } else if (birth.value.match(birthRegex) == false) {
    errorMsgForBirth.innerHTML = "merci d'indiquer une birth valide";
    errorMsgForBirth.style.color = 'red';
    console.log('birth = ' + checkBirth);
  } else {
    errorMsgForBirth.innerHTML = '';
    errorMsgForBirth.style.display = 'none';
    checkBirth = true;
    console.log('birth = ' + checkBirth);
    console.log(date);
  }
}
function firstNameTest() {
  if (!firstName.value.length || firstName.value == null) {
    errorMsgForFirst.innerHTML = 'Veuillez indiquer votre prénom';
    errorMsgForFirst.style.opacity = '1';
    console.log('firstName = ' + checkFirst);
  } else if (firstName.value.length <= 1) {
    errorMsgForFirst.innerHTML =
      ' Le Prénom doit comporter 2 caractères au minimum';
    error_msg_style();
    console.log('firstName = ' + checkFirst);
  } else {
    errorMsgForFirst.innerHTML = '';
    // errorMsgForFirst.style.display = "none";
    console.log('firstName = ' + checkFirst);
    checkFirst = true;
  }
}
function lastNameTest() {
  if (!lastName.value.length || lastName.value == null) {
    errorMsgForLast.style.color = 'red';
    errorMsgForLast.style.opacity = '1';
    errorMsgForLast.innerHTML = 'Veuillez renseigner votre nom';
    console.log('lastName = ' + checkLast);
  } else if (lastName.value.length <= 1) {
    errorMsgForLast.innerHTML =
      ' Le nom doit comporter 2 caractères au minimum';
    errorMsgForLast.style.color = 'red';
    errorMsgForLast.style.opacity = '1';
    console.log('lastName = ' + checkLast);
  } else {
    errorMsgForLast.innerHTML = '';
    //errorMsgForLast.style.display = "none"
    console.log('lastName = ' + checkLast);
    checkLast = true;
  }
}
function tournamentTest() {
  if (!quantityOfTournament.value || quantityOfTournament.value.length == 0) {
    errorMsgForTournament.innerHTML =
      'veuillez indiquer le nombre de tournoi effectués';
    errorMsgForTournament.style.color = 'red';
    console.log('tournament = ' + checkTournament);
  } else if (quantityOfTournament.value >= 0) {
    errorMsgForTournament.innerHTML = '';
    checkTournament = true;
    console.log('tournament = ' + checkTournament);
  }
  console.log(quantityOfTournament.value + 'value');
  console.log(quantityOfTournament.value.length + 'value lenght');
}
function IsRadioCheck(e) {
  if (e.target != e.currentTarget) {
    let clickItem = e.target.id;
    radioCheck = true;
    errorRadio.style.display = 'none';
  }
}
function conditionTest() {
  if (condition.checked) {
    checkCondition = true;
    console.log('c chk');
    errorMsgForCondition.style.opacity = '0';
    errorMsgForCondition.innerHTML = '';
  } else {
    checkCondition = false;
    console.log('pachk');
    errorMsgForCondition.innerHTML =
      "Vous devez accepter les conditions d'utilisations";
    errorMsgForCondition.style.opacity = '1';
    errorMsgForCondition.style.color = 'red';
  }
}

firstName.addEventListener('input', function () {
  firstNameTest();
});
lastName.addEventListener('input', function () {
  lastNameTest();
});
mailAdress.addEventListener('input', function () {
  mailTest();
});
birth.addEventListener('input', function () {
  birthTest();
});
quantityOfTournament.addEventListener('input', function () {
  tournamentTest();
});
radio.addEventListener('change', IsRadioCheck, false);

condition.addEventListener('change', function () {
  conditionTest();
});

//prevent default - keep data when wrong validation
formBox.addEventListener('submit', function (e) {
  e.preventDefault();
  validate();
});

// On submit validation checkin function //
function validate() {
  firstNameTest();
  lastNameTest();
  mailTest();
  tournamentTest();

  // ONE FIELD IS MISSING OR WRONG //

  if (
    checkFirst == false ||
    checkLast == false ||
    checkTournament == false ||
    checkMail == false ||
    checkBirth == false ||
    radioCheck == false
  ) {
    errorValidation.innerHTML = 'Tout les champs doivent être renseignés';
    errorValidation.style.opacity = 1;
    errorValidation.style.color = 'red';
    errorValidation.style.animation = 'slide 0.5s ease-out forwards';
    console.log(radioCheck);
    errorRadio.innerHTML = 'Veuillez selectionner une ville';
  }

  if (
    checkFirst == true &&
    checkLast == true &&
    checkTournament == true &&
    checkMail == true &&
    checkBirth == true &&
    radioCheck == true
  ) {
    console.log('test ok');
    formBox.style.display = 'none';

    validationBox.style.display = 'block';
    validationBox.style.height = '200px';
    validationBox.innerHTML = 'Votre inscription a été validée merci ! ';

    closeBtn.style.display = 'block';
    closeBtn.addEventListener('click', function () {
      modalbg.style.display = 'none';
    });
  }
}
