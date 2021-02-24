
    <?php
 
    
 if(!empty($_POST['servicename']) || !empty($_POST['description']))
 {
 
 // echo "<img src='$path' />";
 $servicename = $_POST['servicename']; 
 $description = $_POST['description']; 
//echo $servicename;
 //include database configuration file
 include_once '../include/connection.php';
  
 //insert form data in the database
 $insert = $connection->query("INSERT INTO tbl_services (services, description, status) VALUES ('".$servicename."','".$description."','inactive')"); 
 //echo $insert;


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