(() => {
  fetch('https://courses-r5pl.onrender.com/users/me')
    .then(response => response.json())
    .then(response => console.log('Courses API ', response))
    .catch(error => console.error('Error triggering Courses API ', error));

  fetch('https://petly-4cyh.onrender.com/api/user/current')
    .then(response => response.json())
    .then(response => console.log('Petly API ', response))
    .catch(error => console.error('Error triggering Petly API ', error));
})();
