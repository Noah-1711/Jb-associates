<?php
include('../include/connection.php');

// include 'include/conn.php';

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

$request_method=$_SERVER["REQUEST_METHOD"];
// echo $request_method;

switch($request_method)
{
	case 'GET':
			// Retrive Products	Category
            // getCount();
	if(!empty($_REQUEST["total_received"]))
	{
		depositedAmt();
	}
	if(!empty($_REQUEST["total_count"])){
		getCount();		
	}

	if(!empty($_REQUEST["pending_payment"])){
		pendingAmt();
	}

	if(!empty($_REQUEST["total_payment"])){
		totalAmt();
	}
	if(!empty($_REQUEST["users_count"]))
	{
		usersCount();
	}
	if(!empty($_REQUEST["pending_status"]))
	{
		statusPending();
	}
	
	
			
 
	break;

	default:
			// Invalid Request Method
	header("HTTP/1.0 405 Method Not Allowed");
	break;
}
 

function getCount()
{
	global $connection;


	$query;
	 
		$query="SELECT * FROM tbl_client";	
		
	$count=array();
 
	if($result=mysqli_query($connection, $query))
	{
			$rows = mysqli_num_rows($result);

			$count=$rows;

			$message = array("status" =>1 , "count" => $count);
		
			// echo $response;
			header('Content-Type: application/json');

			echo json_encode($message);

		
	}

}


function depositedAmt()
{
	global $connection;


	$query;
	 
		$query="SELECT sum(deposited_amount) as total FROM tbl_client ";		 
		$add=array();
 
	if($result=mysqli_query($connection, $query))
	{
		while ($row = mysqli_fetch_assoc($result))
		{ 
		   $add=$row['total'];
		}
		$depositeAmt = array("status" =>1 , "total" => $add);

		
			// echo $response;
			header('Content-Type: application/json');

			echo json_encode($depositeAmt);

		
	}

}

function pendingAmt(){
	global $connection;


	

	$query;

	$query="SELECT sum(remaining_amount) as total FROM tbl_client";

	$add=array();

	if($result=mysqli_query($connection, $query))
	{
		while ($row = mysqli_fetch_assoc($result))
		{ 
		   $add=$row['total'];
		}
		$remainAmt = array("status" =>1 , "total" => $add);

		
			// echo $response;
			header('Content-Type: application/json');

			echo json_encode($remainAmt);


	}
}

function totalAmt(){

	global $connection;

	$query;

	$query= "SELECT sum(total_amount) as total FROM tbl_client";

	$add= array();

	if($result=mysqli_query($connection, $query))
	{
		while ($row = mysqli_fetch_assoc($result))
		{ 
		   $add=$row['total'];
		}
		$totalAmt = array("status" =>1 , "total" => $add);

		
			// echo $response;
			header('Content-Type: application/json');

			echo json_encode($totalAmt);
	
	}


}

function usersCount()
{
	global $connection;


	$query;
	 
		$query="SELECT * FROM tbl_user";	
		
	$count=array();
 
	if($result=mysqli_query($connection, $query))
	{
			$rows = mysqli_num_rows($result);

			$count=$rows;

			$message = array("status" =>1 , "count" => $count);
		
			// echo $response;
			header('Content-Type: application/json');

			echo json_encode($message);

		
	}

}


function statusPending(){

	global $connection;

	$query;



	$query= "SELECT COUNT(*) FROM tbl_client WHERE firmname LIKE '%yogesh%'";
	$count=array();
 
	if($result=mysqli_query($connection, $query))
	{
			$rows = mysqli_num_rows($result);

			$count=$rows;

			$message = array("status" =>1 , "count" => $count);
		
			// echo $response;
			header('Content-Type: application/json');

			echo json_encode($message);

		
	}

}


// @mysqli_close($connection);

?>
