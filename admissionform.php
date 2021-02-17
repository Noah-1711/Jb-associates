<?php include('./include/session.php')?>

<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 

    <!-- Title Page-->
    <title>Admissions - Samrat Sports Karate Association </title>
<?php include('./include/meta.php') ?>
<style type="text/css">
    .address-info{
        font-size:12px;
    }
    .modal-logo{
        width:210px !important;
    }
    .print-table td:first-child{
        font-weight:bold;
        width:270px !important;
    }
    #photo{
        text-align:right;
        width:150px;
    }
    #photo img{
        height:150px;
        width:120px;
    }
    footer 
    {
        border:1px solid gray;
        padding:0;
        text-align:center;
    }
    footer h5
    {
        color:gray;
    }
    .address-info h3{
        text-align:center;
        color:orange;
    }
    .address-info h3 b{
        color:blue;
    }
    .address-info h2{
        text-align:center;
        color:red;
        margin-bottom:1%;
    }
    .recog
    {
        padding:1%;
        background-color:lightpink;
        text-align:center;
        color:black;
    }
    .imglogo{
        width:50px;
        height:50px;
    }
    .left-img,.right-img{width:150px;}
</style>
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
                              <h2>Belt Exam Form</h2>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-md-12">
                          <div class="card mt-2">
                                    <div class="card-header">
                                        <strong class="card-title">Belt Exam Form details
                                           
                                        </strong>
                                    </div>
                                    <div class="card-body">
                                    <div class="table-responsive m-b-40">
                                    <table class="table table-borderless table-data3">
                                        <thead>
                                            <tr>
                                                <th>Fullname</th>
                                                <th>DOB</th>
                                                <th>Gender</th>
                                                <th>Contact No</th>
                                                <th>Email</th>
                                                <th>Degree</th>
                                                <th>Address</th>
                                                <th>photo</th>
                                                <th>Action</th>
                                                <th>print</th>
                                            </tr>
                                        </thead>
                                         <tbody id='admission-table'>
                                         <!-- <tr>
                                         <td><div class="table-data-feature">
                                                       
                                                       <button class="item" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete">
                                                           <i class="zmdi zmdi-delete"></i>
                                                       </button>
                                                      
                                                   </div></td>
                                                   </tr> -->
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
<div class="modal fade" id="printmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Preview</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="DivIdToPrint">
        <div class="row">
        <div class="col-md-12 mb-3">
        <p id="reg" style="text-align:right;">Regd No.271/17 F-25060</p>
        </div>
        </div>
        <div class="row">
        <div class="col-md-4">
            <img src="images/karate_PNG36.png" alt="" class="left-img">
        </div>
         <div class="col-md-4 text-center">
            <img src="images/karatelogonew.jpg" alt="" class="left-img" >
         </div>
          <div class="col-md-4 text-right"> 
          <img src="images/bruce-lee.png" class="right-img">
          </div>
        </div>
        <div class="row">
        <div class="col-md-12 address-info mt-4">
        <h3><b>Samrat Sports </b> Karate Association,Aurangabad</h3>
        <h2>Yongmudo Association Of Aurangabad</h2>
        </div>
        <div class="col-md-12 recog" >
        <h5>
        Recognized By: School Games Fedration Of India(sgfi)<br>
        Under Ministry Of Youth Affairs & Sports International Yongmudo Fedration
        </h5>
        </div>
        <!-- <div class="col-md-7 mb-3">
            <img src="images/samrat-logo.png" alt="" class="modal-logo">
        </div> -->
        
        <div class="col-md-12">
            <hr>

            <h2 class="text-center mb-3">Belt Exam Form</h2>
        </div>
        <div class="col-md-12">
            <table class="table table-bordered print-table">
            <tr>
            <td>Fullname: </td> <td id="fname"></td> <td id="photo" rowspan="3"> </td>
            </tr>
            <tr>
            <td>DOB: </td> <td id="dob">sdf</td>  
            </tr>
            <tr>
            <td>Gender: </td> <td id="gender">sdf</td>  
            </tr>
            <tr>
            <td>Contact No.: </td> <td id="contact" colspan="2">sdf</td> 
            </tr>
            <tr>
            <td>Email: </td> <td id="email"  colspan="2">sdf</td>  
            </tr>
            <tr>
            <td>Degree: </td> <td id="degree"  colspan="2">sdf</td>  
            </tr>
            <tr>
            <td>Address: </td> <td id="add"  colspan="2">sdf</td> 
            </tr>
            <tr style="height:115px !important;">
            <td>Student's Signature </td> <td colspan="2" class="text-right"> <b>Authority Signature</b></td> 
            </tr>
                       </table>
                       <footer>
                        <h5>Office:Gut No.93, Plot No.43, Kamlapur Waluj, Road, Sitaram Nagar,<br>
                        Near Bhagat Singh Junior College, Jgeshwari Mbile 9850612137.</h5>
                     </footer>
        </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick="printDiv()">Print</button>
       
        <script type="text/javascript">
        
        function printDiv() 
{

  var divToPrint=document.getElementById('DivIdToPrint');

  var newWin=window.open('','Print-Window');

  newWin.document.open();

  newWin.document.write('<html><head> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> <style type="text/css">.left-img,.right-img{width:200px;}.imglogo{width:50px;heigth:50px}.address-info h3{text-align:center; color:orange}.address-info h3 b{color:blue}.address-info h2{text-align:center; color:red; margin-bottom:1%;}.recog{background-color:pink;text-align:center;padding:1%}.modal-logo{width:280px !important;}p{margin:0;}.print-table td{font-size:20px;}footer{border:1px solid lightgray;text-align:center}.print-table td:first-child{font-weight:bold;width:270px !important;}#photo{text-align:right;width:150px;}#photo img{height:150px;width:120px !important;}</style> </head><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);

}
        </script>
        
          
      </div>
    </div>
  </div>
</div>
<?php include('./include/scripts.php') ?>
<script>
// $( document ).ready(function() {
//     console.log( "ready!" );
//     $('.btn').printThis();
// });

</script>
<script src="jsapi/get-admissionform.js"> </script>
</html>
<!-- end document-->
