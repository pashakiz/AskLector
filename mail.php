<?php

$recepient = "basileyvjiks@gmail.com";
$sitename = "AskLector";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \r\nEmail: $email";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"$EOL From: $name <$email>");