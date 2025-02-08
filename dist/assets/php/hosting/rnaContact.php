<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

error_reporting(E_ALL|E_STRICT);
ini_set('display_errors', 1);

// Get the raw JSON input
$json = file_get_contents("php://input");

// Decode the JSON data into a PHP associative array
$input = json_decode($json, true);


$to = "rocknaidunderground@gmail.com";           // Recipient email address
$subject = "Wiadomość ze strony Rock N` Aid (" . $input["name"] . ")";                 // Subject of the email
$message = $input["message"]; // Email message body
//$headers = "From: ".$input["mail"];   // Headers, specifying the sender's email

$data = [];

// Send the email



$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'movmailer@gmail.com';
    $mail->Password   = 'ujxhmfncenuqokze';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('movmailer@gmail.com', 'MOV Mailer');
    $mail->addAddress('rocknaidunderground@gmail.com', 'Rock N` Aid');

    $mail->isHTML(true);
    $mail->Subject = '[Kontakt ze strony RNA]: ' . $input["name"];
    $mail->Body    = '<b>Wysłane przez: </b><br>' . $input["name"] . '<br>' . $input["mail"] . '<br>' . $input["phone"] . '<br><br><b>Treść: </b><br>' . $message;

    $mail->send();
    //echo 'Message has been sent';
    $data["sent"] = true;
} catch (Exception $e) {
    //echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    $data["sent"] = false;
    $data["error"] = $mail->ErrorInfo;
}





echo json_encode($data);

?>