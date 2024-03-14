const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname"); 
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
  e.preventDefault();

  var firstName = fname.value.trim();
  var lastName = lname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if(firstName === ""){
    errorFunc(fname, "First Name cannot be empty")
  }

  if(lastName === ""){
    errorFunc(lname, "Last Name cannot be empty")
  }

  if(emailValue === ""){
    errorFunc(email, "E-mail Name cannot be empty")
  }
  else if (!emailValue.includes('@')) {
    errorFunc(email, "Looks like this is not an email")
  }

  if(passwordValue === ""){
    errorFunc(password, "Password Name cannot be empty")
  }
})

function errorFunc(req, message){
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className += "error";
  span.className += "error-text";
}

function successFunc(req){
  req.className += "success";
}