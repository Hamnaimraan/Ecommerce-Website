<?php

$servername = "localhost:3306";
$username = "root";
$password = "";
$database = "ecommerce"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname=$_POST["fname"];
    $lname=$_POST["lname"];
    $username = $_POST["name"];
    $password = $_POST["pass"];


    
    if (empty($username) || empty($password)) {
        echo "Both username and password are required.";
    } else {
        // Hash the password for security
        $hashed_password = md5($password); 

        // SQL query to check if the username exists in the database
        $check_sql = "SELECT * FROM login WHERE username='$username'";
        $check_result = $conn->query($check_sql);

        if ($check_result && $check_result->num_rows > 0) {
            // Username already exists
            echo "Username already exists. Please choose a different username.";
        } else {
            // Insert the username and hashed password into the database
            $insert_sql = "INSERT INTO login (fname, lname, username, password) VALUES('$fname','$lname', '$username', '$hashed_password') ";
            if ($conn->query($insert_sql) === TRUE) {
            
                echo "Registration successful! Redirecting to index page...";
                // Redirect to login.html after 3 seconds
                header("refresh:3; url=index.html"); 
            } else {
                
                echo "Error: " . $insert_sql . "<br>" . $conn->error;
            }
        }
    }
}
else{
    echo"form not submitted";
}

// Close connection
$conn->close();
?>
