
function changeImage(element, newSrc) {
    var img = element.querySelector('.imgContainer img');
    img.src = newSrc;
}

function resetImage(element, originalSrc) {
    var img = element.querySelector('.imgContainer img');
    img.src = originalSrc;
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var passwordIcon = document.querySelector('.eye-icon img');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.src = './images/hide.png';
    } else {
        passwordInput.type = 'password';
        passwordIcon.src = './images/view.png';
    }
}

function toggleRememberText() {
    var rememberText = document.querySelector('.rememberText');
    var rememberCheckbox = document.getElementById('rememberUid');

    if (rememberCheckbox.checked) {
        rememberText.style.display = 'block';
    } else {
        rememberText.style.display = 'none';
    }
}

function validateAndSubmitSignOn() {
    var userIdInput = document.getElementById('username');
    var userIdError = document.getElementById('userIdError');
    var passwordInput = document.getElementById('password');
    var passwordError = document.getElementById('passwordError');

    userIdError.textContent = '';
    passwordError.textContent = '';
    userIdInput.classList.remove('sans-serif-italic', 'border-error');
    passwordInput.classList.remove('sans-serif-italic', 'border-error');

    if (userIdInput.value.trim() === '' && passwordInput.value.trim() === '') {
        userIdError.textContent = 'Please enter your user ID.';
        passwordError.textContent = 'Please enter your password.';
        userIdInput.classList.add('sans-serif-italic', 'border-error');
        passwordInput.classList.add('sans-serif-italic', 'border-error');
        return false; 
    }

    if (userIdInput.value.trim() === '') {
        userIdError.textContent = 'Please enter your user ID.';
        userIdInput.classList.add('sans-serif-italic', 'border-error');
        return false; 
    }

    if (!isValidUserId(userIdInput.value.trim())) {
        userIdError.textContent = 'User ID cannot contain letters.';
        userIdInput.classList.add('sans-serif-italic', 'border-error');
        return false; 
    }

    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Please enter your password.';
        passwordInput.classList.add('sans-serif-italic', 'border-error');
        return false; 
    } else if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordInput.classList.add('sans-serif-italic', 'border-error');
        return false; 
    }

    return true;
}

function isValidUserId(userId) {
    var userIdRegex = /^[0-9]+$/;
    return userIdRegex.test(userId);
}