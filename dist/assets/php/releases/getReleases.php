<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

// Example data for demonstration
$data = [
    "message" => "Hello from PHP!",
    "success" => true
];

// Return JSON response
echo json_encode($data);
?>