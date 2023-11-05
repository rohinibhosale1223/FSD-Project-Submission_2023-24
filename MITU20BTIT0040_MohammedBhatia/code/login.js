// Function to handle form submission
function handleSubmitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form elements
    const username = document.querySelector('input[name="Username"]').value;
    const password = document.querySelector('input[name="pass"]').value;

    // Get the message element
    const messageElement = document.getElementById('login-message');

    // Check the username and password (for demonstration purposes)
    if (username === 'your_username' && password === 'your_password') {
        // Successful login
        messageElement.textContent = 'Login successful!';
        messageElement.classList.remove('error-message');
        messageElement.classList.add('success-message');
    } else {
        // Failed login
        messageElement.textContent = 'Login failed. Please check your credentials.';
        messageElement.classList.remove('success-message');
        messageElement.classList.add('error-message');
    }

    // Reset the form
    event.target.reset();
}

// Event listener to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    loginForm.addEventListener("submit", handleSubmitForm);
});
