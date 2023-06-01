const buttons = document.querySelectorAll('.login-btn');

buttons.forEach(button => {
  button.addEventListener('mousedown', (event) => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${event.offsetX}px`;
    ripple.style.top = `${event.offsetY}px`;
    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 700);
  });
});


const emailBtn = document.querySelector('#op-email');
const phoneBtn = document.querySelector('#op-phone');
const opLabel = document.querySelector('#op-label');
const opInput = document.querySelector('#email');
const opTitle = document.querySelector('#op-title');
const emailError = document.querySelector('.email-error');

emailBtn.addEventListener('click', () => {
  if (!emailBtn.classList.contains('btn-option')) {
    emailBtn.classList.add('btn-option');
    phoneBtn.classList.remove('btn-option');
    opLabel.textContent = 'E-mail';
    opInput.placeholder  = 'Enter your e-mail';
    opTitle.innerHTML = 'Please enter E-mail and Password';
    opInput.setAttribute("type", "email");
    emailError.classList.remove('d-none');
  }
});

phoneBtn.addEventListener('click', () => {
  if (!phoneBtn.classList.contains('btn-option')) {
    phoneBtn.classList.add('btn-option');
    emailBtn.classList.remove('btn-option');
    opLabel.textContent = 'Phone number';
    opTitle.innerHTML = 'Please enter Phone number and Password';
    opInput.placeholder  = 'Enter your phone number';
    opInput.setAttribute("type", "tel");
    emailError.classList.add('d-none');
  }
});

