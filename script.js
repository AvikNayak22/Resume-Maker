function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

//generating cv
function createCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  document.getElementById("nameT2").innerHTML = nameField;

  //contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;

  //objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  //we
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //aq
  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";
  for (let e of aqs) {
    str1 = str1 + `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  //code for setting img
  let file = document.getElementById("imgField").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);

  //set the image to template
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("download-button").style.display = "block";
}

//print cv
function printCV() {
  // Choose the element that your content will be rendered to.
  const element = document.getElementById("cv-template");
  // Choose the element and save the PDF for your user.
  html2pdf().from(element).save();
}
