//selecting the txtEmail with JS







//selecting by ID
//let email=document.getElementById("txtEmail").value;
email=$("#txtEmail").val();
console.log(email);


//selecting by className
//let forControl = document.getElementsByClassName("form-control");
//let forControl = $(".form-control");
//console.log(formControl);
//for(let i=0; i<formControl.length; i++){
  //formControl[i].style.display="none";
//}


let formControl =$(".form-control");
formControl.hide();


//selecting by tagName
//let inputs = documents.getElementsByTagName("label");
let labels = $("label");
console.log(labels);

//
//click on the button and increase the counter

//function

  //variable counter
  //display the variable into the id=counter

  let c=0;
  let div=$("#counter");
  function counter(){
    c++;
    div.text(c);
  
  }

  function init(){
    $("#btn")
  }