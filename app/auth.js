document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const res = await fetch('https://td4ww0eh92.execute-api.us-east-1.amazonaws.com/main/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
  
    const result = await res.json();
    if (result.success) window.location.href = '/app/index.html';
    else alert('Login failed');
  });
  
  document.getElementById('signup-button').addEventListener('click', () => {
    window.location.href = '/app/signup.html';
  });
  
  document.getElementById('guest-button').addEventListener('click', () => {
    window.location.href = '/app/index.html';
  });
  