const submitButton = document.getElementById("submit")
const toneSelect = document.getElementById("tone")
const recipientSelect = document.getElementById("recipient")
const input = document.getElementById("emailInput")
const output = document.getElementById("emailOutput")

submitButton.addEventListener("click", emailGenerator)

function emailGenerator() {
    const prompt = "Rewrite the following email in a ${toneSelect.value} tone for a ${recipientSelect.value}: ${input.value}"

    
}