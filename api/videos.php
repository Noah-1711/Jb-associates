
    <?php 
// header('Content-Type: application/json; charset=utf-8');

// $uploadDir = '../uploads/'; 
// $response = array( 
//     'status' => 0, 
//     'message' => 'Form submission failed, please try again.' 
// ); 

// // If form is submitted 
// if(isset($_POST['fullname']) || isset($_POST['file'])){ 
//     // Get the submitted form data 
//     $fullname = $_POST['fullname']; 
//     $parentsname = $_POST['parentsname']; 
//     $gender = $_POST['gender'];
//     $dob= $_POST['dob'];
//     $address= $_POST['address'];
//     $aadhar = $_POST['aadhar'];
//     $contact=$_POST['contact'];
//     $nationality = $_POST['nationality'];
//     $email = $_POST['email'];
//     $joiningdate= $_POST['joiningdate'];
//     $occupation = $_POST['occupation'];
//     $reason = $_POST['reasontojoin'];
//     $disability= $_POST['disability'];
//     // echo $fullname;
//     // $file = $_POST['file'];

//     // Check whether submitted data is not empty 
//     if(!empty($fullname) && !empty($parentsname)){ 


//         $uploadStatus = 1; 

//             // Upload file 
//         $uploadedFile = ''; 
//         if(!empty($_FILES["file"]["name"])){ 

//                 // File path config 
//             $fileName = basename($_FILES["file"]["name"]); 
//             $targetFilePath = $uploadDir . $fileName; 
//             $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION); 

//                 // Allow certain file formats 
//             $allowTypes = array('jpg', 'png', 'jpeg'); 
//             if(in_array($fileType, $allowTypes)){ 
//                     // Upload file to the server 
//                 if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){ 
//                     $uploadedFile = $fileName; 
//                 }else{ 
//                     $uploadStatus = 0; 
//                     $response['message'] = 'Sorry, there was an error uploading your file.'; 
//                 } 
//             }else{ 
//                 $uploadStatus = 0; 
//                 $response['message'] = 'Sorry, only PDF, DOC, JPG, JPEG, & PNG files are allowed to upload.'; 
//             } 
//         } 

//         if($uploadStatus == 1){ 
//                 // Include the database config file 
//             include('../include/connection.php');
//             global $connection;
//                 // Insert form data in the database 
//             $insert = $connection->query("INSERT INTO tbl_admission (fullname,parentsname,gender,dob,address,aadhar,contact,nationality,email,joiningdate,occupation,reason,disability,image_path,status) VALUES ('".$fullname."','".$parentsname."','".$gender."','".$dob."','".$address."','".$aadhar."','".$contact."','".$nationality."','".$email."','".$joiningdate."','".$occupation."','".$reason."','".$disability."','".$uploadedFile."','YES')"); 

//             if($insert){ 
//                 $response['status'] = 1; 
//                 $response['message'] = 'Product Uploaded Successfully!'; 
//             } 
//         } 
        
//     }else{ 
//        $response['message'] = 'All fields are mandatory'; 
//    } 
// } 



// Return response 
// echo json_encode($response);


//?>
    
    <?php
 
    
    if(!empty($_POST['video_name']) || !empty($_POST['video_desc']))
    {
    
    // echo "<img src='$path' />";
    $name = $_POST['video_name']; 
    $desc = $_POST['video_desc']; 
    $link= $_POST['video_link'];
    $thumbnail=$_POST['thumbnail_link'];
 
 
    
    //include database configuration file
    include_once '../include/connection.php';
     
    //insert form data in the database
    $insert = $connection->query("INSERT INTO tbl_video (name, description, link, thumbnail, status) VALUES ('".$name."','".$desc."','".$link."', '".$thumbnail."','YES')"); 
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