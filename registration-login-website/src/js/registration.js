document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorMessage = document.getElementById('errorMessage');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMessage.textContent = '';

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (!validateInputs(username, email, password, confirmPassword)) {
            return;
        }

        // Simulate registration process
        console.log('Registration successful for:', username);
        alert('Registration successful!');
        registrationForm.reset();
    });

    function validateInputs(username, email, password, confirmPassword) {
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            errorMessage.textContent = 'All fields are required.';
            return false;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            return false;
        }

        if (!validateEmail(email)) {
            errorMessage.textContent = 'Invalid email format.';
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});