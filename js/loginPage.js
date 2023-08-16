function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var email1 = localStorage.getItem('email1');
  var password1 = localStorage.getItem('password1');

  if (email == email1 && password == password1) {
    // window.location.href = 'Dashboard.html';
    window.open('Dashboard.html');
    console.log("It's correct");
  } else {
    alert('Incorrect Email or Password');
  }
}
