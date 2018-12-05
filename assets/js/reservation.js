function populateSite() {
  document.getElementById("addy").innerHTML = "Address: " + localStorage.getItem("Address");
  document.getElementById("phone").innerHTML = "Contact Us: " + localStorage.getItem("Phone");
  console.log(localStorage.getItem("id"))
}

function submitForm(){
  var name = document.getElementById("name").value;
  var email  = document.getElementById("email").value;
  var phone = document.getElementById("phone_num").value;
  var month = document.getElementById("month").value;
  var date = document.getElementById("date").value;
  var year = document.getElementById("year").value;
  var time = document.getElementById("time").value;
  var count = 0;

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

  re =  /^\d{10}$/;
  console.log(phone);
  if(!re.test(phone)){
    document.getElementById("error_phone").style.display = "block";
  }
  else{
    document.getElementById("error_phone").style.display = "none";
    count = count + 1;
  }

  if(count == 3){
    console.log("All Entries Valid.");
    window.location.href = "conf.html";

  }


}
