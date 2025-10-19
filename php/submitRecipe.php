<?php

// Include Firebase configuration
include('firebase_config.php');

// Get the form data
$title = $_POST['title'] ?? '';
$description = $_POST['description'] ?? '';
$ingredients = $_POST['ingredients'] ?? '';
$steps = $_POST['steps'] ?? '';

// Basic validation
if (empty($title) || empty($description) || empty($ingredients) || empty($steps)) {
    die("Please fill in all fields.");
}

// Prepare recipe data
$recipe = [
    "title" => htmlspecialchars($title),
    "description" => htmlspecialchars($description),
    "ingredients" => htmlspecialchars($ingredients),
    "steps" => htmlspecialchars($steps),
    "timestamp" => time()
];

// Convert to JSON
$json = json_encode($recipe);

// Initialize cURL
$ch = curl_init();

// Firebase endpoint (pushes new data under "recipes")
curl_setopt($ch, CURLOPT_URL, $FIREBASE_URL . "recipes.json");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

// Execute cURL and close
$response = curl_exec($ch);
curl_close($ch);

// Decode response (optional)
$result = json_decode($response, true);

if ($result) {
    echo "<script>
        alert('Recipe submitted successfully!');
        window.location.href = '../index.html';
    </script>";
} else {
    echo "<script>
        alert('Failed to submit recipe. Please try again.');
        window.history.back();
    </script>";
}
?>
