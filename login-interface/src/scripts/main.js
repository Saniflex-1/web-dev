// This file contains the JavaScript code for the login interface. It handles form submission, input validation, and any interactive behavior required for the login process.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateInput(username, password)) {
            // Simulate a successful login
            alert('Login successful!');
            // Here you can add code to handle successful login, like redirecting to another page
        } else {
            alert('Please enter a valid username and password.');
        }
    });

    function validateInput(username, password) {
        return username.trim() !== '' && password.trim() !== '';
    }
});