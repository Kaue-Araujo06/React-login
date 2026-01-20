<?php
$host = "localhost";
$user = "root";
$pass = "usbw";
$db   = "login_react";
$port = 3307;

$conn = new mysqli($host, $user, $pass, $db, $port);

if ($conn->connect_error) {
    die("Erro de conexão");
}
