<?php 
	if(isset($_POST["submit"])){
		$user_name = $_POST['user_name'];
		$user_surname = $_POST['user_surname'];
		$user_email = $_POST['user_email'];
		$user_phone = $_POST['user_phone'];
		$user_baku_hotel = $_POST['user_baku_hotel'];
		$user_qubaqusar_hotel = $_POST['user_qubaqusar_hotel'];
		$user_checkin = $_POST['user_checkin'];
		$user_checkout = $_POST['user_checkout'];
		$user_adults = $_POST['user_adults'];
		$user_children7 = $_POST['user_children7'];
		$user_children0 = $_POST['user_children0'];
		$user_message = $_POST['user_message'];
		$to = 'avatravelcompany@gmail.com';
		$subject = "Guba Gusar Tour";

		$message = "Hello my name is ".$user_name." ".$user_surname.".";
		$message .= "My phone is ".$user_phone.".";
		$message .= "My email is ".$user_email.". ";
		$message .= "My hotel in Baku is ".$user_baku_hotel.". ";
		$message .= "My hotel in Guba is ".$user_qubaqusar_hotel.". ";
		$message .= "My checkin is ".$user_checkin.". ";
		$message .= "My checkout is ".$user_checkout.". ";
		$message .= "Number of Adults ".$user_adults.". ";
		$message .= "Number of Children between 7 and 11 years: ".$user_children7.". ";
		$message .= "Number of Children up 7 years: ".$user_children0.". ";
		$message .= "Message: ".$user_message.". ";
		mail($to, $subject, $message);
	}
	header('Location: /');
?>	