<?php
// header('Content-Type => application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

// Example data for demonstration

$json = file_get_contents("php://input");

$input = json_decode($json, true);

// $file = fopen("codes/"."1".".txt", "a");
// fwrite($file, $input["code"]);
// fclose($file);
// $file = fopen("1.txt", "w");
// fwrite($file, $json);
// fclose($file);

if ($input["code"] != "") {
    $file = fopen("codes/".$input["code"].".txt", "a");
    fwrite($file, $input["ip"] . "\n");
    fclose($file);
}




// $releases_send_to_client = [];

// $now = new DateTime();

// for ($i = 0; $i < sizeof($releases); $i++) {
//     if ($releases[$i]["visible"]) {
//         $date = DateTime::createFromFormat("d-m-Y", $releases[$i]["date"]);
//         if (!$releases[$i]["after-releasedate-only"] || $date <= $now) { //should it be displayed at all ?

//             $releases_send_to_client[$i] = $releases[$i];

//             $releases_send_to_client[$i]["upcoming"] = ($date >= $now); //is it an upcoming release ?
            
            
//         }

        
//     }
    
// }

// $data = $releases_send_to_client;

// Return JSON response
// echo json_encode($data);
?>