function addNewWEField() {
  // Create a new textarea element
  let newNode = document.createElement("textarea");
  // Add classes and attributes to the new element
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  // Get the container for work experience fields and the add button
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  // Insert the new textarea before the add button
  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  // Create a new textarea element
  let newNode = document.createElement("textarea");
  // Add classes and attributes to the new element
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  // Get the container for academic qualification fields and the add button
  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  // Insert the new textarea before the add button
  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// Function to generate the CV based on the entered information
function createCV() {
  // Get the values from various input fields
  let nameField = document.getElementById("nameField").value;
  let contactField = document.getElementById("contactField").value;
  let addressField = document.getElementById("addressField").value;
  let fbField = document.getElementById("fbField").value;
  let instaField = document.getElementById("instaField").value;
  let linkedField = document.getElementById("linkedField").value;
  let objectiveField = document.getElementById("objectiveField").value;

  // Update the corresponding fields in the CV template with the entered values
  document.getElementById("nameT1").innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;
  document.getElementById("contactT").innerHTML = contactField;
  document.getElementById("addressT").innerHTML = addressField;
  document.getElementById("fbT").innerHTML = fbField;
  document.getElementById("instaT").innerHTML = instaField;
  document.getElementById("linkedT").innerHTML = linkedField;
  document.getElementById("objectiveT").innerHTML = objectiveField;

  // Get the work experience fields and generate a list of entries
  let wes = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // Get the academic qualification fields and generate a list of entries
  let aqs = document.getElementsByClassName("aqField");
  let str1 = "";
  for (let e of aqs) {
    str1 = str1 + `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str1;

  // Code for setting the CV image
  let file = document.getElementById("imgField").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);

  // Set the image source to the CV template
  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  // Hide the CV form and display the generated CV template
  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("download-button").style.display = "block";
}

// Function to print the CV as a PDF
function printCV() {
  const content = document.getElementById("cv-template");

  // Create a new jsPDF instance
  const pdf = new jsPDF({
    format: 'a4', // Set the page size to A4
  });

  // Add HTML content to the PDF
  pdf.html(content, {
    callback: function (pdf) {
      // Save the PDF as a file
      pdf.save('CV.pdf');
    },
  });
  
}

