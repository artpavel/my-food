// XMLHttpRequest with FORMDATE
const forms = document.querySelectorAll('form');

const message = {
  loading: "Load...",
  success: "Thanks! We call you soon!",
  failure: "Somethig went worng..."
};
const url = 'server.php';

// for event on the some forms
const postData = form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // create block message
    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.textContent = message.loading;
    form.append(statusMessage);

    // create request
    const req = new XMLHttpRequest();
    // for form
    const formDate = new FormData(form);

    req.open('POST', url);

    req.setRequestHeader('Content-type', 'application/json');

    // create format json
    const obj = {};
    formDate.forEach((value, key) => {
      obj[key] = value;
    });
    const json = JSON.stringify(obj);
    req.send(json);

    //req.send(formDate);
    // it not need for formDate
    //req.setRequestHeader('Content-type', 'multipart/form-data');


    req.addEventListener('load', () => {
      if (req.status === 200) {
        console.log(req.response);
        statusMessage.textContent = message.success;
        // clear form
        form.reset();
        // message disappear in 2 sec
        setTimeout(() => {
          statusMessage.remove();
        }, 2000);
      } else {
        console.log('ERROR!!!');
        statusMessage.textContent = message.failure;
      }
    });
  });
};

// start all the forms on our page
forms.forEach(item => {
  postData(item);
});

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

console.log('fetch');