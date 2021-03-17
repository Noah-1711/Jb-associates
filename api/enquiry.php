
    <?php 
?>
    
    <?php
 
    
    if(!empty($_POST['name']) || !empty($_POST['email']))
    {
    
    // echo "<img src='$path' />";
    $name = $_POST['name']; 
    $email = $_POST['email']; 
    $contact= $_POST['contact']; 
    $message= $_POST['message']; 
    
    //include database configuration file
    include_once '../include/connection.php';
     
    //insert form data in the database
    $insert = $connection->query("INSERT INTO tbl_contact (name, contact, email, message) VALUES ('".$name."','".$contact."','".$email."','".$message."')"); 
    //echo $insert?'ok':'err';

 
        $response['status'] = 1; 
        $response['message'] = 'Form Submitted Successfully!'; 
   

    }
   
  
    else 
    {
        $response['status'] = 0; 
        $response['message'] = 'Error'; 
    
    }
    


    // echo json_encode($response);
    ?>