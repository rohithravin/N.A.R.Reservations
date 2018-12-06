function populateSite() {
  document.getElementById("addy").innerHTML = "Address: " + localStorage.getItem("Address");
  document.getElementById("phone").innerHTML = "Contact Us: " + localStorage.getItem("Phone");
  console.log(localStorage.getItem("id"))
}

function submitForm(){
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var email  = document.getElementById("email").value;
  var phone = document.getElementById("phone_num").value;
  var month = document.getElementById("month").value;
  var date = document.getElementById("date").value;
  var year = document.getElementById("year").value;
  var time = document.getElementById("time").value;
  var restaurantID = localStorage.getItem("id");
  var restaurantAddress = localStorage.getItem("Address");
  var restaurantNumber = localStorage.getItem("Phone");
  var name = first_name.concat(' ');
  name = name.concat(last_name);
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
    console.log("All Entries Valid." , restaurantID);
    console.log("full name", name);
    reservation = {restaurantID:restaurantID, restaurantAddress:restaurantAddress, restaurantNumber:restaurantNumber,name:name,
       email:email, phone:phone, month:month, date:date, year:year, time:time}

    var xhr = new XMLHttpRequest();
    var url = 'https://shrouded-badlands-47801.herokuapp.com/processResveration' ;
    xhr.open('POST', url , true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          var json = JSON.parse(xhr.responseText);
          if (json['success'] == 1){
              localStorage.setItem('First_Name', first_name);
              window.location.href = "conf.html";
          }
          else{
              document.getElementById("error_msg").innerHTML = json['message']
              document.getElementById("error_msg").style.display = "block";
          }
          console.log(json);
      }
    };
    var data = JSON.stringify(reservation);
    xhr.send(data);



  }


}
