<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

require "db.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = isset($data["email"]) ? $data["email"] : null;
$password = isset($data["password"]) ? $data["password"] : null;

if (!$email || !$password) {
    echo "Dados inválidos";
    exit;
}

$hash = md5($password);

$sql = "INSERT INTO users (email, password) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $email, $hash);

if ($stmt->execute()) {
    echo "Usuário criado";
} else {
    echo "Erro ao criar usuário";
}
