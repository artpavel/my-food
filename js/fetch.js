// XMLHttpRequest with FORMDATE
const forms = document.querySelectorAll('form');

const message = {
  loading: 'Load...',
  success: 'Thanks! We call you soon!',
  failure: 'Somethig went worng...',
};
// const url = 'server.php';

// create function for communication with server
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: data,
  });

  return await res.json();
};

// for event on the some forms
const bindPostData = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // create block message
    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.textContent = message.loading;
    form.append(statusMessage);

    const formDate = new FormData(form);

    // create format json
    const obj = { ...formDate };
    // formDate.forEach((value, key) => {
    //   obj[key] = value;
    // });

    postData('http://localhost:3000/requests', JSON.stringify(obj))
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
  bindPostData(item);
});

const myUrl = 'http://localhost:3000/menu';

fetch(myUrl)
  .then((data) => data.json())
  .then((res) => console.log(res));
