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
    // $parentsname = $_POST['parentsname']; 
    $dob= $_POST['dob'];
    $gender = $_POST['gender'];
    $contactno=$_POST['contactno'];
    $email = $_POST['email'];
    $degree = $_POST['degree'];
    $address= $_POST['address'];
    // $aadhar = $_POST['aadhar'];
    
    // $nationality = $_POST['nationality'];
    
    // $joiningdate= $_POST['joiningdate'];
    // $occupation = $_POST['occupation'];
    // $reason = $_POST['reasontojoin'];
    // $disability= $_POST['disability'];
    //include database configuration file
    include_once '../include/connection.php';
     
    //insert form data in the database
    $insert = $connection->query("INSERT INTO tbl_admissionform (fullname, dob,  gender, contactno, email, degree,address,imageurl) VALUES ('".$fullname."','".$dob."','".$gender."','".$contactno."','".$email."','".$degree."','".$address."','".$final_image."')"); 
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