
class User {
  constructor(fName, lName, email, password) {
    this.firstName = fName;
    this.lastName = lName;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}


function register(){
let inputfName = $("#txtFirstName").val();
let inputlName = $("#txtLasName").val();
let inputEmail = $("#txtEmail").val();
let inputPassword = $("#txtPassword").val();
let inputGender = $("#txtGender").val();

let newUser = new User(inputfName, inputlName, inputEmail, inputPassword,inputGender);
console.log(newUser);
}

function init(){
  console.log("Init function");
  let user1 = new User("Gustavo", "Barron", "gusbarron@gmail.com", "1234","male");
  let user2 = new User("Noah", "Barron", "noahbarron@gmail.com", "54321","male");
  console.log(user1, user2);
}

window.onload=init;

