
    <!-- Jquery JS-->
    <script src="vendor/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap JS-->
    <script src="vendor/bootstrap-4.1/popper.min.js"></script>
    <script src="vendor/bootstrap-4.1/bootstrap.min.js"></script>
    <!-- Vendor JS       -->
     <script src="vendor/animsition/animsition.min.js"></script>
    <script src="js/bootstrap-notify.min.js"></script>
    <script>
        $(document).ready(function () {
            var role = localStorage.getItem('role');
            console.log(role)
            if(role=='user'){
                $(".manage_user").remove()
            }
        });
    </script>
    <!-- Main JS-->
    
    <script src="js/main.js"></script>
    <!--  -->
    <script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>
    <!-- <script src="./js/table-sortable.js"></script> -->
