// XMLHttpRequest with FORMDATE
const forms = document.querySelectorAll('form');

const message = {
  loading: 'Load...',
  success: 'Thanks! We call you soon!',
  failure: 'Somethig went worng...',
};
const url = 'server.php';

// for event on the some forms
const postData = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // create block message
    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.textContent = message.loading;
    form.append(statusMessage);

    const formDate = new FormData(form);

    // create format json
    const obj = {};
    formDate.forEach((value, key) => {
      obj[key] = value;
    });

    const json = JSON.stringify(obj);

    fetch('server.php', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: json,
    })
      .then((data) => data.text())
      .then((data) => {
        console.log(data);
        statusMessage.textContent = message.success;
        setTimeout(() => {
          statusMessage.remove();
        }, 2000);
      })
      .catch(() => {
        statusMessage.textContent = message.failure;
      })
      .finally(() => {
        form.reset();
      });
  });
};

// start all the forms on our page
forms.forEach((item) => {
  postData(item);
});

fetch('http://localhost:3000/menu')
  .then((data) => data.json())
  .then((res) => console.log(res));
