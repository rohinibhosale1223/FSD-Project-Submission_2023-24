// Function to handle form submission
function handleSubmitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form elements
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const country = document.getElementById("country").value;
    const subject = document.getElementById("subject").value;

    // You can perform further processing here, such as sending the form data to a server
    // For this example, we'll just display a confirmation message
    const confirmationMessage = `Thank you, ${firstName} ${lastName} from ${country}, for your message: "${subject}"`;
    alert(confirmationMessage);

    // Reset the form
    event.target.reset();
}

// Event listener to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", handleSubmitForm);
});
