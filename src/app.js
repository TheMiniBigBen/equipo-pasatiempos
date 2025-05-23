// Animación para mostrar/ocultar hobbies con slide
function toggleHobbies(personId) {
    const hobbiesSection = document.getElementById(`hobbies-${personId}`);
    const icon = document.querySelector(`#hobbies-${personId}`).previousElementSibling.querySelector('i');
    
    hobbiesSection.classList.toggle('hidden');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
    
    // Animación suave
    if (!hobbiesSection.classList.contains('hidden')) {
        hobbiesSection.style.opacity = '0';
        hobbiesSection.style.height = '0';
        hobbiesSection.style.overflow = 'hidden';
        
        setTimeout(() => {
            hobbiesSection.style.transition = 'opacity 0.3s, height 0.3s';
            hobbiesSection.style.opacity = '1';
            hobbiesSection.style.height = `${hobbiesSection.scrollHeight}px`;
        }, 10);
    } else {
        hobbiesSection.style.height = `${hobbiesSection.scrollHeight}px`;
        setTimeout(() => {
            hobbiesSection.style.transition = 'opacity 0.3s, height 0.3s';
            hobbiesSection.style.opacity = '0';
            hobbiesSection.style.height = '0';
        }, 10);
    }
}

function toggleHobbies(id) {
  const el = document.getElementById(`hobbies-${id}`);
  if (el.classList.contains('hidden')) {
    el.classList.remove('hidden');
  } else {
    el.classList.add('hidden');
  }
}

// Validación de formulario con feedback visual
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    let isValid = true;
    
    // Validar nombre
    if (nombre.value.trim() === '') {
        nombre.style.borderColor = 'red';
        isValid = false;
    } else {
        nombre.style.borderColor = '#ddd';
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.style.borderColor = 'red';
        isValid = false;
    } else {
        email.style.borderColor = '#ddd';
    }
    
    // Validar mensaje
    if (mensaje.value.trim().length < 10) {
        mensaje.style.borderColor = 'red';
        isValid = false;
    } else {
        mensaje.style.borderColor = '#ddd';
    }
    
    if (isValid) {
        // Simular envío exitoso
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Enviado con éxito';
        submitBtn.style.backgroundColor = 'var(--success)';
        
        setTimeout(() => {
            submitBtn.innerHTML = 'Enviar mensaje <i class="fas fa-paper-plane"></i>';
            submitBtn.style.backgroundColor = 'var(--primary)';
            this.reset();
        }, 3000);
    }
});

// Efecto parallax para el hero
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});