<?php include('./include/session.php')?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 

    <!-- Title Page-->
    <title>Gallery - Samrat Sports Karate Association </title>
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
                              <h2>Gallery</h2>
                          </div>
                      </div>
                    <div class="row">
                        <div class="col-md-12">
                        
                        <div class="card mt-2">
                                    <div class="card-header">Add Image</div>
                                    <div class="card-body">
                                       
                                        <form id="galleryform">
                                     
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="image-name" class="control-label mb-1">Image Name</label>
                                                        <input id="image-name" name="image_name" type="text" class="form-control">                                                         
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="image-desc" class="control-label mb-1">Image Description</label>
                                                        <input id="image-desc" name="image_desc" type="text" class="form-control">                                                        
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="image-name" class="control-label mb-1">Select Image</label>
                                                        <input id="image" name="file" type="file" class="form-control">                                                     
                                                    </div>
                                                </div>
                                              
                                            </div>
                                            <div class="row">
                                            <div class="col-md-4"> 
                                              <button id="payment-button" type="submit" class="btn btn-lg btn-info btn-block submitBtn">
                                                  Add
                                                </button>
                                            </div>

                                             
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                    </div>
                      <div class="row">
                          <div class="col-md-12">
                          <div class="card mt-2">
                                    <div class="card-header">
                                        <strong class="card-title">Gallery Images
                                           
                                        </strong>
                                    </div>
                                    <div class="card-body">
                                    <div class="table-responsive m-b-40">
                                    <table class="table table-borderless table-data3">
                                        <thead>
                                            <tr><th>#</th>
                                                <th>Image Name</th>
                                                <th>Image Description</th>
                                                <th>Image</th>                                               
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                         <tbody id='gallery-table'>
                                               
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

<script src="jsapi/gallery.js"> </script>
</html>
<!-- end document-->
