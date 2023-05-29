document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-button');
  const menuSelect = document.querySelector('.menu-select');

  // Agregar evento de clic al botón del menú
  menuButton.addEventListener('click', function() {
    console.log('Botón de menú clickeado');
    menuSelect.style.display = menuSelect.style.display === 'none' ? 'block' : 'none';
  });
});



// Agrega clases al elemento body según el tamaño de la ventana
function addDeviceClasses() {
  const width = window.innerWidth;

  if (width <= 480) {
    document.body.classList.add('mobile');
  } else if (width > 480 && width <= 1024) {
    document.body.classList.add('tablet');
  } else {
    document.body.classList.add('desktop');
  }
}

// Remueve las clases de dispositivo al cambiar el tamaño de la ventana
function removeDeviceClasses() {
  document.body.classList.remove('mobile', 'tablet', 'desktop');
}

// Función de inicio
function init() {
  addDeviceClasses();

  // Vuelve a calcular las clases de dispositivo al cambiar el tamaño de la ventana
  window.addEventListener('resize', () => {
    removeDeviceClasses();
    addDeviceClasses();
  });
}

// Inicialización
init();
