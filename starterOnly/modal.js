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
let mailAdress = document.getElementById("email");
let quantityOfTournament = document.getElementById("quantity");
let inputs = document.getElementsByClassName("input")
let errorMsgForFirst = document.getElementById("error-first")
let errorMsgForLast = document.getElementById("error-last")
///////////////////////////////////////////////////////////



formBox.addEventListener('submit', function(e){
  e.preventDefault()
})

// vérifier que tout les champs soient remplis
function validate() { 
  if (
    !firstName.value || 
    !lastName.value || 
    !mailAdress.value || 
    !quantityOfTournament.value || 
    !birthDate.value)
    {
    alert ('Tout les champs doivent être renseignés');
    }

}

function test(field) {
  if (!field.value.length){
    errorMsgForFirst.innerHTML = "";
    errorMsgForFirst.opacity = "0";
  }
  else if (field.value.length <= 2 ){
    errorMsgForFirst.innerHTML = " Le prénom doit comporter 2 caractères au minimum";
    error_msg_style();
  }
  else{
    errorMsgForFirst.innerHTML = "";
    errorMsgForFirst.style.opacity = "0"
  }
}

// deux caractère minimum sur le prénom et nom
firstName.addEventListener("input", function(){
    test(firstName, msgFirstName);
})

lastName.addEventListener("input", function(){

  if (!lastName.value.length){
    console.log("lelelel")
    errorMsgForLast.innerHTML = "";
    errorMsgForLast.style.opacity = "0";
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



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//Close modal Form
closeCross.addEventListener("click", function(){
modalbg.style.display = "none"
})
// event listener saisie utilisateur

