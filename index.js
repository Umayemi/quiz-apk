
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('login');

submitButton.addEventListener('click', function(event) {
  const email = emailInput.value;
  const password = passwordInput.value;
  
  if ((email=='') || (password=='')) {
    event.preventDefault();
    alert('Please provide valid login information.');
  }
});



function toggle() {
    if (password.type == "password") {
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("open").style.visibility = "visible";
        document.getElementById("close").style.visibility = "hidden";
        password.type = "text";
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("close").style.visibility = "visible";
        document.getElementById("open").style.visibility = "hidden";
        password.type = "password";
    }
   
}