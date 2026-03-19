const submitButton = document.getElementById("submit")
const toneSelect = document.getElementById("tone")
const recipientSelect = document.getElementById("recipient")
const input = document.getElementById("emailInput")
const output = document.getElementById("emailOutput")

submitButton.addEventListener("click", emailGenerator)

async function emailGenerator() {
    const prompt = `Rewrite the following email in a ${toneSelect.value} tone for a ${recipientSelect.value}: ${input.value}`

    apiURL = "https://api.anthropic.com/v1/messages"
    const apiKey = "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"

    response = await fetch(apiURL, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
            "messages": [
                {"role": "user", "content": prompt}
            ],
            "model": "claude-sonnet-4-6",
            "max_tokens": 2000
        })
    })

    result = await response.json()

    console.log(result)
    output.value = result.content[0].text
}