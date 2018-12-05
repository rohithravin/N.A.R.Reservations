function populateSite() {
  document.getElementById("addy").innerHTML = "Address: " + localStorage.getItem("Address");
  document.getElementById("phone").innerHTML = "Contact Us: " + localStorage.getItem("Phone");
  console.log(localStorage.getItem("id"))
  console.log(localStorage.getItem("Long"))
  console.log(localStorage.getItem("Lat"))
}
