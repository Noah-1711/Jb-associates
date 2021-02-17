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
<style>
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
    .left-img{
        width:150px;
    }
    .right-img{
        width:150px;
    }
    #photo img{
        height:150px;
        width:120px;
    }</style>
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
                              <h2>Admissions</h2>
                          </div>
                      </div>

                      <div class="row">
                          <div class="col-md-12">
                          <div class="card mt-2">
                                    <div class="card-header">
                                        <strong class="card-title">Admission details
                                           
                                        </strong>
                                    </div>
                                    <div class="card-body">
                                    <div class="table-responsive m-b-40">
                                    <table class="table table-borderless table-data3">
                                        <thead>
                                            <tr>
                                                <th>Fullname</th>
                                                <th>Parent Name</th>
                                                <th>Email</th>
                                                <th>Contact</th>
                                                <th>Gender</th>
                                                <th>DOB</th>
                                                <th>Aadhar</th>
                                                <th>Nationality</th>
                                                <th>Joining</th>
                                                <th>Occupation</th>
                                                <th>Reason</th>
                                                <th>Disablity</th>
                                                <th>Address</th>
                                                <th>photo</th>
                                                <th>Action</th>
                                                <th>Print</th>
                                            </tr>
                                        </thead>
                                         <tbody id='admission-table'>
                                                <!-- <tr>
                                                    <td>sdfsdfsdf</td>
                                                    <td>sdfsdf</td>
                                                    <td>sdf</td>
                                                    <td>df</td>
                                                    <td>sdf</td>
                                                    <td>sdf</td>
                                                    <td>sdf</td>
                                                    <td>sdf</td>
                                                    <td>sdf</td>
                                                    <td>sdsd d</td>
                                                    <td>ddf</td>
                                                    <td>dfd</td>
                                                    <td>eee</td>
                                                    <td>cs</td>
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
        <small id="reg" class="d-block" style="text-align:right;">Regd No.271/17 F-25060</small>
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
        <h3 class="text-center">Samrat Sports Karate Association, Aurangabad</h3>
        <h4 class="text-center">Yongmudo Association Of Aurangabad</h4>
        
        <!-- <p class="font-weight-bold">  Samrat Sports Karate Association </p>
            <p class="text-justify"><b>Address: </b> Gut no. 93, Plot No. 43, Kalampur. Waluj Road, Sitaram Nagar, Near Bhagat Singh Junior College. Jogeshwari, Aurangabad
            </p>
            <p>
            <b>Phone:</b> +91 9850612137
            </p>
            <p>

<b>Email:</b> info@samratsportskarate.com</p> -->
        </div>
        <div class="col-md-12 recog mt-2" >
        <h5 class="text-center">
        Recognized By: School Games Federation Of India (SGFI)<br>
        Under Ministry Of Youth Affairs & Sports International Yongmudo Federation
        </h5>
        </div>

        <div class="col-md-12">
            <hr>

            <h3 class="text-center mb-3">Admission Form</h3>
        </div>
        <div class="col-md-12">
            <table class="table table-bordered print-table">
            <tr>
            <td>Fullname: </td> <td id="fname"></td> <td id="photo" rowspan="3"> </td>
            </tr>
            <tr>
            <td>Parent's / Guardian's Name: </td> <td id="pname"></td> 
            </tr>
            <tr>
            <td>Email: </td> <td id="email"  colspan="2">sdf</td>  
            </tr>
            <tr>
            <td>Contact No.: </td> <td id="contact" colspan="2">sdf</td> 
            </tr>
            <tr>
            <td>Gender: </td> <td id="gender" colspan="2">sdf</td>  
            </tr>
            <tr>
            <tr>
            <td>DOB: </td> <td id="dob" colspan="2">sdf</td>  
            </tr>
            <tr>
            <td>Adharno: </td> <td id="adhar"  colspan="2">sdf</td>  
            </tr>
            <tr>
            <td>Nationality: </td> <td id="nationality"  colspan="2">sdf</td>  
            </tr>
            <tr>
            <td>Joining Date: </td> <td id="joiningdate"  colspan="2">sdf</td> 
            </tr>
            <tr>
            <td>Occupation: </td> <td id="occupation"  colspan="2">sdf</td> 
            </tr>
            <tr>
            <td>Reason To Join: </td> <td id="reason"  colspan="2">sdf</td> 
            </tr>
            <tr>
            <td>Disablity ( if any ): </td> <td id="disability"  colspan="2">sdf</td> 
            </tr>
            <tr>
            <td>Address: </td> <td id="address"  colspan="2">sdf</td> 
            </tr>
            <tr style="height:115px !important;">
            <td>Student's Signature </td> <td colspan="2" class="text-right"> <b>Authority Signature</b></td> 
            </tr>

                       </table>
                       
                       <footer>
                        <h5 class="text-center mt-4">Office:Gut No.93, Plot No.43, Kamlapur Waluj, Road, Sitaram Nagar,<br>
                        Near Bhagat Singh Junior College, Jogeshwari Mbile 9850612137.</h5>
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

  newWin.document.write('<html><head> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"> <style type="text/css">.left-img,.right-img{width:200px;}.imglogo{width:50px;heigth:50px}.address-info h3{text-align:center;}.address-info h3{font-size:}.address-info h2{text-align:center; color:red; margin-bottom:1%;}.recog{background-color:pink;text-align:center;padding:1%}.modal-logo{width:280px !important;}p{margin:0;}.print-table td{font-size:20px;}footer{border:1px solid lightgray;text-align:center}.print-table td:first-child{font-weight:bold;width:270px !important;}#photo{text-align:right;width:150px;}#photo img{height:150px;width:120px !important;}</style> </head><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

  newWin.document.close();

  setTimeout(function(){newWin.close();},10);

}
        </script>
        
<?php include('./include/scripts.php') ?>

<script src="jsapi/get-admissions.js"> </script>
</html>
<!-- end document-->
