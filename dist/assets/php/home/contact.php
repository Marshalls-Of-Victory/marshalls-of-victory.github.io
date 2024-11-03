<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

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

if (mail($to, $subject, wordwrap($message, 70, "\r\n"))) {
    $data["sent"] = true;
} else {
    $data["sent"] = false;
}



echo json_encode($data);

?>