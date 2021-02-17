<?php include('./include/session.php')?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 

    <!-- Title Page-->
    <title>Videos - Samrat Sports Karate Association </title>
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
                              <h2>Videos</h2>
                          </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                        
                        <div class="card mt-2">
                                    <div class="card-header">Add Image</div>
                                    <div class="card-body">
                                       
                                        <form id="videoform">
                                     
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="video-name" class="control-label mb-1">Video Name</label>
                                                        <input id="video-name" name="video_name" type="text" class="form-control">                                                         
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="video-desc" class="control-label mb-1">Video Description</label>
                                                        <input id="video-desc" name="video_desc" type="text" class="form-control">                                                        
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="video-link" class="control-label mb-1">Video Link</label>
                                                        <input id="video-link" name="video_link" type="text" class="form-control">                                                     
                                                    </div>
                                                </div>
                                                 <div class="col-4">
                                                    <div class="form-group">
                                                        <label for="thumbnail-link" class="control-label mb-1">Video Thumbnail</label>
                                                        <input id="thumbnail-link" name="thumbnail_link" type="text" class="form-control">                                                     
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                            <div class="col-md-4"> 
                                              <button type="submit" class="btn btn-lg btn-info btn-block submitBtn">
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
                                        <strong class="card-title">Videos details
                                           
                                        </strong>
                                    </div>
                                    <div class="card-body">
                                    <div class="table-responsive m-b-40">
                                    <table class="table table-borderless table-data3">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Description</th>                                             
                                                <th>Preview</th>
                                                <th> Thumbnail </th>                                                                               
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                         <tbody id='videos-table'>
                                               
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

<script src="jsapi/videos.js"> </script>
</html>
<!-- end document-->
