<?php include('../include/connection.php') ?>

<?php 

$id = $_REQUEST['id'];
global $connection;
$query = "DELETE FROM tbl_admission WHERE id='$id'";

if($connection->query($query)){
	$msg = array("status" =>1 , "msg" => "Admission Deleted successfully");

}
else {
	echo "Error: " . $sql . "<br>" . mysqli_error($connection);
}

$json = $msg;

header('content-type: application/json');
echo json_encode($json);

?>