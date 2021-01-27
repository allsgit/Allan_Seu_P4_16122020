function editNav () {
  var x = document.getElementById ('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// ERROR MESSAGE
let errorMsgForFirst = document.getElementById ('error-first');
let errorMsgForLast = document.getElementById ('error-last');
let errorMsgForMail = document.getElementById ('error-mail');
let errorMsgForBirth = document.getElementById ('error-birth');
let errorMsgForCondition = document.getElementById ('error-condition');
let errorMsgForTournament = document.getElementById ('error-quantityTournament');
let errorValidation = document.getElementById ('missing-value-error');
let errorRadio = document.getElementById ('error-radio');

// DOM Elements
const modalbg = document.querySelector ('.bground');
const modalBtn = document.querySelectorAll ('.modal-btn');
const formData = document.querySelectorAll ('.formData');
const closeBtn = document.getElementById ('close-btn');
// MODAL
let formBox = document.getElementById ('form-user');

// launch modal event
modalBtn.forEach (btn => btn.addEventListener ('click', launchModal));

// launch modal form
function launchModal () {
  modalbg.style.display = 'block';
}
// User input validation / error message /
let checkFirst = false;
let checkLast = false;
let checkBirth = false;
let checkMail = false;
let checkTournament = false;
let radioCheck = false;

// HERE IS THE CLOSE BUTTON OF MODAL ***
const closeCross = document.querySelector ('.close');
closeCross.addEventListener ('click', function () {
  modalbg.style.display = 'none';
});

// HERE IS FIRSTNAME FIELD
const firstName = document.getElementById ('first');
firstName.addEventListener ('input', function () {
  firstNameTest ();
});
function firstNameTest () {
  if (!firstName.value.length || firstName.value == null) {
    errorMsgForFirst.innerHTML = 'Veuillez indiquer votre prénom';
    errorMsgForFirst.style.opacity = '1';
    console.log ('firstName = ' + checkFirst);
  } else if (firstName.value.length <= 1) {
    errorMsgForFirst.innerHTML =
      ' Le Prénom doit comporter 2 caractères au minimum';
    errorMsgForFirst.style.color = 'red';
    errorMsgForFirst.style.opacity = '1';
    console.log ('firstName = ' + checkFirst);
  } else {
    errorMsgForFirst.innerHTML = '';
    // errorMsgForFirst.style.display = "none";
    console.log ('firstName = ' + checkFirst);
    checkFirst = true;
  }
}

// HERE IS LASTNAME FIELD
const lastName = document.getElementById ('last');
lastName.addEventListener ('input', function () {
  lastNameTest ();
});
function lastNameTest () {
  if (!lastName.value.length || lastName.value == null) {
    errorMsgForLast.style.color = 'red';
    errorMsgForLast.style.opacity = '1';
    errorMsgForLast.innerHTML = 'Veuillez renseigner votre nom';
    console.log ('lastName = ' + checkLast);
  } else if (lastName.value.length <= 1) {
    errorMsgForLast.innerHTML =
      ' Le nom doit comporter 2 caractères au minimum';
    errorMsgForLast.style.color = 'red';
    errorMsgForLast.style.opacity = '1';
    console.log ('lastName = ' + checkLast);
  } else {
    errorMsgForLast.innerHTML = '';
    //errorMsgForLast.style.display = "none"
    console.log ('lastName = ' + checkLast);
    checkLast = true;
  }
}

// HERE IS MAIL ADRESS FIELD
const mailAdress = document.getElementById ('email');
let mailRegex = /[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}/;
mailAdress.addEventListener ('input', function () {
  mailTest ();
});
function mailTest () {
  let regexMailObj = RegExp (mailRegex);

  if (!mailAdress.value) {
    errorMsgForMail.innerHTML = 'veuillez renseigner votre adresse email';
    errorMsgForMail.style.color = 'red';
    errorMsgForMail.style.opacity = '1';
    console.log (mailAdress.value);
  } else if (regexMailObj.test (mailAdress.value) == false) {
    errorMsgForMail.innerHTML = "merci d'indiquer une adresse mail valide";
    errorMsgForMail.style.color = 'red';
    errorMsgForMail.style.opacity = '1';
  } else {
    errorMsgForMail.innerHTML = '';
    errorMsgForMail.style.opacity = '0';
    checkMail = true;
    console.log (mailAdress.value);
  }
}

// HERE IS BIRTH FIELD
const birth = document.getElementById ('birthdate');
let birthRegex = /\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])/;
birth.addEventListener ('input', function () {
  birthTest ();
});
function birthTest () {
  let regexBirthObj = RegExp (birthRegex);
  let date1 = new Date (birth.value);
  let date2 = new Date ();
  let date3 = new Date ('1900-01-01 00:00:00');
  date2.setFullYear (date2.getFullYear () - 16);

  if (date1 < date2) {
    console.log ("l'année récupérée est inférieur à maintenant - 16");
  } else {
    console.log ("ici on a pas le droit de s'inscrire");
  }

  if (birth.value == '') {
    errorMsgForBirth.innerHTML = 'veuillez renseigner votre date de naissance';
    errorMsgForBirth.style.opacity = '1';
    console.log ('birth = ' + checkBirth);
  } else if (regexBirthObj.test (birth.value) == false) {
    errorMsgForBirth.innerHTML = "merci d'indiquer une date de naissance valide";
    errorMsgForBirth.style.color = 'red';
    console.log ('birth = ' + checkBirth);
  } else if (date1 < date3) {
    errorMsgForBirth.innerHTML =
      "votre age doit être compris entre 1900 et aujourd'hui";
    errorMsgForBirth.style.color = 'red';
  } else if (date1 > date2) {
    errorMsgForBirth.innerHTML = "Vous devez avoir 16 ans au minimum pour vous inscrire";
    errorMsgForBirth.style.color = 'red';
  } else if (date1 < date2 && date1 > date3) {
    errorMsgForBirth.innerHTML = '';
    errorMsgForBirth.style.display = 'none';
    checkBirth = true;
    console.log ('birth = ' + checkBirth);
  }
}

