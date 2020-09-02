<?php     
mb_internal_encoding("UTF-8");

if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['msg']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$emailFrom = $_POST['email']; 
$message = $_POST['msg']; 

$header = 'From:dinokino@seznam.cz';
$header .= "\nMIME-Version: 1.0\n";
$header .= "Content-Type: text/html; charset=\"utf-8\"\n";
$emailTo = 'marek.petr10@seznam.cz';

$email_subject = "Zpráva z webu zemnipracesousek.cz od: $name\n$emailFrom\n$message";
$email_body = "Zpráva z webu zemnipracesousek.cz ";

$uspech = mb_send_mail($emailFrom, $email_subject, $email_body);
if ($uspech)
{
    $hlaska = 'Email byl úspěšně odeslán, brzy vám odpovíme.';
}
else{
    $hlaska = 'Email se nepodařilo odeslat. Zkontrolujte adresu.';
}
$email_subject = "Zpráva z webu zemnipracesousek.cz od:";
$email_body = "Zpráva z webu zemnipracesousek.cz ";

$uspech = mb_send_mail($emailFrom, $email_subject, $email_body);
if ($uspech)
{
    $hlaska = 'Email byl úspěšně odeslán, brzy vám odpovíme.';
}
else{
    $hlaska = 'Email se nepodařilo odeslat. Zkontrolujte adresu.';
}
echo($hlaska);
/*
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
$to_email = 'marek.petr10@seznam.cz';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$subject2 = '2Testing PHP Mail';
$message2 = '2This mail is sent using the PHP mail function';
$subject3 = '3Testing PHP Mail';
$message3 = '3This mail is sent using the PHP mail function';
$headers = 'From: marek.petr10@seznam.cz';
echo(mail($to_email,$subject,$message,$headers));
echo(mail($to_email,$subject2,$message2));
echo(mail($to_email,$subject3,$message3,$headers));
$subject = 'the subject';
$message = 'hello';
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

echo(mail($to_email, $subject, $message, $headers));

/*
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
$errors = '';
$emailTo = 'marek.petr10@seznam.cz';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['msg']))
{
    $errors .= "\n Error: all fields are required";
}
print_r($_POST);
$name = $_POST['name']; 
$emailFrom = $_POST['email']; 
$message = $_POST['msg']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$emailFrom))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
$email_subject = "Zpráva z webu zemnipracesousek.cz od: $name";
$email_body = "Zpráva z webu zemnipracesousek.cz ".
"\n Jméno: $name\nEmail: $emailFrom\nZpráva:\n$message";
$headers = "From: $emailTo\n";
$headers .= "Reply-To: $emailFrom";

/*
$to      = 'marek.petr10@seznam.cz';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: a@seznam.cz' . "\r\n" .
    'Reply-To: marek.petr10@seznam.cz' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$s = mail($to, $subject, $message, $headers);
echo("<br><br>\n$s");

$to_email = 'marek.petr10@seznam.cz';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: noreply@company.com';
mail($to_email,$subject,$message,$headers);

$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$message = wordwrap($msg,70);
//$s = mail($emailTo,"My sssssss",$message);
//echo("\n\n$s");
//redirect to the 'thank you' page
//header('Location: ../index.html');

}*/
?>