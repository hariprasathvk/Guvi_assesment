
<?php
require 'vendor/autoload.php';

// Retrieve username
$username = $_GET["username"];

$connection_string = "mongodb://localhost:27017/";
$database_name = "reg_users";
$collection_name = "users";

$connection = new MongoDBClient();
$database = $connection->$database_name;

$collection = $connection->selectCollection($database_name, $collection_name);

// Fetch user data using the username
$data = $collection->findOne(["username" => $username]);

if ($data) {
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    http_response_code(404);
    echo json_encode(['error' => 'User not found']);
}