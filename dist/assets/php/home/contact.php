<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");
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

$file = fopen("out.txt", "w");
fwrite($file, $json);
fclose($file);
// Decode the JSON data into a PHP associative array
$input = json_decode($json, true);


$to = "marshallsofvictory@gmail.com";           // Recipient email address
$subject = "Wiadomość ze strony (" . $input["name"] . ")";                 // Subject of the email
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
    $mail->addAddress('marshallsofvictory@gmail.com', 'Marshalls of Victory');

    $mail->isHTML(true);
    $mail->Subject = 'A message from ' . $input["name"] . ' - MOV Website';
    $mail->Body    = '<b>From: '. $input["mail"] . '</b><br>' . $message;

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