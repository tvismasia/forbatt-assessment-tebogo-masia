  
  function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }

  // Toggle submenus
  document.querySelectorAll('.has-submenu > .menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.stopPropagation();
      const parent = this.parentElement;
      parent.classList.toggle('open');
    });
  });

