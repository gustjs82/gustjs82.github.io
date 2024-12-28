<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "your-email@example.com";
    $subject = "Message from $name";
    $headers = "From: $email";

    if(mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
}
?>
