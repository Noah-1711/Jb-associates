
<?php
 
    
 if(!empty($_POST['udeposited_amount']) || !empty($_POST['id']))
 {
 
 // echo "<img src='$path' />";
 $id = $_POST['id'];  
 $payment_mode = $_POST['upaymentmode'];  
 $deposited_amount=$_POST['udeposited_amount'];
 $remaining_amount = $_POST['uremaining_amount'];
 
 

    
 //include database configuration file
 include_once '../include/connection.php';
  
 //insert form data in the database
 $update = "update tbl_client set  paymentmode='".$payment_mode."', deposited_amount='".$deposited_amount."', remaining_amount='".$remaining_amount."' where id='".$id."'";
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