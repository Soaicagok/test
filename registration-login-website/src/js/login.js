document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateEmail(email) && validatePassword(password)) {
            // Simulate a login request
            console.log('Logging in with:', { email, password });
            // Here you would typically send a request to your server
            // For example: fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
        } else {
            errorMessage.textContent = 'Please enter a valid email and password.';
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        return password.length >= 6; // Example validation: password must be at least 6 characters
    }
});