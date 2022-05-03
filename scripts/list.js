function displayUsers(){
  //travel teh array
  //get each user
  //display the users
  //append the user on the html table
}

function init(){
  console.log("Listing users");
  let users=readUsers();
  displayUsers(users);

}

window.onload=init;