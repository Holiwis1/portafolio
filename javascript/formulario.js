document.getElementById("resetButton").addEventListener("click", mostrarConfirmacionReset);

document.getElementById("confirmYes").addEventListener("click", confirmarReset);
document.getElementById("confirmNo").addEventListener("click", ocultarConfirmacionReset);

function mostrarConfirmacionReset() {
  document.getElementById("confirmBox").style.display = "flex";
}

function ocultarConfirmacionReset() {
  document.getElementById("confirmBox").style.display = "none";
}

function confirmarReset() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("email").value = "";
  document.getElementById("empresa").value = "";
  document.getElementById("genero").value = "hombre";
  document.getElementById("mensaje").value = "";

  ocultarConfirmacionReset();
}

document.getElementById("resetButton").addEventListener("click", mostrarConfirmacionReset);
document.getElementById("confirmYes").addEventListener("click", confirmarReset);
document.getElementById("confirmNo").addEventListener("click", ocultarConfirmacionReset);

document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); 
  mostrarAlerta();
});

function mostrarConfirmacionReset() {
  document.getElementById("confirmBox").style.display = "flex";
}

function ocultarConfirmacionReset() {
  document.getElementById("confirmBox").style.display = "none";
}

function confirmarReset() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("email").value = "";
  document.getElementById("empresa").value = "";
  document.getElementById("genero").value = "hombre";
  document.getElementById("mensaje").value = "";

  ocultarConfirmacionReset();
}

function mostrarAlerta() {
  Swal.fire({
    icon: 'success',
    title: 'Añadido correctamente',
    showConfirmButton: false,
    timer: 1500
  });
}