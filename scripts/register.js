
class User {
  constructor(fName, lName, email, password) {
    this.firstName = fName;
    this.lastName = lName;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}
//Mandatory email and password
function isValid(user){
  let valid=true;
  $("input").removeClass("input-error");
  if(user.email.length==0){
    valid=false;
    console.error("Add an email");
    $("#txtEmail").addClass("input-error");
  }
  if(user.password==0){
    valid=false;
    console.error("Add a password");

  }
  return valid;
}

function register(){
let inputfName = $("#txtFirstName").val();
let inputlName = $("#txtLasName").val();
let inputEmail = $("#txtEmail").val();
let inputPassword = $("#txtPassword").val();
let inputGender = $("#txtGender").val();

let newUser = new User(inputfName, inputlName, inputEmail, inputPassword,inputGender);
  if(isCValid(newUser)){
   console.log(newUser);
  }
}

function init(){
  console.log("Init function");
  let user1 = new User("Gustavo", "Barron", "gusbarron@gmail.com", "1234","male");
  let user2 = new User("Noah", "Barron", "noahbarron@gmail.com", "54321","male");
  console.log(user1, user2);
}

window.onload=init;

