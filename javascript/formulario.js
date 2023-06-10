

document.getElementById("confirmYes").addEventListener("click", confirmarReset);
document.getElementById("confirmNo").addEventListener("click", ocultarConfirmacionReset);
// Funcion que muestra la confirmación de reinicio
function mostrarConfirmacionReset() {
  document.getElementById("confirmBox").style.display = "flex";
}
// Funcion que oculta la confirmacion de reinicio
function ocultarConfirmacionReset() {
  document.getElementById("confirmBox").style.display = "none";
}
// Funcion que realiza el reinicio del formulario
function confirmarReset() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("email").value = "";
  document.getElementById("empresa").value = "";
  document.getElementById("genero").value = "hombre";
  document.getElementById("mensaje").value = "";
// Oculta la confirmacion de reinicio
  ocultarConfirmacionReset();
}

document.getElementById("resetButton").addEventListener("click", mostrarConfirmacionReset);
document.getElementById("confirmYes").addEventListener("click", confirmarReset);
document.getElementById("confirmNo").addEventListener("click", ocultarConfirmacionReset);
// Agrega un evento submit al formulario que llama a la función mostrarAlerta y evita el envío del formulario
document.getElementById("formulario").addEventListener("submit", function(event) {
  // Evita el envio del formulario
  event.preventDefault(); 
  mostrarAlerta();
});






