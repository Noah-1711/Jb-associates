<?php
include('../include/connection.php');
// include 'include/conn.php';

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

 $initFromDate  =$_POST["from"]; 

 $initToDate  =$_POST["to"];
 $filter = $_POST["filter"];
 
	global $connection;

	$query;

	$query="SELECT * FROM tbl_client 
    WHERE (submission_date BETWEEN '".$initFromDate."' AND '".$initToDate."') AND (status= '".$filter."')";	
 
	$result=mysqli_query($connection, $query);

	if(mysqli_num_rows($result) > 0){

		while( $row = mysqli_fetch_assoc($result))
		{
				$response[]=$row;
		}
		// echo $response;
		header('Content-Type: application/json');

		echo json_encode($response);

	
	}else{
        $response['status'] = 0; 
        $response['message'] = 'No records Found'; 
    }
	
 
@mysqli_close($conn);

?>
