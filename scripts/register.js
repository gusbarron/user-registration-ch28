class User {
  constructor(fName, lName, email, password, gender) {
    this.firstName = fName;
    this.lastName = lName;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}
//Mandatory email and password
function isValid(user) {
  let valid = true;
  $("input").removeClass("input-error");
  if (user.email.length == 0) {
    valid = false;
    console.error("Add an email");
    $("#txtEmail").addClass("input-error");
  }
  if (user.password == 0) {
    valid = false;
    console.error("Add a password");
    $("#txtPassword").addClass("input-error");
  }
  return valid;
}

function validatePass() {
  console.log("validating pass");

  let txtPass = $("#txtPassword");
  let password = txtPass.val();
  if (password.length < 6) {
    txtPass.css("background", "#ff9898");
    displayError("The password is too short :(");
  } else {
    txtPass.css("background", "#64ce66");
    hideError();
  }
}

function displayError(msg) {
  $("#alertError").removeClass("hide").text(msg);
}
function hideError() {
  $("#alertError").addClass("hide");
}

function register() {
  let inputfName = $("#txtFirstName").val();
  let inputlName = $("#txtLasName").val();
  let inputEmail = $("#txtEmail").val();
  let inputPassword = $("#txtPassword").val();
  let inputGender = $("#txtGender").val();

  let newUser = new User(
    inputfName,
    inputlName,
    inputEmail,
    inputPassword,
    inputGender
  );
  if (isValid(newUser)) {
    saveUser(newUser);
    hideError();
    $(`input`).val("");
  } else {
    displayError("Please complete all the fields");
  }
}

function init() {
  console.log("Register");
  $("#txtPassword").keyup(validatePass);
}

window.onload = init;
