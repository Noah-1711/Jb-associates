<?php
include('../include/connection.php');
// include 'include/conn.php';

header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

 $initFromDate  =$_POST["from"];
 //$beforeConvFromDate = DateTime::createFromFormat('d/m/Y', $initFromDate);
 //$fromDate = $beforeConvFromDate->format("Y-m-d H:i:s");

 $initToDate  =$_POST["to"];
 $filter = $_POST["filter"];


 if(!empty($_REQUEST["main_amount"]))
	{ 
		$amount = $_POST["amount"];
		totalAmt($initFromDate, $initToDate, $filter, $amount);
	}
 //$beforeConvToDate = DateTime::createFromFormat('d/m/Y', $initToDate);
 //$toDate = $beforeConvToDate->format("Y-m-d H:i:s");
	global $connection;

	$query;

	$query="SELECT * FROM tbl_client 
    WHERE (submission_date BETWEEN '".$initFromDate."' AND '".$initToDate."') AND (status= '".$filter."')";	
 //   $query= "SELECT * FROM tblPerson WHERE submission_date BETWEEN STR_TO_DATE('$initFromDate','%d-%m-%Y') AND STR_TO_DATE('$initToDate','%d-%m-%Y')";
	//  echo $query;
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
	

	function totalAmt($date1, $date2, $filter, $amount)
{
	global $connection;


	$query;
	 
		// $query="SELECT sum(total_amount) as total FROM tbl_client  WHERE (submission_date BETWEEN '".$initFromDate."' AND '".$initToDate."') ";	 	 
	$query="SELECT sum($amount) as total FROM tbl_client WHERE (submission_date BETWEEN '".$date1."' AND '".$date2."') and (status='".$filter."')";	 	 
	echo $query;
		$add=array();
 
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
 
@mysqli_close($conn);

?>
