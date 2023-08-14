handlcheck = () => {
  let name = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (!name || !password) {
    retrurn;
  }

  const obj = {
    name,
    password,
  };
};