// HERE IS QUANTITY OF TOURNAMENT
const quantityOfTournament = document.getElementById ('quantity');
quantityOfTournament.addEventListener ('input', function () {
  tournamentTest ();
});
function tournamentTest () {
  if (!quantityOfTournament.value || quantityOfTournament.value.length == 0) {
    errorMsgForTournament.innerHTML =
      'veuillez indiquer le nombre de tournoi effectués';
    errorMsgForTournament.style.color = 'red';
    console.log ('tournament = ' + checkTournament);
  } else if (quantityOfTournament.value >= 0) {
    errorMsgForTournament.innerHTML = '';
    checkTournament = true;
    console.log ('tournament = ' + checkTournament);
  }
  console.log (quantityOfTournament.value + 'value');
  console.log (quantityOfTournament.value.length + 'value lenght');
}

// HERE IS RADIO LOCALISATION
const localisation1 = document.getElementById ('location2');
const localisation2 = document.getElementById ('location2');
const localisation3 = document.getElementById ('location3');
const localisation4 = document.getElementById ('location4');
const localisation5 = document.getElementById ('location5');
const localisation6 = document.getElementById ('location6');
const radio = document.getElementById ('formData');
radio.addEventListener ('change', IsRadioCheck, false);
function IsRadioCheck (e) {
  if (e.target != e.currentTarget) {
    let clickItem = e.target.id;
    radioCheck = true;
    errorRadio.style.display = 'none';
  }
}

// HERE IS CONDITION CHECKBOX
const condition = document.getElementById('checkbox1')
condition.addEventListener ('change', function () {
  conditionTest ();
});
function conditionTest () {
  if (condition.checked) {
    checkCondition = true;
    console.log ('condition check');
    errorMsgForCondition.style.opacity = '0';
    errorMsgForCondition.innerHTML = '';
  } else {
    checkCondition = false;
    console.log ('condition pas check');
    errorMsgForCondition.innerHTML =
      "Vous devez accepter les conditions d'utilisations";
    errorMsgForCondition.style.opacity = '1';
    errorMsgForCondition.style.color = 'red';
  }
}

// HERE IS PREVENT DEFAULT OF MODAL TO KEEP USER INFO ON VALIDATION
formBox.addEventListener ('submit', function (e) {
  e.preventDefault ();
  validate ();
});

// ON SUBMIT CHECK 
function validate () {
  let validationBox = document.getElementById ('validation-box');
  
  firstNameTest ();
  lastNameTest ();
  birthTest ();
  mailTest ();
  tournamentTest ();
  conditionTest ();

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
    console.log (radioCheck);
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
    console.log ('test ok');
    formBox.style.display = 'none';

    validationBox.style.display = 'block';
    validationBox.style.height = '200px';
    validationBox.innerHTML = 'Votre inscription a été validée merci ! ';

    closeBtn.style.display = 'block';
    closeBtn.addEventListener ('click', function () {
      modalbg.style.display = 'none';
    });
  }
}
