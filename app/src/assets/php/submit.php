<?php
$your_email = "hello@nhsideaslab.com";

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $_subject = $_POST['subject'];

    $to = $your_email;
    $subject = 'Message from nhsideaslab.com: ' . $_subject;
    $headers = 'From: ' . $name . ' <' . $email . '>' . "\r\n";
    $message = $name . ' sent you a message via the contact form :' . "\r\n" . $message;

    mail($to, $subject, $message, $headers);
}

?>