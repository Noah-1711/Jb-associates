
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
    $valid_extensions = array('jpeg', 'jpg', 'png'); // valid extensions
    $path = '../uploads/'; // upload directory
    if(!empty($_POST['fullname']) || !empty($_POST['email']) || $_FILES['file'])
    {
    $img = $_FILES['file']['name'];
    $tmp = $_FILES['file']['tmp_name'];
    // $fileName = basename($_FILES["file"]["name"]); 
    // get uploaded file's extension
    $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
    // can upload same image using rand function
    $final_image = rand(1000,1000000).$img;
    // check's valid format
    if(in_array($ext, $valid_extensions)) 
    { 
    $path = $path.strtolower($final_image); 
    if(move_uploaded_file($tmp,$path)) 
    {
    // echo "<img src='$path' />";
    $fullname = $_POST['fullname']; 
    $parentsname = $_POST['parentsname']; 
    $gender = $_POST['gender'];
    $dob= $_POST['dob'];
    $address= $_POST['address'];
    $aadhar = $_POST['aadhar'];
    $contact=$_POST['contact'];
    $nationality = $_POST['nationality'];
    $email = $_POST['email'];
    $joiningdate= $_POST['joiningdate'];
    $occupation = $_POST['occupation'];
    $reason = $_POST['reasontojoin'];
    $disability= $_POST['disability'];
    //include database configuration file
    include_once '../include/connection.php';
     
    //insert form data in the database
    $insert = $connection->query("INSERT INTO tbl_admission (fullname, parentsname, gender, dob, address, aadhar, contact, nationality, email, joiningdate, occupation, reason, disability, imagepath, status) VALUES ('".$fullname."','".$parentsname."','".$gender."','".$dob."','".$address."','".$aadhar."','".$contact."','".$nationality."','".$email."','".$joiningdate."','".$occupation."','".$reason."','".$disability."','".$final_image."','YES')"); 
    //echo $insert?'ok':'err';

 
        $response['status'] = 1; 
        $response['message'] = 'Admission Form Submitted Successfully!'; 
   

    }
    else
    {
        $response['status'] = 0; 
        $response['message'] = 'Sorry, there was an error uploading your file.'; 
    }
    } 
    else 
    {
        $response['status'] = 0; 
        $response['message'] = 'Sorry, only JPG, JPEG, & PNG files are allowed to upload.'; 
    
    }
    }


    echo json_encode($response);
    ?>