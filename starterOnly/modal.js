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

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeCross = document.querySelector(".close");
const closeBtn = document.getElementById ('close-btn');
const Birth = document.getElementById("birthdate");
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');
let formBox = document.getElementById("form-user")
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const ConditionValidation = document.getElementById ('checkbox1');
let validationBox = document.getElementById('validation-box');

let mailAdress = document.getElementById("email")
let quantityOfTournament = document.getElementById("quantity");
let errorMsgForFirst = document.getElementById("error-first");
let errorMsgForLast = document.getElementById("error-last");
let errorMsgForMail = document.getElementById("error-mail");
let errorMsgForBirth = document.getElementById("error-birth");
let errorMsgForCondition = document.getElementById("error-condition");
let errorMsgForTournament = document.getElementById("error-quantityTournament");



let mailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let birthRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
let checkBoxForNews = document.getElementsByClassName("checkbox-input");
let errorValidation = document.getElementById("missing-value-error");
let checkBoxTown = document.getElementsByClassName(".checkbox-icon");
///////////////////////////////////////////////////////////



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}
//Close modal Form
closeCross.addEventListener("click", function() {
    modalbg.style.display = "none";
})
//prevent default - keep data when wrong validation
formBox.addEventListener('submit', function(e){
  e.preventDefault()
})



let checkFirst;
let checkLast = false;
let checkBirth = false;
//let checkMail = false;
let checkTournament = false;
// User input validation / error message //
firstName.addEventListener("input", function(){

  if (!firstName.value.length || firstName.value == null ){
    errorMsgForFirst.innerHTML = "Veuillez indiquer votre prénom";
    errorMsgForFirst.style.opacity = "1";
    console.log("firstName FALSE");
    checkFirst = false;
  }
  else if (firstName.value.length <= 2 ){
    errorMsgForFirst.innerHTML = " Le Prénom doit comporter 2 caractères au minimum";
    error_msg_style();
    console.log("firstName FALSE");
    checkFirst = false;
  }
  else{
    errorMsgForFirst.innerHTML = "";
    errorMsgForFirst.style.opacity = "0";
    console.log("FirstName TRUE");
    checkFirst = true;
  }
})
lastName.addEventListener("input", function(){

  if (!lastName.value.length){
    errorMsgForLast.innerHTML = "veuilez indiquer votre nom";
    errorMsgForLast.style.opacity = "1";
    checkLast = false;
    console.log("lastName FALSE");
  }
  else if (lastName.value.length <= 2 ){
    errorMsgForLast.innerHTML = " Le nom doit comporter 2 caractères au minimum";
    error_msg_style_last();
    checkLast = false;
    console.log("lastName FALSE");
  }
  else{
    errorMsgForLast.innerHTML = "";
    errorMsgForLast.style.opacity = "0"
    checkLast = true;
    console.log("lastName TRUE");
  }
})
mailAdress.addEventListener("input", function (){

  if(!mailAdress.value.length){
    errorMsgForMail.innerHTML = "veuillez renseingner votre adresse email";
    console.log("mail FALSE");
  }
  else if (mailRegex.test(mailAdress.value) == false) {
    errorMsgForMail.innerHTML = "merci d'indiquer une adresse mail valide";
    errorMsgForMail.style.color = "red"
    console.log("mail FALSE");
  }
  else{
    errorMsgForMail.innerHTML = "";
    checkMail = true;
    console.log("mail TRUE");
  }
})
quantityOfTournament.addEventListener("input", function (){
  if(!quantityOfTournament.value)
  {
    errorMsgForTournament.innerHTML = "veuillez indiquer le nombre de tournoi effectués"
    errorMsgForTournament.style.color = "red"
    console.log("tournament FALSE");

  }
  else if(quantityOfTournament.value >= 0 )
  {
    
    errorMsgForTournament.innerHTML = ""
    checkTournament = true;
    console.log("tournament TRUE");

  }
})


// On submit validation function //
  function validate() { 
// Var for validation //

// Condition validation for form //
    if (checkFirst == true && checkLast == true && checkTournament == true && checkMail == true)
      {

        console.log("test ok");
        errorValidation.innerHTML = "inscription validée";
        errorValidation.style.opacity = 1;
        errorValidation.style.color = "lightgreen";
        errorValidation.style.animation = "slide 0.5s ease-out forwards";
        formBox.style.display = "none";
  
        validationBox.style.display = 'block';
        validationBox.style.height = '200px';
        validationBox.innerHTML = "Votre inscription a été validé merci ! ";
  
        closeBtn.style.display = "block";
        closeBtn.addEventListener("click", function(){
          modalbg.style.display = "none";
        }) 








  
      
    }
    else {
      console.log("VALIDATION STOP");
      errorMsgForMail.innerHTML = "veuillez renseingner votre adresse email";
      errorMsgForLast.innerHTML = "veuilez indiquer votre nom";
      errorMsgForFirst.innerHTML = "Veuillez indiquer votre prénom";

      errorMsgForMail.style.color = "red"
      errorMsgForLast.style.color = "red"
      errorMsgForFirst.style.color = "red"


      errorMsgForTournament.innerHTML = "veuillez indiquer le nombre de tournoi effectués"
      errorMsgForTournament.style.color = "red"

      errorValidation.innerHTML = "Tout les champs doivent être renseignés";
      errorValidation.style.opacity = 1;
      errorValidation.style.color = "red";
      errorValidation.style.animation = "slide 0.5s ease-out forwards";

    }
  }













