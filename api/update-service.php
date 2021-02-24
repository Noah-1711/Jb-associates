
<?php
 
    
 if(!empty($_POST['uservicename']) || !empty($_POST['udescription']))
 {
 
 // echo "<img src='$path' />";
 $id = $_POST['id'];
 $servicename = $_POST['uservicename']; 
 $description = $_POST['udescription'];

 //include database configuration file
 include_once '../include/connection.php';
  
 //insert form data in the database
 $update = "update tbl_services set services='".$servicename."', description='".$description."'  where id=$id";
//  $insert = $connection->query();
 if(mysqli_query($connection, $update)){
    // echo "Records were updated successfully.";    
    $response['status'] = 1; 
    $response['message'] = 'Form Submitted Successfully!'; 
    echo json_encode($response);
} else {
    // echo "ERROR: Could not able to execute $update. " . mysqli_error($connection);
    
    $response['status'] = 0; 
    $response['message'] = 'Error'; 
    echo json_encode($response);
}
  

 }
 


 ?>