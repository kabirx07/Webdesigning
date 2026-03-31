let container = document.getElementById("formContainer");

// Create Form
let form = document.createElement("form");

// USER NAME
let nameLabel = document.createElement("label");
let nameText = document.createTextNode("User Name: ");
nameLabel.appendChild(nameText);

let nameInput = document.createElement("input");
nameInput.type = "text";

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


// MOBILE NUMBER
let mobileLabel = document.createElement("label");
let mobileText = document.createTextNode("Mobile Number: ");
mobileLabel.appendChild(mobileText);

let mobileInput = document.createElement("input");
mobileInput.type = "text";

form.appendChild(mobileLabel);
form.appendChild(mobileInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


// EMAIL
let emailLabel = document.createElement("label");
let emailText = document.createTextNode("Email: ");
emailLabel.appendChild(emailText);

let emailInput = document.createElement("input");
emailInput.type = "email";

form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


// NUMBER OF PERSON
let personLabel = document.createElement("label");
let personText = document.createTextNode("No of Person: ");
personLabel.appendChild(personText);

let personInput = document.createElement("input");
personInput.type = "number";

form.appendChild(personLabel);
form.appendChild(personInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


// BOOKING CHOICE
let choiceLabel = document.createElement("label");
let choiceText = document.createTextNode("Choice of Booking: ");
choiceLabel.appendChild(choiceText);

let choiceSelect = document.createElement("select");

let opt1 = document.createElement("option");
opt1.text = "Full Day Booking";
opt1.value = "full";

let opt2 = document.createElement("option");
opt2.text = "Half Day Booking";
opt2.value = "half";

let opt3 = document.createElement("option");
opt3.text = "Hourly Booking";
opt3.value = "hourly";

choiceSelect.appendChild(opt1);
choiceSelect.appendChild(opt2);
choiceSelect.appendChild(opt3);

form.appendChild(choiceLabel);
form.appendChild(choiceSelect);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));


// DYNAMIC FIELD AREA
let dynamicDiv = document.createElement("div");
form.appendChild(dynamicDiv);


// EVENT
choiceSelect.addEventListener("change", function () {

    dynamicDiv.innerHTML = "";

    // DATE
    let dateLabel = document.createElement("label");
    let dateText = document.createTextNode("Date: ");
    dateLabel.appendChild(dateText);

    let dateInput = document.createElement("input");
    dateInput.type = "date";

    dynamicDiv.appendChild(dateLabel);
    dynamicDiv.appendChild(dateInput);

    dynamicDiv.appendChild(document.createElement("br"));
    dynamicDiv.appendChild(document.createElement("br"));

    if (this.value === "half") {

        let slotLabel = document.createElement("label");
        let slotText = document.createTextNode("Slot: ");
        slotLabel.appendChild(slotText);

        let slotSelect = document.createElement("select");

        let s1 = document.createElement("option");
        s1.text = "Breakfast";

        let s2 = document.createElement("option");
        s2.text = "Lunch";

        let s3 = document.createElement("option");
        s3.text = "Dinner";

        slotSelect.appendChild(s1);
        slotSelect.appendChild(s2);
        slotSelect.appendChild(s3);

        dynamicDiv.appendChild(slotLabel);
        dynamicDiv.appendChild(slotSelect);

    }

    if (this.value === "hourly") {

        let timeLabel = document.createElement("label");
        let timeText = document.createTextNode("Time: ");
        timeLabel.appendChild(timeText);

        let timeInput = document.createElement("input");
        timeInput.type = "time";

        dynamicDiv.appendChild(timeLabel);
        dynamicDiv.appendChild(timeInput);
    }

});


// SUBMIT BUTTON
let btn = document.createElement("button");
let btnText = document.createTextNode("Book Now");
btn.appendChild(btnText);

form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));
form.appendChild(btn);


// ADD FORM TO PAGE
container.appendChild(form);