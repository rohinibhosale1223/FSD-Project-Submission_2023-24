// Function to handle the "Contact" button click event
function handleContactButtonClick(email) {
    email = "Johndoe@yahoo.co.in"
    alert(`Contact ${email}`);
    // You can replace the alert with actual contact functionality, such as opening a contact form or sending an email.
}

// Event listener to handle "Contact" button clicks
document.addEventListener("DOMContentLoaded", function () {
    const contactButtons = document.querySelectorAll(".button");

    contactButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const container = this.closest(".container");
            const email = container.querySelector("p:last-child").textContent;
            handleContactButtonClick(email);
        });
    });
});
