function login() {
  let inputEmail = $("#txtEmail").val();
  let inputPassword = $("#txtPassword").val();
  let flag = false;
  let userList = readUsers();

  for (let i = 0; i < userList.length; i++) {
    let user = userList[i];
    if (user.email === inputEmail && user.password === inputPassword) {
      flag = true;
      window.location = "users.html";
    }
    if (!flag) {
      $("#alertError").removeClass("hide");
      setTimeout(function () {
        $("#alertError").addClass("hide");
      }, 3000);
    }
  }
}

function init() {
  $("#loginBtn").click(login);
}

window.onload = init;
