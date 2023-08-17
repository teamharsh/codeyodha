function signup() {
  var name = document.getElementById('name').value;
  var branch = document.getElementById('branch').value;
  var batch = document.getElementById('batch').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (
    name === '' ||
    branch === '' ||
    batch === '' ||
    email === '' ||
    password === ''
  ) {
    alert('Please Fill the Form properly');
  } else {
    localStorage.setItem('name1', name);
    localStorage.setItem('branch1', branch);
    localStorage.setItem('batch1', batch);
    localStorage.setItem('email1', email);
    localStorage.setItem('password1', password);
    openPopup();
  }
}

let popup = document.getElementById('popup');

function openPopup() {
  popup.classList.add('open-popup');
}

function closePopup() {
  popup.classList.remove('open-popup');
}
