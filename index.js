const billAmount = document.querySelector('#bill-amount')
const cashGiven = document.querySelector('#cash-given')
const checkButton = document.querySelector('#check-btn')
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 50, 20, 10, 5, 1]

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    //hide the error message
    hideMessage();
    if(billAmount.value > 0) {
        if(cashGiven.value  >= billAmount.value) {

            //creating a new variable here - amountToBeReturned
            const amountToBeReturned = cashGiven.value - billAmount.value;

            //calling the calculateChange func to show the amount to be returned
            calculateChange(amountToBeReturned);

        } else {
            //else we will show the message
            showMessage("Do you wanna wash plates?");
        }

    } else {

        //else show again error message
        showMessage("Invalid Bill Amount");
    }
});

//creating a function to calculate the amount to be returned
function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++) {

        //eg: bill amount 50 and cash given 2000
        //so 2000 - 50 -> 1950
        // Math.trunc (1950 / 2000) -> 0
        // 1950 % 2000 -> 1950

        //Math.trunc (1950 / 500) -> 3
        //1950 % 500 -> 450

        //Math.trunc(450 / 100) -> 4
        //450 % 100 -> 50

        //Math.trunc(50 / 50) -> 1
        //50  % 50 -> 0

        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
    );

    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}


//to hide the message if amount entered is correct
function hideMessage() {
    message.style.display = "none";
}

//to show message if amount entered incorrect
function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}