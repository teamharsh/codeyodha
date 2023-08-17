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
    localStorage.setItem('name2', name);
    localStorage.setItem('branch2', branch);
    localStorage.setItem('batch2', batch);
    localStorage.setItem('email2', email);
    localStorage.setItem('password2', password);
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
