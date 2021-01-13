function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// fonction edit style pour le message d'erreur

function error_msg_style() { // prenom
    errorMsgForFirst.style.color = "red";
    errorMsgForFirst.style.opacity = "1";
}

function error_msg_style_last() { // nom
    errorMsgForLast.style.color = "red";
    errorMsgForLast.style.opacity = "1";
}


// ERROR MESSAGE 

let errorMsgForFirst = document.getElementById("error-first");
let errorMsgForLast = document.getElementById("error-last");
let errorMsgForMail = document.getElementById("error-mail");
let errorMsgForBirth = document.getElementById("error-birth");
let errorMsgForCondition = document.getElementById("error-condition");
let errorMsgForTournament = document.getElementById("error-quantityTournament");
let errorValidation = document.getElementById("missing-value-error");

// REGEX
let mailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let birthRegex = /\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])/;



// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeCross = document.querySelector(".close");
const closeBtn = document.getElementById('close-btn');
let validationBox = document.getElementById('validation-box');


// MODAL Elements
let formBox = document.getElementById("form-user")
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const Birth = document.getElementById("birthdate");
const mailAdress = document.getElementById("email")

const localisation1 = document.getElementById('location2');
const localisation2 = document.getElementById('location2');
const localisation3 = document.getElementById('location3');
const localisation4 = document.getElementById('location4');
const localisation5 = document.getElementById('location5');
const localisation6 = document.getElementById('location6');
const quantityOfTournament = document.getElementById("quantity");
const ConditionValidation = document.querySelector('checkbox1');
const checkBoxForNews = document.getElementsByClassName("checkbox-input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
// 1# Close modal Form
closeCross.addEventListener("click", function() {
    modalbg.style.display = "none";
})

// User input validation / error message /
let checkFirst = false;
let checkLast = false;
let checkBirth = false;
let checkMail = false;
let checkTournament = false;
let taGrandmere = false

firstName.addEventListener("input", function() {
    if (!firstName.value.length || firstName.value == null) {
        errorMsgForFirst.innerHTML = "Veuillez indiquer votre prénom";
        errorMsgForFirst.style.opacity = "1";
        console.log("firstName = " + checkFirst);

    } else if (firstName.value.length <= 1) {
        errorMsgForFirst.innerHTML = " Le Prénom doit comporter 2 caractères au minimum";
        error_msg_style();
        console.log("firstName = " + checkFirst);
    } else {
        errorMsgForFirst.innerHTML = "";
        // errorMsgForFirst.style.display = "none";
        console.log("firstName = " + checkFirst);
        checkFirst = true;
    };


})
lastName.addEventListener("input", function() {

    if (!lastName.value.length || lastName.value == null) {
        error_msg_style_last()
        console.log("lastName = " + checkLast);
    } else if (lastName.value.length <= 1) {
        errorMsgForLast.innerHTML = " Le nom doit comporter 2 caractères au minimum";
        error_msg_style_last();
        console.log("lastName = " + checkLast);
    } else {
        errorMsgForLast.innerHTML = "";
        //errorMsgForLast.style.display = "none"
        console.log("lastName = " + checkLast);
        checkLast = true;
    }
})
mailAdress.addEventListener("input", function() {

    if (!mailAdress.value.length) {
        errorMsgForMail.innerHTML = "veuillez renseingner votre adresse email";
        console.log("mail = " + checkMail);
        checkMail = false;
    } else if (mailRegex.test(mailAdress.value) == false) {
        errorMsgForMail.innerHTML = "merci d'indiquer une adresse mail valide";
        errorMsgForMail.style.color = "red"
        console.log("mail = " + checkMail);
        checkMail = false;
    } else {
        errorMsgForMail.innerHTML = "";
        errorMsgForMail.style.display = "none";
        checkMail = true;
        console.log("mail = " + checkMail);
    }
})
Birth.addEventListener("input", function() {


    console.log(Birth.value);
    console.log(birthRegex);
    console.log(birthRegex.test(Birth.value));


    if (!Birth || Birth == "JJ/MM/AAAA") {
        errorMsgForBirth.innerHTML = "veuillez renseingner votre birth";
        console.log("birth = " + checkBirth);
        checkBirth = false;
    } else if (Birth.value.match(birthRegex) == false) {
        errorMsgForBirth.innerHTML = "merci d'indiquer une birth valide";
        errorMsgForBirth.style.color = "red"
        console.log("birth = " + checkBirth);
        checkBirth = false;
    } else {
        errorMsgForBirth.innerHTML = "";
        errorMsgForBirth.style.display = "none";
        checkBirth = true;
        console.log("birth = " + checkBirth);
    }
})
quantityOfTournament.addEventListener("input", function() {

    if (!quantityOfTournament.value || quantityOfTournament.value.length == 0)

    {
        errorMsgForTournament.innerHTML = "veuillez indiquer le nombre de tournoi effectués"
        errorMsgForTournament.style.color = "red"
        console.log("tournament = " + checkTournament);


    } else if (quantityOfTournament.value >= 0) {

        errorMsgForTournament.innerHTML = ""
        checkTournament = true;
        console.log("tournament = " + checkTournament);

    }
    console.log(quantityOfTournament.value + "value");
    console.log(quantityOfTournament.value.length + "value lenght");
})

//prevent default - keep data when wrong validation
formBox.addEventListener('submit', function(e) {
    e.preventDefault();
    validate();
})

// On submit validation checkin function //
function validate() {
    // firstname//
    if (!firstName.value.length || firstName.value == null) {
        errorMsgForFirst.innerHTML = "Veuillez indiquer votre prénom";
        errorMsgForFirst.style.opacity = "1";
        console.log("firstName = " + checkFirst);
    } else if (firstName.value.length <= 1) {
        errorMsgForFirst.innerHTML = " Le Prénom doit comporter 2 caractères au minimum";
        error_msg_style();
        console.log("firstName = " + checkFirst);
    } else {
        errorMsgForFirst.innerHTML = "";
        // errorMsgForFirst.style.display = "none";
        console.log("firstName = " + checkFirst);
        checkFirst = true;
    };

    // LASTNAME //
    if (!lastName.value.length || lastName.value == null) {
        error_msg_style_last()
        errorMsgForLast.innerHTML = "Veuillez indiquer votre prénom";
        console.log("lastName = " + checkLast);
    } else if (lastName.value.length <= 1) {
        errorMsgForLast.innerHTML = " Le nom doit comporter 2 caractères au minimum";
        error_msg_style_last();
        console.log("lastName jkazndkjzandkazjd= " + checkLast);
    } else {
        errorMsgForLast.innerHTML = "";
        //errorMsgForLast.style.display = "none"
        console.log("lastName = " + checkLast);
        checkLast = true;
    };

    // MAIL //
    if (!mailAdress.value.length) {
        errorMsgForMail.innerHTML = "veuillez renseingner votre adresse email";
        console.log("mail = " + checkMail);
        checkMail = false;
    } else if (mailRegex.test(mailAdress.value) == false) {
        errorMsgForMail.innerHTML = "merci d'indiquer une adresse mail valide";
        errorMsgForMail.style.color = "red"
        console.log("mail = " + checkMail);
        checkMail = false;
    } else {
        errorMsgForMail.innerHTML = "";
        errorMsgForMail.style.display = "none";
        checkMail = true;
        console.log("mail = " + checkMail);
    }

    // TOURNAMENT //
    if (!quantityOfTournament.value || quantityOfTournament.value.length == 0)

    {
        errorMsgForTournament.innerHTML = "veuillez indiquer le nombre de tournoi effectués"
        errorMsgForTournament.style.color = "red"
        console.log("tournament = " + checkTournament);


    } else if (quantityOfTournament.value >= 1) {

        errorMsgForTournament.innerHTML = ""
        checkTournament = true;
        console.log("tournament = " + checkTournament);

    }
    console.log(quantityOfTournament.value + "value");
    console.log(quantityOfTournament.value.length + "value lenght");




    // ONE FIELD IS MISSING OR WRONG //
    if (checkFirst == false && checkLast == false && checkTournament == false && checkMail == false && checkBirth == false) {
        errorValidation.innerHTML = "Tout les champs doivent être renseignés";
        errorValidation.style.opacity = 1;
        errorValidation.style.color = "red";
        errorValidation.style.animation = "slide 0.5s ease-out forwards";
    };

    if (checkFirst == true && checkLast == true && checkTournament == true && checkMail == true && checkBirth == true) {

        console.log("test ok");
        formBox.style.display = "none";

        validationBox.style.display = 'block';
        validationBox.style.height = '200px';
        validationBox.innerHTML = "Votre inscription a été validée merci ! ";

        closeBtn.style.display = "block";
        closeBtn.addEventListener("click", function() {
            modalbg.style.display = "none";
        })
    }




}