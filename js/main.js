var signupName = document.getElementById('signupName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var confirmPass = document.getElementById('confirmPass')
var signup = document.getElementById('signUp')
var emailErorr = document.getElementById('emailErorr')
var passwordEror = document.getElementById('passwordEror')
var success = document.getElementById('success')
var confirmEror = document.getElementById('ConfirmEror')


var data = JSON.parse(localStorage.getItem('data')) || [];
console.log(data);

signup.addEventListener('click',function(){
   storeData()
    
})


function storeData(){
    if (
        signupName.value.trim() === '' || 
        signupEmail.value.trim() === '' || 
        signupPassword.value.trim() === '' || 
        confirmPass.value.trim() === ''
    ) {
        success.textContent = 'All fields are required!';
        success.style.color = 'red';
        return;
    }
    var signupData = {
        name : signupName.value,
        email : signupEmail.value,
        password : signupPassword.value,
        confirmPassword:confirmPass.value
    }
    for (let i = 0; i < data.length; i++) {
        if(signupEmail.value == data[i].email){
            emailErorr.textContent = 'Email already registered. Try another one!'
            return;
            
        }
        
    }
    if(signupPassword.value != confirmPass.value){
      confirmEror.textContent = 'Passwords do not match!'
        return
    }
data.push(signupData)
console.log(data);
success.textContent = 'Success'
success.style.color = 'green'
localStorage.setItem('data' , JSON.stringify(data))
clear()
clearErrors()


}

function clear(){
    signupName.value = null
    signupEmail.value = null
    signupPassword.value = null
    confirmPass.value = null

}
 
signupEmail.addEventListener('input', function(){
    validateEmail()
    
})
signupPassword.addEventListener('input',function(){
    validatePassword()
})
function validateEmail(){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(! emailPattern.test(signupEmail.value)){

emailErorr.textContent = 'Please enter a valid email!';
    } else {
        emailErorr.textContent = '';  
    }

}

function validatePassword() {
    if (signupPassword.value.length < 6) {
        passwordEror.textContent = 'Password must be at least 6 characters long!';
    } else {
        passwordEror.textContent = '';  }
}
function clearErrors() {
    emailErorr.textContent = '';
    passwordEror.textContent = '';
}
