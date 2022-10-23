
// const loginFunc = (usr, pass, finishLogin, failLogin) => {
//   console.log(`Posted Login API with the creds(User:${usr}, Pass:${pass}), awating for response`);
//   setTimeout(() => {
//     if (usr === 'sanjay' && pass === 'sanjay') {
//       finishLogin({ user: 'Sanjay', email: 'sanjay@gmail.com', isLoggedIn: true }); // trigger then function
//     }
//     else
//       failLogin({ user: 'sanjay', isLoggedIn: false });
//   }, 3000);
// };

// const loginPromise = new Promise((resolve, reject) => {
//   loginFunc('sanjay', 'sanjay', resolve, reject);
// });

// const getDetailsPromiseFunc = (email) => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ email, name: 'Sanjay', role: 'developer', stack: 'Python, JS, FE' });
//   }, 5000)
// })


// loginPromise
//   .then((value) => { // executed when the promise is fullfilled/resolved
//     console.log('Success', value);
//     const { email } = value;
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // resolve({ email, name: 'Sanjay', role: 'developer', stack: 'Python, JS, FE' });
//         reject({ message: 'error getting the user details' });
//       }, 5000)
//     });
//   })
//   .then((response) => {
//     console.log('Success Got Details', response);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve({ ...response, hobbies: ['webseries', 'movies', 'music'] });
//       }, 5000)
//     });
//   })
//   .then((hobbyResponse) => {
//     console.log('Success Hobby Response', hobbyResponse);
//   })
//   .catch((error) => { // executed when the promise is rejected/unfullfilled
//     console.log('Inside Catch', error);
//   })


// Promise.all

const interiorWork = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Interior is Done');
    resolve({ message: 'Interior work is Done' });
  }, 3000)
});

const exteriorWork = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Exterior is Done');
    resolve({ message: 'Exterior work is Done' });
  }, 6000)
});

const gardernWork = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('Garden is Done');
    // resolve({ message: 'Garden work is Done' });
    console.log('Garden workers are on leave');
    reject({ msg: 'Garden workers are on leave' })
  }, 4000)
});

Promise.all([interiorWork, exteriorWork, gardernWork])
  .then((values) => {
    console.log('All building is Done', values);
  })
  .catch((error) => {
    console.log('Building is not completed:', error)
  })
