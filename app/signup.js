document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      try {
        const res = await fetch('https://td4ww0eh92.execute-api.us-east-1.amazonaws.com/main/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
  
        const result = await res.json();
        if (result.success) {
          window.location.href = '/app/index.html';
        } else {
          alert('Signup failed');
        }
      } catch (err) {
        console.error('Signup error:', err);
        alert('An error occurred during signup.');
      }
    });
  });
  