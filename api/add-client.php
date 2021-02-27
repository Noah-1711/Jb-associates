    
<?php
 
    
 if(!empty($_POST['name']) || !empty($_POST['email']))
 {
 
 // echo "<img src='$path' />";
 $clientname = $_POST['clientname']; 
 $address= $_POST['address']; 
 $firmname = $_POST['firmname'];
 $contact= $_POST['contact']; 
 $email = $_POST['email']; 
 $task = $_POST['task'];
 $assigned_userid = $_POST['assigned_userid'];
 $assigned_username= $_POST['assigned_username'];
 $total_amount = $_POST['total_amount'];
 $deposited_amount=$_POST['deposited_amount'];
 $remaining_amount = $_POST['remaining_amount'];
 $submission_date = $_POST['submission_date'];
 $date = date('Y-m-d H:i:s');

   

 
 //include database configuration file
 include_once '../include/connection.php';
  
 //insert form data in the database
 $insert = $connection->query("INSERT INTO tbl_client (clientname, address, firmname, contact, email,task, assigned_userid, assigned_username, status, total_amount, deposited_amount, remaining_amount, submission_date, registered_date)
  VALUES ('".$clientname."','".$address."','".$firmname."','".$contact."','".$email."', '".$task."','".$assigned_userid."','".$assigned_username."','pending','".$total_amount."','".$deposited_amount."','".$remaining_amount."','".$submission_date."','".$date."')"); 
 //echo $insert?'ok':'err';

     $response['status'] = 1; 
     $response['message'] = 'Form Submitted Successfully!'; 

 }
 else  
 {
     $response['status'] = 0; 
     $response['message'] = 'Error'; 
 
 }
 


 echo json_encode($response);
 ?>