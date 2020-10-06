<?php

$number = $_POST['user_number'];
$token = "1120708484:AAHaR7J3J1YnwAyIEvCiV_1b4WQzrUOxqhQ";
$chat_id = "-1001382103024";

$arr = array(
  'Телефон: ' => $number,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
