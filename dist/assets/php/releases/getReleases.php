<?php
// header('Content-Type => application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

// Example data for demonstration

$releases = [
    ["releaseID" => "around-you", "title" => "Around You", "date" => "22-11-2024", "releaseType" => '<span en = "Single" pl = "Singiel"></span>', "imagePath" => "/assets/images/aroundyou.png", "description" => '
        <span en = "The first single of a young rock and roll band from Kraków, Poland - Marshalls of Victory. " pl = "Pierwszy singiel rock and rollowego zespołu z Krakowa - Marshalls of Victory."></span>
        ', "spotifyLink" => "#", "youtubeLink" => "#", "credits" => 
        [
            "<span en = 'Guitars' pl = 'Gitary'></span>" => "Patryk Sławiński, Alex Nemertsalov",
            "<span en = 'Vocals' pl = 'Wokale'></span>" => "Jan Krawczyk, Alex Nemertsalov",
            "<span en = 'Bass guitar' pl = 'Gitara basowa'></span>" => "Jan Krawczyk",
            "<span en = 'Drums' pl = 'Perkusja'></span>" => "Antoni Otwinowski",
            "" => "",
            "<span en = 'Composer' pl = 'Kompozytor'></span>" => "Patryk Sławiński",
            "<span en = 'Lyrics' pl = 'Tekst'></span>" => "Jan Krawczyk",
            "<span en = 'Produced by' pl = 'Wyprodukowane przez'></span>" => "Sebastian Ciotti",
            "<span en = 'Co-producer' pl = 'Współproducent'></span>" => "Patryk Sławiński",
            "<span en = 'Cover artist' pl = 'Twórca okładki'></span>" => "Kira Kudinova",
        ],
        "visible" => true,
        "after-releasedate-only" => false
    ],

    ["releaseID" => "made-in-vietnam", "title" => "Made In Vietnam", "date" => "20-12-2024", "releaseType" => '<span en = "Single" pl = "Singiel"></span>',  "imagePath" => "/assets/images/madeinvietnam.jfif", "description" => '
    
        <span en = "The second single of a young rock and roll band from Kraków, Poland - Marshalls of Victory. " pl = "Drugi singiel rock and rollowego zespołu z Krakowa - Marshalls of Victory."></span>
    
        ', "spotifyLink" => "#", "youtubeLink" => "#", "credits" =>
        [
            "<span en = 'Guitars' pl = 'Gitary'></span>" => "Patryk Sławiński, Alex Nemertsalov",
            "<span en = 'Vocals' pl = 'Wokale'></span>" => "Jan Krawczyk, Alex Nemertsalov",
            "<span en = 'Bass guitar' pl = 'Gitara basowa'></span>" => "Jan Krawczyk",
            "<span en = 'Drums' pl = 'Perkusja'></span>" => "Antoni Otwinowski",
            "" => "",
            "<span en = 'Composer' pl = 'Kompozytor'></span>" => "Patryk Sławiński",
            "<span en = 'Lyrics' pl = 'Tekst'></span>" => "Alex Nemertsalov, Jan Krawczyk",
            "<span en = 'Produced by' pl = 'Wyprodukowane przez'></span>" => "Sebastian Ciotti",
            "<span en = 'Co-producer' pl = 'Współproducent'></span>" => "Patryk Sławiński",
            "<span en = 'Cover artist' pl = 'Twórca okładki'></span>" => "Kira Kudinova",
        ],
        "visible" => true,
        "after-releasedate-only" => false
    ],

    ["releaseID" => "god-save-the-king", "title" => "God Save The King", "date" => "03-02-2025", "releaseType" => '<span en = "Single" pl = "Singiel"></span>',  "imagePath" => "/assets/images/gtskcover.jpg", "description" => '
    
        <span en = "The third single of a young rock and roll band from Kraków, Poland - Marshalls of Victory. " pl = "Trzeci singiel rock and rollowego zespołu z Krakowa - Marshalls of Victory."></span>
    
        ', "spotifyLink" => "#", "youtubeLink" => "#", "credits" =>
        [
            "<span en = 'Guitars' pl = 'Gitary'></span>" => "Patryk Sławiński, Alex Nemertsalov",
            "<span en = 'Vocals' pl = 'Wokale'></span>" => "Jan Krawczyk, Alex Nemertsalov",
            "<span en = 'Bass guitar' pl = 'Gitara basowa'></span>" => "Jan Krawczyk",
            "<span en = 'Drums' pl = 'Perkusja'></span>" => "Antoni Otwinowski",
            "" => "",
            "<span en = 'Composer' pl = 'Kompozytor'></span>" => "Patryk Sławiński",
            "<span en = 'Lyrics' pl = 'Tekst'></span>" => "Alex Nemertsalov",
            "<span en = 'Produced by' pl = 'Wyprodukowane przez'></span>" => "Patryk Sławiński",
            "<span en = 'Cover artist' pl = 'Twórca okładki'></span>" => "Jan Krawczyk",
        ],
        "visible" => true,
        "after-releasedate-only" => false
    ]

    
];


$releases_send_to_client = [];

$now = new DateTime();

for ($i = 0; $i < sizeof($releases); $i++) {
    if ($releases[$i]["visible"]) {
        $date = DateTime::createFromFormat("d-m-Y", $releases[$i]["date"]);
        if (!$releases[$i]["after-releasedate-only"] || $date <= $now) { //should it be displayed at all ?

            $releases_send_to_client[$i] = $releases[$i];

            $releases_send_to_client[$i]["upcoming"] = ($date >= $now); //is it an upcoming release ?
            
            
        }

        
    }
    
}

$data = $releases_send_to_client;

// Return JSON response
echo json_encode($data);
?>