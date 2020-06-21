let email = document.getElementById('email')

function subscribe() {
    console.log("You subscribed with the email: " + email.value)
    alert("\n You subscribed with the email: \n\n" + email.value)
}

email.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("subscribe").click()
    }
})