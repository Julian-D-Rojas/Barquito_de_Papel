<?php
// Recuperar el valor del CAPTCHA enviado por el usuario

use PHPMailer\PHPMailer\PHPMailer;

$captchaValue = $_POST['g-recaptcha-response'];
$path = "log.log";
error_log( strlen($captchaValue), 3, $path);
// Validar el CAPTCHA
if (strlen($captchaValue) > 0 ) {
    error_log( 'El CAPTCHA es correcto.', 3, $path);

if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}
require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

//use PHPMailer\PHPMailer\PHPMailer;

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if( empty(trim($name)) ) $name = 'Anónimo';

$body = <<<HTML
    <div style="padding: 30px">
    <h2>Nueva solicitud </h2>
    <h3>Jardinbarquitodepapel.com</h3>
    <br>
    <p><b>De:</b> $name </p>
    <p><b>Correo:</b> $email</p>
    <p><b>Telefono:</b> $phone</p>
    <p><b>Mensaje:</b></p>
    $message
</div>
HTML;


//sintaxis de los emails email@algo.com || 
// name <email@algo.com>

// $headers = "MIME-Version: 1.0 \r\n";
// $headers.= "Content-type: text/html; charset=utf-8 \r\n";
// $headers.= "From: $name <$email> \r\n";
// $headers.= "To: Sitio web <julian.d.rojas16@gmail.com> \r\n";
// $headers.= "Cc: copia@email.com \r\n";
// $headers.= "Bcc: copia-oculta@email.com \r\n";

$mailer = new PHPMailer();
$mailer->setFrom( $email, $nombre );
$mailer->addAddress('direccion@jardinbarquitodepapel.com','Sitio web');
$mailer->Subject = "Nueva solicitud - Jardinbarquitodepapel.com";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';
//REMITENTE (NOMBRE/ - EMAIL)
//ASUNTO 
//CUERPO 
$rta = $mailer->send( );
//$rta = mail('julian.d.rojas16@gmail.com', "Jardin Barquito de Papel - Nueva solicitud del formulario de contacto:  $name", $body, $headers );
//var_dump($rta);
echo '<script> keyFormOk = true; console.log(`keyFormOk=${keyFormOk}`); </script>';
header("Location: index.html#contact" ); //hay que reemplazar esto enviando un accion a js y pintando el gracias.hml en la seccion de contacto

}
 else {
    // El CAPTCHA no es válido, muestra un mensaje de error o toma la acción adecuada
     error_log( 'El CAPTCHA es incorrecto.', 3, $path);
     header("Location: index.html#contact" );
 }
