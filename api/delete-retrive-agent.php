<?php
include('../include/connection.php');
// include 'include/conn.php';

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

$request_method=$_SERVER["REQUEST_METHOD"];
// echo $request_method;

switch($request_method)
{

	case 'POST':
	// $id=intval($_POST["id"]);
	// get_events($id);
	if(!empty($_REQUEST["retrive"]))
	{
		retrive_user();
	}
	else{
		delete_user();		
	}
	
	break;

	default:
			// Invalid Request Method
	header("HTTP/1.0 405 Method Not Allowed");
	break;
}

function delete_user(){
	
	global $connection;

	$id = $_REQUEST["id"];

	$sql = "UPDATE tbl_agent SET status='inactive' WHERE ID= $id" ;

	if ($connection->query($sql)) {
		$msg = array("status" =>1 , "msg" => "Your record Updated successfully");
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($connection);
	}

	$json = $msg;

	header('content-type: application/json');
	echo json_encode($json);

}

function retrive_user(){
	global $connection;

	$id = $_REQUEST["id"];
	

	$sql = "UPDATE tbl_agent SET status='active' WHERE ID= $id" ;


	if ($connection->query($sql)) {
		$msg = array("status" =>1 , "msg" => "Your record Updated successfully");
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($connection);
	}

	$json = $msg;

	header('content-type: application/json');
	echo json_encode($json);

}

@mysqli_close($conn);

?>
