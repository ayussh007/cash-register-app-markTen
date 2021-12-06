// now we need to check whether the bill amount is valid or not!
// now we need to take the input in JS as it is in HTML WORLD. So how do we take input from HTML TO JS
                                        //  here we use the same id as used in the html file with like this #filename and for class we use .filename instead of #
const billAmount = document.querySelector("#bill-amount");

// likewise we'll do for cash given
const cashGiven = document.querySelector("#cash-given");

// this is to check whether the amount is coming on console or not
const checkButton = document.querySelector("#check-button");

// we will add eventlistner to our check button
// on click we need to check a couple of things- we need to check whether bill amount is valid. then cash given should be > than bill amount
// so we will create a function - validateBillAndCashAmount

const message = document.querySelector("#error-message");

// select all the notes from html page
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value > 0) {
        if(cashGiven.value  >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        } else {
            showMessage("Do you wanna wash plates?");
        }

    } else {

        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
    );

    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}

