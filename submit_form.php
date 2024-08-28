<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Configurar el correo
    $to = "tuemail@ejemplo.com";
    $subject = "Nuevo mensaje de contacto";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Construir el cuerpo del mensaje
    $body = "Nombre: $name\n";
    $body .= "Correo Electrónico: $email\n";
    $body .= "Teléfono: $phone\n";
    $body .= "Mensaje:\n$message\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
