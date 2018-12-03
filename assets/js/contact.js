function submitForm(){
  var name = document.getElementById("name").value;
  var email  = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var count = 0;
  var sub = "Question about N. A. R. Restaurant";

  console.log(name);
  console.log(email);
  console.log(message);

  if (name == null || name.length == 0){
    document.getElementById("error_name").style.display = "block";

  }
  else {
    document.getElementById("error_name").style.display = "none";
    count = count + 1;
  }

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(email)){
    document.getElementById("error_email").style.display = "block";
  }
  else{
    document.getElementById("error_email").style.display = "none";
    count = count + 1;
  }

  if (message == null || message.length <19 ){
    document.getElementById("error_message").style.display = "block";

  }
  else {
    document.getElementById("error_message").style.display = "none";
    count = count + 1;
  }

  if(count == 3){
    console.log("All Entries Valid.");
    //INSERT CODE SEND US AN EMAIL VIA GOOGLE API
    window.open('mailto:contactnarrestaurant@gmail.com?subject='+sub+'&body='+message);

  }

}
