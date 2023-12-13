import '../css/app.css'
import 'flowbite';

window.onload = function() {
    // Dapatkan tombol
    var mybutton = document.getElementById("backToTopBtn");
  
    // Saat pengguna scroll down 20px dari atas, tampilkan tombol
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.remove('hidden');
      } else {
        mybutton.classList.add('hidden');
      }
    };
  
    // Saat pengguna klik tombol, scroll ke atas halaman
    mybutton.onclick = function() {
      document.body.scrollTop = 0; // Untuk Safari
      document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE dan Opera
    };
  };

  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById(this.dataset.target);
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });