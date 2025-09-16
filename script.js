// Advanced JS for Sarrthi IAS Website
// Contact form validation
if(document.querySelector('.card-form')){
  document.querySelector('.card-form').addEventListener('submit', function(e){
    e.preventDefault();
    let valid = true;
    const name = document.getElementById('name');
    const mobile = document.getElementById('mobile');
    const nameError = document.getElementById('nameError');
    const mobileError = document.getElementById('mobileError');
    nameError.style.display = 'none';
    mobileError.style.display = 'none';
    if(!name.value.trim()){
      nameError.style.display = 'block';
      valid = false;
    }
    if(!/^\d{10}$/.test(mobile.value.trim())){
      mobileError.style.display = 'block';
      valid = false;
    }
    if(valid){
      alert('Thank you! Hum jaldi aapko call karenge.');
      this.reset();
    }
  });
}
// FAQ toggle
if(document.querySelectorAll('.faq-item')){
  document.querySelectorAll('.faq-item').forEach(function(item){
    item.addEventListener('click',function(){
      item.classList.toggle('open');
    });
  });
}
// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
if(scrollBtn){
  window.addEventListener('scroll',function(){
    if(window.scrollY > 300){
      scrollBtn.classList.add('show');
    }else{
      scrollBtn.classList.remove('show');
    }
  });
  scrollBtn.addEventListener('click',function(){
    window.scrollTo({top:0,behavior:'smooth'});
  });
}
