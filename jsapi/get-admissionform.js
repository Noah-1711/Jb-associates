$(document).ready(function () {
        
    getAdmissions();
  
});




function getAdmissions(){


    $.ajax({
        type: "GET",
        url: "./api/admissionform-show.php",       
        dataType: "JSON",
        success: function (response) {
            var adlist='';
           
            

            for(i=0; i<response.length; i++){
                adlist+="<tr>";
                adlist+="<td>"+response[i].fullname+"</td>";
                adlist+="<td>"+response[i].dob+"</td>";
                adlist+="<td>"+response[i].gender+"</td>";
                adlist+="<td>"+response[i].contactno+"</td>";
                adlist+="<td>"+response[i].email+"</td>";
                adlist+="<td>"+response[i].degree+"</td>";
                adlist+="<td>"+response[i].address+"</td>";          
                adlist+="<td><img src='uploads/"+response[i].imageurl+"'></td>";
                adlist+="<td><button class='item delete' data-id='"+response[i].id+"'><i class='zmdi zmdi-delete'></i></button></td>";
                adlist+="<td><button class='item print' data-id='"+response[i].id+"'>Print</button></td>";
                adlist+="</tr>"

            }

            $("#admission-table").html(adlist)
 
        },
        error: function(response){
            console.log('error', response)
        }

    });
}

$('body').on('click', '.print', function(){
    var fname = $(this).parent().parent().find('td:first').html();
    var dob = $(this).parent().parent().find('td:nth-child(2)').html();
    var gender = $(this).parent().parent().find('td:nth-child(3)').html();
    var contactno = $(this).parent().parent().find('td:nth-child(4)').html();
    var email = $(this).parent().parent().find('td:nth-child(5)').html();
    var degree = $(this).parent().parent().find('td:nth-child(6)').html();
    var address = $(this).parent().parent().find('td:nth-child(7)').html();
    var imgpath = $(this).parent().parent().find('td:nth-child(8)').html();

    $("#fname").html(fname);
    $("#dob").html(dob);
    $("#gender").html(gender);
    $("#contact").html(contactno);
    $("#email").html(email);
    $("#degree").html(degree);
    $("#address").html(address);
    $("#photo").html(imgpath)   

    console.log(fname)
    $("#printmodal").modal('show')
})
$('body').on('click', '.delete', function() {
    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-admissionform.php',
        method: 'POST',
        data: { 'id': id },
        success: function(data) {
            if (data.status === 1) {
                // alert('Event Deleted Successfully')
                getAdmissions();
            }
        }

    })

})

// $('body').on('click', '.delete', function(){

//         if (confirm("Are you sure delete this ?")) {  
//         var id = $(this).data('id');  
//         var element = this;  
//         $.ajax({  
//              url :"./api/delete-admissionform.php",  
//              type:"POST",  
//              cache:false,  
//              data:{deleteId:id},  
//              success:function(data){  
//                   if (data == 1) {  
//                        $(element).closest("tr").fadeOut();  
//                        alert("User record deleted successfully");       
//                   }else{  
//                        alert("Invalid User id");  
//                   }  
//              }  
//         });  
//    }  
// });
