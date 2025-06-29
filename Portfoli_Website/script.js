document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    document.getElementById('form-message').textContent = 'Thank you for your message!';
    this.reset();
  } else {
    document.getElementById('form-message').textContent = 'Please fill in all fields.';
  }
});
