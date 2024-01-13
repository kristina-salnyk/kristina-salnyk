(() => {
  const refs = {
    contactForm: document.querySelector('[data-contact-form]'),
  };

  const submitForm = event => {
    event.preventDefault();

    const formDate = new FormData(event.target);
    const values = Object.fromEntries(formDate.entries());
    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      alert('Please fill in all the fields');
      return;
    }

    emailjs
      .sendForm('gmail', 'template', event.target)
      .then(() => {
        alert('Your message has been sent!');
        event.target.reset();
      })
      .catch(error => {
        alert('Your message has not been sent!');
        console.error(error);
      });
  };

  refs.contactForm.addEventListener('submit', submitForm);
})();
