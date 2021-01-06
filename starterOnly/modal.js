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
const closeCross = document.querySelector(".close"); // croix fermeture modal
const Birth = document.getElementById("birthdate");
let formBox = document.getElementById("form-user")
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
let mailAdress = document.getElementById("email")
let quantityOfTournament = document.getElementById("quantity");
let inputs = document.getElementsByClassName("input");
let errorMsgForFirst = document.getElementById("error-first");
let errorMsgForLast = document.getElementById("error-last");
let errorMsgForMail = document.getElementById("error-mail");
let errorMsgForTournament = document.getElementById("error-quantityTournament");
let mailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let checkBoxForNews = document.getElementsByClassName("checkbox-input");
let errorValidation = document.getElementById("missing-value-error");
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

// prevent default
formBox.addEventListener('submit', function(e){
 
  if (mailCheckValidate=true) {
    e.preventDefault()
  }
  else{

  }
  
})

// vérifier que tout les champs soient remplis, 
//afficher msg d'erreur en cas de champ vide
function validate() { 
  if (
    !firstName.value || 
    !lastName.value || 
    !mailAdress.value || 
    !quantityOfTournament.value || 
    !birthDate.value)
    {

    errorValidation.innerHTML = "Tout les champs doivent être renseignés";
    errorValidation.style.opacity = 1;
    errorValidation.style.color = "red";
    errorValidation.style.animation = "slide 0.5s ease-out forwards";

    }
  else{
  
  }

}
// deux caractère minimum sur le prénom et nom
firstName.addEventListener("input", function(){

  if (!firstName.value.length){
    errorMsgForFirst.innerHTML = "Veuillez indiquer votre prénom";
    errorMsgForFirst.style.opacity = "1";
  }
  else if (firstName.value.length <= 2 ){
    errorMsgForFirst.innerHTML = " Le Prénom doit comporter 2 caractères au minimum";
    error_msg_style();
  }
  else{
    errorMsgForFirst.innerHTML = "";
    errorMsgForFirst.style.opacity = "0"
  }
})
lastName.addEventListener("input", function(){

  if (!lastName.value.length){
    console.log("pas de pb")
    errorMsgForLast.innerHTML = "veuilez indiquer votre nom";
    errorMsgForLast.style.opacity = "1";
  }
  else if (lastName.value.length <= 2 ){
    errorMsgForLast.innerHTML = " Le nom doit comporter 2 caractères au minimum";
    error_msg_style_last();
  }
  else{
    errorMsgForLast.innerHTML = "";
    errorMsgForLast.style.opacity = "0"
  }
})

// check du mail
mailAdress.addEventListener("input", mailCheckValidate)
function mailCheckValidate(){

  if(!mailAdress.value.length){
    errorMsgForMail.innerHTML = "veuillez renseingner votre adresse email";

  }

  else if (mailRegex.test(mailAdress.value) == false) {
    errorMsgForMail.innerHTML = "merci d'indiquer une adresse mail valide";
    errorMsgForMail.style.color = "red"
  }
  else{
    errorMsgForMail.innerHTML = "";

  }
}
// nombre de tournois
quantityOfTournament.addEventListener("input", checkValidate)

function checkValidate(){
  if(!quantityOfTournament.value)
  {
    errorMsgForTournament.innerHTML = "veuillez indiquer le nombre de tournoi effectués"
    errorMsgForTournament.style.color = "red"

  }
  else if(quantityOfTournament.value >= 0 )
  {
    
    errorMsgForTournament.innerHTML = ""
  }
}
// checkbox









