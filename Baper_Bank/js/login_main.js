/*===================== step 01 ======================*/

document.getElementById('login_submit').addEventListener('click', function(){
    const emailField = document.getElementById('user_email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user_password');
    const userPassWord = passwordField.value;

    if(userEmail === 'aziz01911267760@gmail.com' && userPassWord === '12345'){
        console.log('login form open');
        window.location.href = 'banking.html';
    }
    else{
        alert('user invalid');
    }

})





/*
document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('button clicked');

    // get userEmail
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassWord = passwordField.value;
    // console.log(userPassWord);


    // check email and password
    if (userEmail == 'sontan@baap.com' && userPassWord == 'secret') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }

})
*/





/*===================== step 02 ======================*/
// step-1: add click event handler with the sbmit button
const submitButton = document.getElementById('login-submit');
submitButton.addEventListener('click', function () {
    // console.log('click submit button');


    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    // console.log('click email name');
    const userEmail = emailField.value;
    // console.log(userEmail);



    // step-3: get the user password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    // console.log('click password');
    const userPassWord = passwordField.value;
    // console.log('than than');


    // DANGER: Do not verify email password on the client side
    // step-4: verify email and password
    if (userEmail == 'aziz01911267760@gmail.com' && userPassWord == '01911267760') {
        console.log('valid user');
        window.location.href = 'banking.html';
    }
    else {
        alert('invalid user');
    }
})




