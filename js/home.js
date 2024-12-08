var welcomeMessage = document.getElementById('welcomeMessage');
var currentUser = JSON.parse(localStorage.getItem('currentUser')); 
var logout = document.getElementById('logout')

if (currentUser) {
  
    welcomeMessage.textContent = `Welcome, ${currentUser.name}`;
} else {
    alert('You must log in first!');
    window.location.href = 'index.html'; 
}


function logOut(){
    window.location.href = 'index.html'
}

logout.addEventListener('click',logOut)