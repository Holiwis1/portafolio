<!DOCTYPE html>
<html>
<head>
  <title>Datos del Formulario</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/php.css">
</head>
<body>
  <h2>Datos del Formulario</h2>
  
  <?php
  // Verificar si se enviaron datos del formulario
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario
    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $email = $_POST["email"];
    $empresa = $_POST["empresa"];
    $genero = $_POST["genero"];
    $mensaje = $_POST["mensaje"];

    // Mostrar los datos del formulario en la página
    echo "<p><strong>Nombre:</strong> $nombre</p>";
    echo "<p><strong>Apellidos:</strong> $apellidos</p>";
    echo "<p><strong>Correo Electrónico:</strong> $email</p>";
    echo "<p><strong>Empresa:</strong> $empresa</p>";
    echo "<p><strong>Género:</strong> $genero</p>";
    echo "<p><strong>Mensaje:</strong> $mensaje</p>";
  }
  ?>
  
</body>
</html>