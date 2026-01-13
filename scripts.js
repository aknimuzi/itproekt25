
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Contact form validation (simple)
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const msg = form.querySelector('[name="message"]').value.trim();
      if(!name || !email || !msg){
        alert('Пожалуйста, заполните все поля формы.');
        return;
      }
      // simulate sending
      alert('Сообщение отправлено — спасибо! (симуляция)');
      form.reset();
    });
  }

  // Simple project modal
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('click', function(){
      const modal = document.getElementById('project-modal');
      if(!modal) return;
      modal.querySelector('.modal-title').textContent = this.dataset.title || 'Проект';
      modal.querySelector('.modal-img').src = this.querySelector('img').src;
      modal.querySelector('.modal-desc').textContent = this.dataset.desc || '';
      modal.style.display = 'flex';
    });
  });
  const closeBtn = document.querySelector('.modal-close');
  if(closeBtn) closeBtn.addEventListener('click', ()=>document.getElementById('project-modal').style.display = 'none');
});
