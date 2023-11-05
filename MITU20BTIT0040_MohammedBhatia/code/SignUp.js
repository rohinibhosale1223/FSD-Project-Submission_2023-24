// Function to handle form submission
function handleSubmitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form elements
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="psw"]').value;
    const passwordRepeat = document.querySelector('input[name="psw-repeat"]').value;

    // Get the message element
    const messageElement = document.getElementById('signup-message');

    // Check the password and its repeat
    if (password !== passwordRepeat) {
        messageElement.textContent = 'Passwords do not match. Please try again.';
        messageElement.classList.remove('success-message');
        messageElement.classList.add('error-message');
    } else {
        messageElement.textContent = `Account created for ${email}. You can now log in.`;
        messageElement.classList.remove('error-message');
        messageElement.classList.add('success-message');
    }

    // Reset the form
    event.target.reset();
}

// Event listener to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("form");
    signupForm.addEventListener("submit", handleSubmitForm);
});
