
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
    $("#txtPassword").addClass("input-error");
  }
  return valid;
}

function validatePass(){
  let txtPass=$("#txtPassword");
  let password=txtPass.val();
  if(password.length<6){
    txtPass.css("border","2px solid red");
  }else{
    txtPass.css("border","2px solid green");
  }
}



function register(){
let inputfName = $("#txtFirstName").val();
let inputlName = $("#txtLasName").val();
let inputEmail = $("#txtEmail").val();
let inputPassword = $("#txtPassword").val();
let inputGender = $("#txtGender").val();

let newUser = new User(inputfName, inputlName, inputEmail, inputPassword,inputGender);
  if(isValid(newUser)){
   console.log(newUser);
   $(`input`).val("");
  }
}

function init(){
  console.log("Register");
  $("#txtPassword").keyup(validatePass);
}

window.onload=init;
