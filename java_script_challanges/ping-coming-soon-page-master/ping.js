const inputEl = document.querySelector('#email');
const btnNotifyME = document.querySelector('#notify-me');
const RegEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let errors = [];

btnNotifyME.addEventListener('click', e => {
  errors = [];
  e.preventDefault();
  const email = inputEl.value;
  const p = document.querySelector('.invalid-text');
  if (email == '' || email === undefined) {
    inputEl.classList.add('invalid');
    errors.push('please provide us your email address.');
  } else if (!email.match(RegEmail)) {
    inputEl.classList.add('invalid');
    errors.push('please provide us your valid email address.');
  }
  p.innerText = errors[0];
  if (!errors.length > 0) {
    inputEl.classList.add('valid');
    p.classList.add('valid-text');
    p.innerText = 'Thank you for subscribe.';
  }
});