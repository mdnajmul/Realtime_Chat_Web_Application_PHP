<?php
    session_start();
    if(isset($_SESSION['UNIQUE_ID'])){ //if user is logged in
        header("location: users.php");
    }
?>

<?php include_once "header.php"; ?>
    <body>
        
        <div class="wrapper">
            <section class="form login">
                <header style="text-align: center;">Chat App</header>
                <form action="#">
                    <div class="error-txt"></div>
                    <div class="field input">
                        <label>Email Address</label>
                        <input type="text" name="email" placeholder="Enter your email" required="required">
                    </div>
                    <div class="field input">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter your password" required="required">
                        <i class="fas fa-eye"></i>
                    </div>
                    <div class="field button">
                        <input type="submit" value="Continue to chat">
                    </div>
                </form>
                <div class="link">Not yet signed up? <a href="index.php">Signup now</a></div>
            </section>
        </div>

        <script type="text/javascript" src="javascript/pass-show-hide.js"></script>
        <script type="text/javascript" src="javascript/login.js"></script>
        
    </body>
</html>