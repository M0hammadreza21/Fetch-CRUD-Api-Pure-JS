<?php
$server = "localhost";
$user = "mhammad1_1367";
$pwd = "5_D2}QpdlY]}";
$db = "mhammad1_phpVue";

$conn = new mysqli($server, $user, $pwd, $db);

 header("Content-Type: text/html");
if($conn->connect_errno)
{http_response_code(400);
    echo  $conn->connect_error; exit();}
