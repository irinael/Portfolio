<?php
$name=$_POST['name'];
$email=$_POST['email'];
// $contact_subject=$_POST['subject'];
$message=$_POST['message'];

$from = 'irina8el@gmail.com';
$subject = 'New mail from your web site !';
$email_body = 'You have received a new message from $name. \n
Sender\'s email : $email. \n
Here is what he or she is saying : \n

$message'
$to = 'irina8el@gmail.com';
$headers = 'From : $from \r \n';

mail($to, $subject, $email_body, $headers);
?>