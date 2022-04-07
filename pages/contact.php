<?php
    if(isset($_POST['submit'])){
        $feedback= $_POST['tArea'];
        $mailTo = "brewcies@brewcobreweries.com";
        $headers = "From: My wesbite";
        $text = $feedback;

        mail($mailTo, $subject, $text, $headers);
        header("Location: contact.html?mailsend"); 
    }

?>