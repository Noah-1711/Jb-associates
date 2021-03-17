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
    <title>Manage Agents - JB Associates</title>
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
                              <h2>Manage Agents</h2>
                          </div>
                      </div>
                    <div class="row">
                        <div class="col-md-12">
                        
                        <div class="card mt-2">
                                    <div class="card-header">Add Agent</div>
                                    <div class="card-body">
                                       
                                      
                                     
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="fullname" class="control-label mb-1">Agent Name:</label>
                                                        <input id="fullname" name="fullname" type="text" class="form-control">  
                                                        <span id="fullnameError"></span>                                                       
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="contact" class="control-label mb-1">Mobile No.:</label>
                                                        <input id="contact" name="contact" type="text" class="form-control">  
                                                        <span id="contactError"></span>                                                       
                                                    </div>
                                                </div>
                                               
                                               
                                              
                                            </div>
                                            <div class="row">
                                            <div class="col-12 col-md-6"> 
                                              <button id="payment-button" class="btn btn-lg btn-info btn-block submitBtn">
                                                  Add Agent
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
                                        <strong class="card-title">Agents
                                           
                                        </strong>
                                    </div>
                                    <div class="card-body">
                                    <div class="table-responsive m-b-40">
                                    <table class="table table-borderless table-data3">
                                        <thead>
                                            <tr><th>#</th>
                                                <th>Name</th>
                                                <th>Mobile</th>                                       
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                         <tbody id='agents-table'>
                                               
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
<div class="modal fade" id="updateAgentModal" tabindex="-1" aria-labelledby="updateAgentModal" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Agent Info </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
 
      <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="ufullname" class="control-label mb-1">Agent's Name:</label>
                <input id="ufullname" name="ufullname" type="text" class="form-control">                                                         
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="ucontact" class="control-label mb-1">Mobile No.:</label>
                <input id="ucontact" name="ucontact" type="text" class="form-control">                                                        
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

<script src="jsapi/add-agents.js"></script>
</html>
<!-- end document-->
