<?php

    session_start();
    if(isset($_SESSION['UNIQUE_ID'])){ //if user is logged in then come to this page otherwise go to login page
        include_once "config.php";
        $logout_id = mysqli_real_escape_string($conn, $_GET['logout_id']);
        if($logout_id){ //if logout id is set
            $status = "Offline now";
            //once user logout we'll update this status to offline and in the login form
            //we'll again update the status to Active now if user logged in successfully
            $sql = mysqli_query($conn, "UPDATE users SET status = '{$status}' WHERE unique_id = {$logout_id}");
            if($sql){
                session_unset();
                session_destroy();
                header("location: ../login.php");
            }
        }else{
            header("location: ../users.php");
        }
    }else{
        header("location: ../login.php");
    }

?>