<?php
    session_start();
    include_once "config.php";
    $outgoing_id = $_SESSION['UNIQUE_ID'];
    $sql = mysqli_query($conn, "SELECT * FROM users WHERE NOT unique_id = {$outgoing_id}");
    $output = "";

    if(mysqli_num_rows($sql) == 0){ //If there is only one row in the database then definitely this is a current logged in user.so we tell there is no user to chat if users is equal to 1
        $output .= "No users are available to chat";
    }elseif(mysqli_num_rows($sql) > 0){ //We'll show all users
        include "data.php";
    }
    echo $output;
?>