<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "eugenia.watanabe@watanabece.com";
$email_subject = "Contacto desde el sitio web watanabece.com";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['nombre']) ||
!isset($_POST['tipo_consulta']) ||
!isset($_POST['mensaje']) ||
!isset($_POST['email'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Asunto: " . $_POST['tipo_consulta'] . "\n\n";
$email_message .= "Texto: " . $_POST['mensaje'] . "\n\n";

$email_from = $_POST['email'];
$email_subject = $_POST['tipo_consulta'];


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!</br>";
echo "<a href=\"http://eugewatanabece.com\">Volver atrás</a>";
}
?>
