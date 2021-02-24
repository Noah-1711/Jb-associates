
    <?php
 
                
            if(!empty($_POST['name']) || !empty($_POST['contact']))
                {
                
                // echo "<img src='$path' />";
                $name = $_POST['name']; 
                $contact= $_POST['contact']; 
                
                //include database configuration file
                include_once '../include/connection.php';
                
                //insert form data in the database
                $insert = $connection->query("INSERT INTO tbl_agent (agentname, contact, status) VALUES ('".$name."','".$contact."', 'active')"); 
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