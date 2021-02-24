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
 

    <!-- Title Page-->
    <title>Manage Users - JB Associates</title>
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
                              <h2>Manage Users</h2>
                          </div>
                      </div>
                    <div class="row">
                        <div class="col-md-12">
                        
                        <div class="card mt-2">
                                    <div class="card-header">Add User</div>
                                    <div class="card-body">
                                       
                                      
                                     
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="fullname" class="control-label mb-1">Full Name:</label>
                                                        <input id="fullname" name="fullname" type="text" class="form-control">  
                                                        <span id="fullnameError"></span>                                                       
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="contact" class="control-label mb-1">Mobile No.:</label>
                                                        <input id="contact" name="contact" type="text" class="form-control">  
                                                        <span id="contactError"></span>                                                       
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="form-group">
                                                        <label for="email" class="control-label mb-1">Email ID:</label>
                                                        <input id="email" name="email" type="email" class="form-control">   
                                                        <span id="emailError"></span>                                                      
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="address" class="control-label mb-1">Address:</label>
                                                        <input id="address" name="address" type="text" class="form-control"> 
                                                        <span id="addressEror"></span>                                                        
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="password" class="control-label mb-1">Password:</label>
                                                        <input id="password" name="password" type="password" class="form-control"> 
                                                        <span id="passwordError"></span>                                                        
                                                    </div>
                                                </div>
                                              
                                            </div>
                                            <div class="row">
                                            <div class="col-4"> 
                                              <button id="payment-button" class="btn btn-lg btn-info btn-block submitBtn">
                                                  Add User
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
                                    <table class="table table-borderless table-data3" id="tbluser">
                                        <thead>
                                            <tr><th>#</th>
                                                <th>Name</th>
                                                <th>Mobile</th>
                                                <!-- <th>Password</th> -->
                                                <th>Role</th>
                                                <th>Email</th>                                               
                                                <th>Address</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                         <tbody id='users-table'>
                                               
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
<div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="updateUserModal" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update User Info </h5>
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
                                                        <input id="uaddress" name="uaddress" type="text" class="form-control">                                                        
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                <div class="form-group">
                                                        <label for="upassword" class="control-label mb-1">Password:</label>
                                                        <input id="upassword" name="upassword" type="text" class="form-control">                                                        
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

<script src="jsapi/add-users.js"></script>
</html>
<!-- end document-->
