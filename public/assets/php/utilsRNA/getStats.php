<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Example data for demonstration

$json = file_get_contents("php://input");

$input = json_decode($json, true);

// $file = fopen("codes/"."1".".txt", "a");
// fwrite($file, $input["code"]);
// fclose($file);
// $file = fopen("1.txt", "w");
// fwrite($file, $json);
// fclose($file);

// if ($input["code"] != "") {
//     $file = fopen("codes/".$input["code"].".txt", "a");
//     fwrite($file, $input["ip"]);
//     fclose($file);
// }




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

//code descriptions

$descs = Array();
$file = fopen("codeDescriptions.txt", 'r');

while (($line = fgets($file)) !== false) {
    $split = explode(';', $line);
    $descs[$split[0]] = $split[1];
}
fclose($file);


//aliases

$aliases = Array();
$file = fopen("ipAliases.txt", 'r');

while (($line = fgets($file)) !== false) {
    $split = explode(';', $line);
    $aliases[$split[0]] = $split[1];
}
fclose($file);

//codes
$codes = Array();
// $files = scandir("codes/");
$files = array_diff(scandir("codes/"), array('.', '..'));

function handleCode($code) {
    $entries = Array();
    $file = fopen("codes/".$code.".txt", 'r');
    while (($line = fgets($file)) !== false) {
        $line = str_replace("\n","", $line);
        $line = str_replace("\r","", $line);
        if (!isset($entries[$line])) {
            $entries[$line] = 0;
        }
        $entries[$line]++;
    }
    fclose($file);
    return $entries;
}

foreach ($files as $k => $file) {
    $code = explode('.', $file)[0];
    $codes[$code] = handleCode($code);


}





$data = Array(
    "logged" => true,
    "info" => Array(
        "codes" => $codes,
        "aliases" => $aliases,
        "descs" => $descs
    )
);

if ($input["password"] != "383494") {
    $data = Array(
        "logged" => false
    ); 
}

// Return JSON response
echo json_encode($data);
?>