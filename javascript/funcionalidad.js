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
  event.preventDefault(); // Evitar el envio del formulario

  // Mostrar pantalla emergente de confirmacion
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

  // Al pasar el raton por encima del elemento li
  item.addEventListener("mouseover", () => {
    nivelIndicador.style.width = `${nivel}%`;
  });

  // Al quitar el raton del elemento li
  item.addEventListener("mouseout", () => {
    nivelIndicador.style.width = "0";
  });
});

// Funcion para obtener el nivel del idioma
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
      caja.style.display = "block";// Muestra la tarjeta si el indice coincide
    } else {
      caja.style.display = "none";// Oculta la tarjeta si el indice no coincide
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



const btnMasInformacion = document.getElementById("btn-mas-informacion");
const footerInfo = document.getElementById("footer-info");

btnMasInformacion.addEventListener("click", () => {
  if (footerInfo.style.display === "none") {
    footerInfo.style.display = "block";
  } else {
    footerInfo.style.display = "none";
  }
  // Agrega un evento click adicional para desplazarse hacia elcontacto
  btnMasInformacion.addEventListener("click", () => {
    footerInfo.scrollIntoView({ behavior: "smooth" });
  });
});
