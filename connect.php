<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $num = $_POST['number'];
    $gender = $_POST['gender'];
    $password = $_POST['password'];

    //Database connection
    $conn = new mysqli('localhost','root','','registration');
    if($conn->connect_error){
        die('Connection failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into detials(fistName,lastName,email,num,gender,password) values(?,?,?,?,?,?)");
        $stmt->bind_param("sssiss",$firstName,$lastName,$email,$num,$gender,$password);
        $stmt->execute();
        echo "registration successful...";
        $stmt->close();
        $conn->close();
    }
?>