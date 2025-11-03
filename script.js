document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audioPlayer");
    var playPauseButton = document.getElementById("playPauseButton");
    var iconoPlayPause = document.getElementById("iconoPlayPause");
    var progressBar = document.getElementById("progress-bar");
    var currentTimeDisplay = document.getElementById("current-time");
    var durationTimeDisplay = document.getElementById("duration-time");

    var modal = document.getElementById('photo-modal');
    var seal = document.getElementById("seal");
    let currentSlide = 0;   
    const wishes = [];

    // Función para abrir el sobre y reproducir la música
    function openEnvelopeAndPlayMusic() {
        var envelopeTop = document.getElementById("envelope-top");
        var envelopeBottom = document.getElementById("envelope-bottom");
        var envelope = document.getElementById("envelope");
        var invitation = document.getElementById("invitation");
      
        envelopeTop.style.transform = 'translateY(-100vh)';
        envelopeBottom.style.transform = 'translateY(100vh)';
      
        setTimeout(function() {
            envelope.classList.add('hidden');
            invitation.classList.remove('hidden');
          }, 600); // antes 1000
          
      
        audio.play().then(function() {
            iconoPlayPause.classList.remove("fa-play");
            iconoPlayPause.classList.add("fa-pause");
            updateProgress(); 
        }).catch(function(error) {
            console.log('Playback failed: ', error);
            iconoPlayPause.classList.add("fa-play");
            iconoPlayPause.classList.remove("fa-pause");
        });
      }
      
      // 👇 Esta línea es la clave:
      window.openEnvelopeAndPlayMusic = openEnvelopeAndPlayMusic;
      

    // ✅ Solo un listener para el sello (corregido)
    seal.addEventListener("click", function(event) {
        event.stopPropagation();
        seal.disabled = true; // evita múltiples clics
        openEnvelopeAndPlayMusic();
    });

    function togglePlayPause() {
        if (!audio || !iconoPlayPause) return;

        requestAnimationFrame(() => {
            iconoPlayPause.classList.toggle("fa-play");
            iconoPlayPause.classList.toggle("fa-pause");
        });

        setTimeout(() => {
            if (audio.paused) {
                audio.play().catch(console.error);
            } else {
                audio.pause();
            }
        }, 50);
    }

    function updateProgress() {
        audio.addEventListener("timeupdate", function() {
            var progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;

            var currentMinutes = Math.floor(audio.currentTime / 60);
            var currentSeconds = Math.floor(audio.currentTime % 60);
            currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}`;

            if (!isNaN(audio.duration)) {
                var durationMinutes = Math.floor(audio.duration / 60);
                var durationSeconds = Math.floor(audio.duration % 60);
                durationTimeDisplay.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;
            }
        });
    }

    progressBar.addEventListener("input", function() {
        var newTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = newTime;
    });

    playPauseButton.addEventListener("click", function() {
        togglePlayPause();
    });

    const targetDate = new Date('2026-03-07T00:00:00').getTime();
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector('.countdown').textContent = "Gracias por habernos acompañado en este día tan especial.";
        }
    }, 1000);

    // Aparición de textos con scroll
    const elementsToFade = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elementsToFade.forEach(element => {
        const delay = [...elementsToFade].indexOf(element) * 0.05;
        element.style.transitionDelay = `${delay}s`;
        observer.observe(element);
    });

    // Galería
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('photo-modal').addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal();
        }
    });

    // Optimización visual
    document.querySelector(".title").classList.add("visible");
});

//wishes.js
// script.js
(() => {
    const $ = (sel) => document.querySelector(sel);
  
    function setFormVisibility(show) {
      const form = document.getElementById('wish-form');
      if (!form) return;
  
      if (show) {
        form.classList.remove('hidden');
        form.style.display = '';          // resetea inline
      } else {
        form.classList.add('hidden');
        form.style.display = 'none';      // fuerza oculto (por si algún estilo gana)
      }
  
      // Actualizar texto del botón
      const btn = $('.wishes-section button[onclick="toggleWishForm()"]');
      if (btn) btn.textContent = show ? 'OCULTAR FORMULARIO' : 'ENVIAR BUENOS DESEOS';
    }
  
    function toggleWishForm() {
      const form = document.getElementById('wish-form');
      if (!form) return;
  
      // Determinar estado actual de forma confiable
      const currentlyHidden = form.classList.contains('hidden') || getComputedStyle(form).display === 'none';
      setFormVisibility(currentlyHidden); // si está oculto => mostrar; si está visible => ocultar
    }
  
    function toggleWishes() {
      const wishesDiv = document.getElementById('wishes');
      if (!wishesDiv) return;
  
      const willShow = wishesDiv.classList.contains('hidden') || getComputedStyle(wishesDiv).display === 'none';
      if (willShow) {
        wishesDiv.classList.remove('hidden');
        wishesDiv.style.display = '';
      } else {
        wishesDiv.classList.add('hidden');
        wishesDiv.style.display = 'none';
      }
  
      const btn = document.querySelector('.wishes-section button[onclick="toggleWishes()"]');
      if (btn) btn.textContent = willShow ? 'OCULTAR BUENOS DESEOS' : 'VER BUENOS DESEOS';
    }
  
    // === Mostrar/Ocultar detalles de cuenta ===
function toggleDetails() {
    const details = document.getElementById("accountDetails");
    if (!details) return;
    const isHidden = details.style.display === "none" || details.style.display === "";
    details.style.display = isHidden ? "block" : "none";
  }
  
  // Exponer para el onclick del HTML
  window.toggleDetails = toggleDetails;
  

    // Exponer para los onclick del HTML
    window.toggleWishForm = toggleWishForm;
    window.toggleWishes = toggleWishes;
  
    // Estado inicial coherente al cargar
    window.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('wish-form');
      setFormVisibility(form ? !form.classList.contains('hidden') && getComputedStyle(form).display !== 'none' : false);
  
      const wishesDiv = document.getElementById('wishes');
      const wishesBtn = document.querySelector('.wishes-section button[onclick="toggleWishes()"]');
      if (wishesDiv && wishesBtn) {
        const isHidden = wishesDiv.classList.contains('hidden') || getComputedStyle(wishesDiv).display === 'none';
        wishesBtn.textContent = isHidden ? 'VER BUENOS DESEOS' : 'OCULTAR BUENOS DESEOS';
      }
    });
  })();

  function changePhoto(imgEl) {
    const src = imgEl.getAttribute('src');
    const main = document.getElementById('main-photo');
    const modalImg = document.getElementById('main-photo-modal');
  
    if (main) main.src = src;
    if (modalImg) modalImg.src = src;
  }
  