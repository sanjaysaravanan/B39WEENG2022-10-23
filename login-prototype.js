const loginForm = document.getElementById('login-form');

const loginArea = document.getElementById('login-area');

const appArea = document.getElementById('app');

const spinner = document.getElementById('spinner');

const loginSuccess = (response) => {
  loginArea.style.display = 'none';
  spinner.style.display = 'none';
  appArea.innerText += ` ${response.name}`
  appArea.style.display = 'block';
}


// node/element/tag ---> a single tag in html

const triggerLogin = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'sanjay@gmail.com' && data.password === '12345') {
        resolve({ email: 'sanjay@gmail.com', name: 'Sanjay Saravanan' });
      }
    }, 2000);
  })
}

loginForm.addEventListener('submit', (e) => {

  loginForm.style.display = 'none';
  spinner.style.display = 'inline-block'


  e.preventDefault();
  let data = {};

  console.log(e);

  const formElements = e.target.elements;

  Array.from(formElements).forEach((element) => {
    if (element.nodeName === 'INPUT') {
      data[element.name] = element.value; // data['email'] = 'value'
    }
  });

  triggerLogin(data).then((response) => {
    loginSuccess(response);
  })


});