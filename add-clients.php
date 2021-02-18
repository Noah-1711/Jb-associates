<?php include('./include/session.php')?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 

    <!-- Title Page-->
    <title>Manage Clients - JB Associates</title>
<link href='./css/bootstrap-datepicker.standalone.min.css' rel='stylesheet'/>

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
                              <h2>Manage Clients</h2>
                          </div>
                      </div>
                    <div class="row">
                        <div class="col-md-12">
                        
                        <div class="card mt-2">
                                    <div class="card-header">Add Client</div>
                                    <div class="card-body">
                                       
                                      
                                     
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="fullname" class="control-label mb-1">Full Name:</label>
                                                        <input id="fullname" name="fullname" type="text" class="form-control">                                                         
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="firmname" class="control-label mb-1">Firm Name:</label>
                                                        <input id="firmname" name="firmname" type="text" class="form-control">                                                         
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="contact" class="control-label mb-1">Mobile No.:</label>
                                                        <input id="contact" name="contact" type="text" class="form-control">                                                        
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="email" class="control-label mb-1">Email ID:</label>
                                                        <input id="email" name="email" type="text" class="form-control">                                                        
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="address" class="control-label mb-1">Address:</label>
                                                        <textarea id="address" name="address" class="form-control"></textarea>                                                     
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="taskdesc" class="control-label mb-1">Task Description / Remarks:</label>
                                                        <textarea id="taskdesc" name="taskdesc"  class="form-control"></textarea>                                                      
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="assigned_user" class="control-label mb-1">Assign User:</label>
                                                        <select name="assigned_user" id="assigned_user" class='form-control'>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="totamount" class="control-label mb-1">Total Amount:</label>
                                                        <input id="totamount" name="totamount" type="text" class="form-control">                                                   
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="depamount" class="control-label mb-1">Deposited Amount:</label>
                                                        <input id="depamount" name="depamount" type="text" class="form-control" readonly>                                                    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="remamount" class="control-label mb-1">Remaining Amount:</label>
                                                        <input id="remamount" name="remamount" type="text" class="form-control" readonly>                                                      
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="subdate" class="control-label mb-1">Last date to submit :</label>
                                                        <input id="subdate" name="subdate" type="text" class="form-control datepicker">                                                      
                                                    </div>
                                                </div>
                                              
                                            </div>
                                            <div class="row">
                                            <div class="col-4"> 
                                              <button class="btn btn-lg btn-info btn-block submitBtn">
                                                  Add Client
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
                                    <table class="table table-borderless table-data3">
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
                                                <th>Action</th>



                                            </tr>
                                        </thead>
                                         <tbody id='clients-table'>
                                               
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

<!-- Modal -->
<div class="modal fade" id="updateClientModal" tabindex="-1" aria-labelledby="updateClientModal" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Client Status</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
     
      <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="ufullname" class="control-label mb-1">Full Name:</label>
                                                        <input id="ufullname" name="ufullname" type="text" class="form-control">                                                         
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="ufirmname" class="control-label mb-1">Firm Name:</label>
                                                        <input id="ufirmname" name="ufirmname" type="text" class="form-control">                                                         
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="ucontact" class="control-label mb-1">Mobile No.:</label>
                                                        <input id="ucontact" name="ucontact" type="text" class="form-control">                                                        
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="uemail" class="control-label mb-1">Email ID:</label>
                                                        <input id="uemail" name="uemail" type="text" class="form-control">                                                        
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="uaddress" class="control-label mb-1">Address:</label>
                                                        <textarea id="uaddress" name="uaddress" class="form-control"></textarea>                                                     
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="utaskdesc" class="control-label mb-1">Task Description / Remarks:</label>
                                                        <textarea id="utaskdesc" name="utaskdesc"  class="form-control"></textarea>                                                      
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="uassigned_user" class="control-label mb-1">Assign User:</label>
                                                        <select name="uassigned_user" id="uassigned_user" class='form-control assigned_user' >

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                <label for="current_status" class="control-label mb-1">Status:</label>
                                                        <select name="current_status" id="current_status" class='form-control' >
                                                                <option value="0"> Select Status </option>
                                                                <option value="pending">Pending</option>
                                                                <option value="completed">Completed</option>
                                                                <option value="Rejected">Rejected</option>
                                                        </select>
                                                </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="utotamount" class="control-label mb-1">Total Amount:</label>
                                                        <input id="utotamount" name="utotamount" type="text" class="form-control">                                                   
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="udepamount" class="control-label mb-1">Total Deposited Amount: </label>
                                                        <input id="udepamount" name="udepamount" type="text" class="form-control">                                                    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="uremamount" class="control-label mb-1">Remaining Amount:</label>
                                                        <input id="uremamount" name="remamount" type="text" class="form-control" readonly>                                                      
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="usubdate" class="control-label mb-1">Last date to submit :</label>
                                                        <input id="usubdate" name="usubdate" type="text" class="form-control datepicker">                                                      
                                                </div>
                                                </div>
                                              
                                            </div>
                                          
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary updateBtn">Update</button>
      </div>
    </div>
  </div>
</div>
</body>
<?php include('./include/scripts.php') ?>
<script src='./js/bootstrap-datepicker.min.js'></script>
<script src="jsapi/add-clients.js"></script>
</html>
<!-- end document-->
