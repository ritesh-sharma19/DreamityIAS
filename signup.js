// Basic signup logic using fetch to backend (to be implemented)
document.getElementById('signupForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const errorDiv = document.getElementById('signupError');
  errorDiv.textContent = '';
  // Send to Node.js backend
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name, email, password})
  })
  .then(res => res.json())
  .then(data => {
    if(data.success){
      window.location.href = 'login.html';
    }else{
      errorDiv.textContent = data.message || 'Signup failed.';
    }
  })
  .catch(()=>{
    errorDiv.textContent = 'Server error.';
  });
});
