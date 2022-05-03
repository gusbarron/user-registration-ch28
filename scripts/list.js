function displayUsers(userArray){
  let row;
  for(let i=0; i<usersArray.length; i++){
    let user = usersArray[i];
    console.log(user):
    row=`
    <tr>
    <td> ${users.firstNmae}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    <td>${user.email}</td>
    <td>${user.}`
  }
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