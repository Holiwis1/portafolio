const logoLetters = document.querySelectorAll(".logo span");

logoLetters.forEach((letter) => {
  letter.addEventListener("mouseover", () => {
    letter.style.color = "lightseagreen";
  });

  letter.addEventListener("mouseout", () => {
    letter.style.color = "";
  });
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Mostrar pantalla emergente de confirmación
  document.getElementById("confirmation").style.display = "block";

  // Restablecer el formulario después de 3 segundos
  setTimeout(function () {
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("myForm").reset();
  }, 3000);
});

//FUNCION NIVELES
const idiomasList = document.querySelector(".idiomas");

// Obtener todos los elementos li de la lista de idiomas
const idiomasItems = idiomasList.querySelectorAll("li");

// Recorrer cada elemento li y agregar  de idioma-nombrey nivel-indicada
idiomasItems.forEach((item) => {
  const idiomaNombre = item.querySelector(".idioma-nombre");
  const nivelIndicador = item.querySelector(".nivel-indicador");

  // Obtener el nivel del idioma
  const nivel = obtenerNivelIdioma(idiomaNombre.textContent);

  // Al pasar el ratón por encima del elemento li
  item.addEventListener("mouseover", () => {
    nivelIndicador.style.width = `${nivel}%`;
  });

  // Al quitar el ratón del elemento li
  item.addEventListener("mouseout", () => {
    nivelIndicador.style.width = "0";
  });
});

// Función para obtener el nivel del idioma
function obtenerNivelIdioma(idioma) {
  let nivel = 0;
  switch (idioma) {
    case "Inglés":
      nivel = 30; // Nivel b1
      break;
    case "Español":
      nivel = 100; // Nivel nativo
      break;
    case "Valenciano":
      nivel = 70; // Nivel c1
      break;
  }
  return nivel;
}
//funcion SLIDER
const btnSiguiente = document.getElementById("btn-siguiente");
btnSiguiente.addEventListener("click", pasarSiguiente);
const slider = document.querySelector(".caja");
const cajas = Array.from(document.querySelectorAll(".tarjeta"));
let currentIndex = 0;

function mostrarCaja(index) {
  cajas.forEach((caja, i) => {
    if (i === index) {
      caja.style.display = "block";
    } else {
      caja.style.display = "none";
    }
  });
}

function pasarSiguiente() {
  currentIndex++;
  if (currentIndex >= cajas.length) {
    currentIndex = 0;
  }
  mostrarCaja(currentIndex);
}

mostrarCaja(currentIndex);

// Evento  para el botón de siguiente

const btnMasInformacion = document.getElementById("btn-mas-informacion");
const footerInfo = document.getElementById("footer-info");

btnMasInformacion.addEventListener("click", () => {
  if (footerInfo.style.display === "none") {
    footerInfo.style.display = "block";
  } else {
    footerInfo.style.display = "none";
  }
  btnMasInformacion.addEventListener("click", () => {
    footerInfo.scrollIntoView({ behavior: "smooth" });
  });
});
