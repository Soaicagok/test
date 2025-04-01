function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6; // Example: Password must be at least 6 characters
}

function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.innerText = message;
    document.body.appendChild(errorElement);
    setTimeout(() => {
        errorElement.remove();
    }, 3000);
}

function clearInputFields(inputs) {
    inputs.forEach(input => {
        input.value = '';
    });
}

function toggleVisibility(element) {
    element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
}