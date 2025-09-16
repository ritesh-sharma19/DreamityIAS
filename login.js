// Basic login logic using fetch to backend (to be implemented)
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorDiv = document.getElementById('loginError');
  errorDiv.textContent = '';
  // Send to Node.js backend
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  })
  .then(res => res.json())
  .then(data => {
    if(data.success){
      window.location.href = 'raja.html';
    }else{
      errorDiv.textContent = data.message || 'Invalid credentials.';
    }
  })
  .catch(()=>{
    errorDiv.textContent = 'Server error.';
  });
});
