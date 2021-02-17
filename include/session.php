<?php
include('connection.php');
session_start();

$user_check = $_SESSION['login_user'];

$ses_sql = mysqli_query($connection,"select * from tbl_user where contact = '$user_check' ");

$row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);

$login_session = $row['contact'];
$login_user_role = $row['role'];
$login_user_id = $row['id'];
$login_username = $row['username'];
echo "<script>localStorage.setItem('role', '".$login_user_role."'); localStorage.setItem('username', '".$login_username."'); localStorage.setItem('userid', '".$login_user_id."'); </script>";

 

if(!isset($_SESSION['login_user'])){
   header("location:login.php");
   die();
}
?>