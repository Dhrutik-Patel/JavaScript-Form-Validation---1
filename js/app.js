const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    checkInputs();
});

// Email Validation
function isValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {

    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    // Check All Inputs Validation One By One
    // For Username
    if (usernameValue === '') {

        setErrorMessage(username, 'Please enter your Username');
    } else {

        setSuccessMessage(username);
    }

    // For Email
    if (emailValue === '') {

        setErrorMessage(email, 'Please enter your Email');
    } else if (!isValidEmail(emailValue)) {

        setErrorMessage(email, 'Invalid Email');
    } else {

        setSuccessMessage(email);
    }

    // For Password
    if (passwordValue === '') {

        setErrorMessage(password, 'Please enter your Password');
    } else {

        setSuccessMessage(password);
    }

    // For Confirm Password
    if (cpasswordValue === '') {

        setErrorMessage(cpassword, 'Please enter your Confirm Password');
    } else if (cpasswordValue !== passwordValue) {

        setErrorMessage(cpassword, 'Passwords does not match')
    } else {

        setSuccessMessage(cpassword);
    }

    isAllSuccess();
}

// It will that all divs in form contains 'form-control success' class or not.
function isAllSuccess() {

    const formCon = document.getElementsByClassName('form-control');
    let count = 0;

    for (let i = 0; i < formCon.length; i++) {

        if (formCon[i].className === 'form-control success') {

            count++;
        }
        if (count === 4) {

            showAlert();
        }
    }
}

// It will show alert message if all user data is validated.
function showAlert() {
    swal("Congratulation!", "Your account has been created successfully.", "success");
}

// It will show error message in small tag.
function setErrorMessage(input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

// It will show green icon if user input is valid.
function setSuccessMessage(input) {

    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}