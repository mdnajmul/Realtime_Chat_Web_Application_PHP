<?php
    session_start();
    if(isset($_SESSION['UNIQUE_ID'])){ //if user is logged in
        header("location: users.php");
    }
?>

<?php include_once "header.php"; ?>

    <body>
        
        <div class="wrapper">
            <section class="form signup">
                <header style="text-align: center; color: blue;">Chat App</header>
                <form action="#" enctype="multipart/form-data">
                    <div class="error-txt"></div>
                    <div class="name-details">
                        <div class="field input">
                            <label>First Name</label>
                            <input type="text" name="fname" placeholder="First Name" required>
                        </div>
                        <div class="field input">
                            <label>Last Name</label>
                            <input type="text" name="lname" placeholder="Last Name" required>
                        </div>
                    </div>
                        <div class="field input">
                            <label>Email Address</label>
                            <input type="text" name="email" placeholder="Enter your email" required>
                        </div>
                        <div class="field input">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Enter new password" required>
                            <i class="fas fa-eye"></i>
                        </div>
                        <div class="field image">
                            <label>Select Image</label>
                            <input type="file" name="image" required>
                        </div>
                        <div class="field button">
                            <input type="submit" value="Continue to chat">
                        </div>
                </form>
                <div class="link">Already signed up? <a href="login.php">Login now</a></div>
            </section>
        </div>
        
        <script type="text/javascript" src="javascript/pass-show-hide.js"></script>
        <script type="text/javascript" src="javascript/signup.js"></script>

    </body>
</html>