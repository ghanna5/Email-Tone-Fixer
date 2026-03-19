const submitButton = document.getElementById("submit")
const toneSelect = document.getElementById("tone")
const recipientSelect = document.getElementById("recipient")
const input = document.getElementById("emailInput")
const output = document.getElementById("emailOutput")

submitButton.addEventListener("click", emailGenerator)

function emailGenerator() {
    console.log("Selected tone: ", toneSelect.value)
    console.log("Selected recipient: ", recipientSelect.value)
    console.log("Email Input: ", input.value)
}