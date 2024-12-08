var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var logIn = document.getElementById('logIn')
var erorr = document.getElementById('loginEror')

var users = JSON.parse(localStorage.getItem('data')) || [];


logIn.addEventListener('click',function(){

var useFound = false
  var  email = signinEmail.value
   var password = signinPassword.value
   if (email === '' || password === '') {
      erorr.textContent ='Please fill in all fields.'
    return;
}

   for (let i = 0;i < users.length; i++) {  
if((email == users[i].email )&&(password == users[i].password)){
    useFound = true
    localStorage.setItem('currentUser', JSON.stringify(users[i]));
    window.location.href = 'home.html'; 
    break;
}
   }
  if(!useFound){
    erorr.textContent ='incorrect email or password'
  }

  clear()
})
function clear() {
    signinEmail.value = null
    signinPassword.value = null
}
