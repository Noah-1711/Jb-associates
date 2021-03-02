<?php include('./include/session.php')?>
<?php 
    
    if($login_user_role != 'admin'){
        header("location:login.php");
        die();
     }
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
    <link href='./css/bootstrap-datepicker.standalone.min.css' rel='stylesheet'/>

    <!-- Title Page-->
    <title>Manage Reports- JB Associates</title>
<?php include('./include/meta.php') ?>

</head>

<body class="animsition">
    <div class="page-wrapper">
     <?php include('./include/menu.php') ?>

        <!-- PAGE CONTAINER-->
        <div class="page-container">
           <?php include('./include/header.php') ?>

            <!-- MAIN CONTENT-->
            <div class="main-content">
                <div class="section__content section__content--p30">
                    <div class="container-fluid">
                      <div class="row">
                          <div class="col-md-12">
                              <h2>reports</h2>
                          </div>
                      </div>
                       <div class="row">
                          <div class="col-md-12">
                        
                             <div class="card mt-2">
                                      <div class="card-header">submission</div>
                                         <div class="card-body">
                                       
                                      
                                     
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="fullname" class="control-label mb-1">From:</label>
                                                        <input id="fromdate" name="fromdate" type="text" class="form-control datepicker">  
                                                        <span id="fromdateError"></span>                                                       
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="todate" class="control-label mb-1">To:</label>
                                                        <input id="todate" name="todate" type="text" class="form-control datepicker">
                                                        <span id="todateError"></span>                                                        
                                                    </div>
                                                </div>
                                                
                                                <div class="col-6">
                                                <div class="form-group">
                                                <label for="filterstatus" class="control-label mb-1">Filter:</label>
                                                        <select name="filterstatus" id="filterstatus" class='form-control' >
                                                                <option value="0"> Select Status </option>
                                                                <option value="pending">Pending</option>
                                                                <option value="completed">Completed</option>
                                                                <option value="Rejected">Rejected</option>
                                                        </select>
                                                </div>
                                                </div>
                                                <div class="col-md-6">
                                                <div class="form-group">
                                                <label for="amount" class="control-label mb-1">Amount:</label>
                                                        <select name="amount" id="amount" class='form-control' >
                                                                <option value="0"> Select Amount </option>
                                                                <option value="total_amount">Total Amount</option>
                                                                <option value="deposited_amount">Deposited Amount</option>
                                                                <option value="remaining_amount">Remaining Amount</option>
                                                        </select>
                                                        <span id="amountamt"></span>
                                                </div>
                                                </div>
                                                
                                         </div>
                                         <div class="row">
                                                <div class="col-4"> 
                                              <button id="date-button" class="btn btn-lg btn-info btn-block ">
                                                 Submit
                                                </button>
                                                </div>
                                               </div>
                                    </div>        
                                  
                                 </div>     
                             
                          </div>
                      </div>
                      
                      <div class="row">
                          <div class="col-md-12">
                          <div class="card mt-2">
                                    <div class="card-header">
                                        <strong class="card-title">Users
                                            
                                        </strong>
                                    </div>
                                    <div class="card-body">
                                    <div class="table-responsive m-b-40">
                                    <table class="table table-borderless table-data3" id="tblclient">
                                        <thead>
                                            <tr><th>#</th>
                                                <th>Client Name</th>
                                                <th>Address</th>
                                                <th>Firmname</th>
                                                <th>Contact</th>
                                                <th>Email</th>                                               
                                                <th>Task</th>
                                                <th>Assigned To</th>
                                                <th>Status</th>
                                                <th>Total amount</th>
                                                <th>Paid amount</th>
                                                <th>Remaining amount</th>
                                                <th>Submission date</th>
                                                <th>Registered date</th>
                                              



                                            </tr>
                                        </thead>
                                         <tbody id='report-table'>
                                               
                                         </tbody>
                                    </table>
                                </div>
                          </div>
                                    </div>
                                </div>
                        
                      </div>
                      
                      
                      <!-- Footer starts -->
                      <?php include('./include/footer.php') ?>
                        <!-- Footer Ends --> 
                    </div>
                </div>
            </div>
            <!-- END MAIN CONTENT-->
            <!-- END PAGE CONTAINER-->
        </div>

    </div>

</body>

<?php include('./include/scripts.php') ?>
<script src='./js/bootstrap-datepicker.min.js'></script>
<script src="jsapi/reports.js"></script>
</html>
<!-- end document-->
