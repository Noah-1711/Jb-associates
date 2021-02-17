
    <?php
 
    
 if(!empty($_POST['name']) || !empty($_POST['email']))
 {
 
 // echo "<img src='$path' />";
 $name = $_POST['name']; 
 $email = $_POST['email']; 
 $contact= $_POST['contact']; 
 $address= $_POST['address']; 
 $password= $_POST['password'];
 
 //include database configuration file
 include_once '../include/connection.php';
  
 //insert form data in the database
 $insert = $connection->query("INSERT INTO tbl_user (username, contact, password, role, status, email, address) VALUES ('".$name."','".$contact."','".$password."', 'user', 'inactive', '".$email."', '".$address."')"); 
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