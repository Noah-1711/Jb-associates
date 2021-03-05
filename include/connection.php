<?php
$connection = new mysqli("localhost", "root", "", "jb_db");
// $connection = new mysqli("localhost:3308", "root", "", "jb_db");

if($connection->connect_error){
    die("Unable to connect database: " . $connection->connect_error);
 }

?>