<?php
header("Content-Type: application/json");

// Lecture des données JSON envoyées par React
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
  echo json_encode(['success' => false, 'error' => 'Aucune donnée reçue']);
  exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

// Validation simple
if (!$name || !$email || !$message || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo json_encode(['success' => false, 'error' => 'Données invalides']);
  exit;
}

// Préparation du mail
$to = "ton.email@exemple.com"; // Remplace par ta vraie adresse
$subject = "Nouveau message portfolio de $name";
$body = "Nom : $name\nEmail : $email\n\n$message";
$headers = "From: $email\r\nReply-To: $email\r\n";

// Envoi du mail
if (mail($to, $subject, $body, $headers)) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false, 'error' => 'Erreur lors de l\'envoi du mail']);
}
