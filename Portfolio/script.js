document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-message').textContent = 'Thanks! I will get back to you soon.';
  this.reset();
});
