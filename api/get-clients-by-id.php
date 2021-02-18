<?php
include('../include/connection.php');
// include 'include/conn.php';

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

$request_method=$_SERVER["REQUEST_METHOD"];
// echo $request_method;
$id = $_GET['clientid'];
switch($request_method)
{
	case 'GET':
			// Retrive Products	Category
            getUserById($id);
 
	break;

	default:
			// Invalid Request Method
	header("HTTP/1.0 405 Method Not Allowed");
	break;
}
 

function getUserById($id)
{
	global $connection;
	$query;
	 
		$query="SELECT * FROM tbl_client  where id = $id";		 
 
	$response=array();
	if($result=mysqli_query($connection, $query));
	{
		if(mysqli_num_rows($result) > 0){

			while($row=mysqli_fetch_assoc($result))
			{
				$response[]=$row;
			}
			// echo $response;
			header('Content-Type: application/json');

			echo json_encode($response);

		}
		else{

		}
	}

}


@mysqli_close($conn);

?>
