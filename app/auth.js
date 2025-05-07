document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupBtn = document.getElementById('signup-button');
  const guestBtn = document.getElementById('guest-button');

  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        const res = await fetch('https://td4ww0eh92.execute-api.us-east-1.amazonaws.com/main/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });

        const result = await res.json();
        if (result.success) {
          window.location.href = '/app/index.html';
        } else {
          alert('Login failed');
        }
      } catch (err) {
        console.error('Login error:', err);
        alert('An error occurred during login.');
      }
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener('click', () => {
      window.location.href = '/app/signup.html';
    });
  }

  if (guestBtn) {
    guestBtn.addEventListener('click', () => {
      window.location.href = '/app/index.html';
    });
  }
});
