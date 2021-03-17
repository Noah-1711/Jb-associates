<?php
include('../include/connection.php');
// include 'include/conn.php';

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

 $initFromDate  =$_POST["from"];
 $initToDate  =$_POST["to"];
 $amount = $_POST["amount"];

	global $connection;
	$query;
	 
		// $query="SELECT sum(total_amount) as total FROM tbl_client  WHERE (submission_date BETWEEN '".$initFromDate."' AND '".$initToDate."') ";	 	 
	$query="SELECT sum($amount) as total FROM tbl_client WHERE (submission_date BETWEEN '".$initFromDate."' AND '".$initToDate."')";	 	 
 
		$add=array();
 
	if($result=mysqli_query($connection, $query))
	{
		while ($row = mysqli_fetch_assoc($result))
		{ 
		   $add=$row['total'];
		}
		$totalAmt = array("status" =>1 , "total" => $add, "type"=>$amount);		
			header('Content-Type: application/json');
			echo json_encode($totalAmt);		
	}

 
 
// @mysqli_close($conn);

?>
