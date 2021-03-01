$(document).ready(function() {
        
    getCount();
    receivePayment();
    pendingPayment();
    totalPayment();
    usersCount();
    statusPending();
    // statusCompleted();
});




function getCount(){ 

    $.ajax({
        type: "GET",
        url: "./api/count-clients.php", 
        data:{'total_count':'total_count'},      
        dataType: "JSON",
        success: function (response) {
            var countrow= response.count;

            console.log(response);
            
            $("#client-count").html(countrow)
 
        },
        error: function(response){
            console.log(response);
        }

    });

 }

 function receivePayment(){ 

    $.ajax({
        type: "GET",
        url: "./api/count-clients.php",       
        data:{'total_received':'total_received'},
        dataType: "JSON",
        success: function (response) {
             var deposite= response.total;

            console.log(response)
            
            $("#deposited-amt").html(deposite)
 
        },
        error: function(response){
            console.log(response);
        }

    });

 }


 function pendingPayment(){

    $.ajax({
        type: "GET",
        url: "./api/count-clients.php",
        data: {'pending_payment': 'pending_payment'},
        success: function(response){

            var remain= response.total;

            console.log(response)
            
            $("#pending-amt").html(remain)

        
        },
        error: function(response){
            console.log(response);
        }
    });
 }

 function totalPayment(){
     $.ajax({
         type: "GET",
         url: "./api/count-clients.php",
         data: {"total_payment": "total_payment"},
         success: function(response){

            var total= response.total;

            console.log(response);
            
            $('#total-amt').html(total)
         },
         error: function(response)
         {
             console.log(response);
         }
     });
 }

 function usersCount(){
     $.ajax({
         type: "GET",
         url: "./api/count-clients.php",
         data:{
            "users_count": "users_count"
         },
         success: function(response){

            var count= response.count;

            console.log(response);

            $('#users-count').html(count)      

         },
         error: function(response)
         {
             console.log(response);
         }
     });
 }

function statusPending(){
    $.ajax({
        type: "GET",
        url: "./api/count-clients.php",
        data: {"pending_status": "pending_status"},
        success: function(response){

           var countrow= response.count;

           console.log(response);
           
           $('#status-pending').html(countrow)
        },
        error: function(response)
        {
            console.log(response);
        }
    });
}

// function statusCompleted(){
//     $.ajax({
//         type: "GET",
//         url: "./api/count-clients.php",
//         data: {"pending_status": "pending_status"},
//         success: function(response){

//            var countrow= response.count;

//            console.log(response);
           
//            $('#status-pending').html(countrow)
//         },
//         error: function(response)
//         {
//             console.log(response);
//         }
//     });
// }