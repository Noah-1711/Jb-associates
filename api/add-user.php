
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
 
 $query = "select * from tbl_user  where contact = '$contact'";
 $response = array();
 if($result=mysqli_query($connection, $query));
 {
     if(mysqli_num_rows($result) > 0){

        //  while($row=mysqli_fetch_assoc($result))
        //  {
        //      $response[]=$row;
        //  }
         // echo $response;
         
         $response['status'] = 3; 
         $response['message'] = 'Already Exists'; 

         header('Content-Type: application/json');
 
     }
     else{
        $insert = $connection->query("INSERT INTO tbl_user (username, contact, password, role, status, email, address) VALUES ('".$name."','".$contact."','".$password."', 'user', 'inactive', '".$email."', '".$address."')"); 
        //echo $insert?'ok':'err';
       
            $response['status'] = 1; 
            $response['message'] = 'Form Submitted Successfully!'; 
     }
 }

 //insert form data in the database
 
//  $response['status'] = 4; 
//      $response['message'] = 'Error in select query'; 

 }


 else 
 {
     $response['status'] = 0; 
     $response['message'] = 'Error'; 
 
 }
 


 echo json_encode($response);
 ?>