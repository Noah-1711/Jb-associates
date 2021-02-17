<?php
include("include/connection.php");
session_start();

if($_SERVER["REQUEST_METHOD"] == "POST") {
      // mobile and password sent from form 

  $mymobile = mysqli_real_escape_string($connection,$_POST['mobileno']);
  $mypassword = mysqli_real_escape_string($connection,$_POST['password']); 

  $sql = "SELECT id, username, role FROM tbl_user WHERE contact = '$mymobile' and password = '$mypassword' and status='active'";
  $result = mysqli_query($connection,$sql);
  $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
//   $active = $row['active'];

  $count = mysqli_num_rows($result);

      // If result matched $myusername and $mypassword, table row must be 1 row

  if($count == 1) {
  // session_register("myusername");
   $_SESSION['login_user'] = $mymobile;
 
 

   header("location: index.php"); 

 }else {
   $error = "Your Login Name or Password is invalid";
 }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="Hau Nguyen">
    <meta name="keywords" content="au theme template">

    <!-- Title Page-->
    <title>JB Associates | Login</title>
 <?php include('./include/meta.php') ?>

</head>

<body class="animsition">
    <div class="page-wrapper" style="padding-bottom:0px !important">
        <div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="#">
                              JB Associates Login
                            </a>
                        </div>
                        <div class="login-form">
                            <form action="" method="post">
                                <div class="form-group">
                                    <label>Mobile No.</label>
                                    <input class="au-input au-input--full" type="text" name="mobileno" placeholder="Mobile No.">
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full" type="password" name="password" placeholder="Password">
                                </div>
                                 
                                <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                
                            </form>
                      
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Jquery JS-->
    <script src="vendor/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap JS-->
    <script src="vendor/bootstrap-4.1/popper.min.js"></script>
    <script src="vendor/bootstrap-4.1/bootstrap.min.js"></script>
  
 
    <script src="vendor/animsition/animsition.min.js"></script>
  
 
   
  

    <!-- Main JS-->
    <script src="js/main.js"></script>

</body>

</html>
<!-- end document-->