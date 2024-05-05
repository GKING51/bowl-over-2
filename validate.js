// Set variables for required fields and form

const form = document.getElementById("my-form");
const firstName = document.getElementById("first-name");
const emailAddress = document.getElementById("email");
const message = document.getElementById("message");

// Once the submit button is clicked the following will occur
form.addEventListener("submit", (e) => {

    e.preventDefault();

    checkValues();

    if((firstName.value !== "") && (emailAddress.value !== "") && (message.value !== "")) {
        form.submit();
        console.log("Form Submitted!");
        alert("Form Submitted!");
    } 
   
});

// Code Challenge #1: Leverage inline validation so that the user
// does not have to click the submit button in order to receive feedback.
// Hint: Consider the event type

function checkValues() {
    let firstNameValue = firstName.value;
    let emailValue = emailAddress.value;
    let messageValue = message.value;

    let fNameError = document.querySelector(".fname-error");
    let emailError = document.querySelector(".email-error");
    let messageError = document.querySelector(".message-error");

    // Insert your code here

    // If the value of the firstname field is empty, the field's background
    // color should change and the error message should display:
    // Property hints: style, innerText

    // If the value of the firstname field is not empty, the field's background
    // color should return to white and the error message should return
    // to empty.

    // First name logic

    // Email Logic
    // Code Challenge #2: use the pattern attribute to ensure that the 
    // user inputs a valid email address.

    // Message Logic



    /* Patterns 

    Date Regular Expression: pattern="\d{1,2}/\d{1,2}/\d{4}"
    Email Regular Expression: pattern="^.+@.+$"
    URL Regular Expression: pattern="https?://.+"
    
    */
}