$(document).ready(function () {
        
    getEnquiries();
  
});



$('body').on('click', '.delete', function() {
    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-enquiry.php',
        method: 'POST',
        data: { 'id': id },
        success: function(data) {
            if (data.status === 1) {
                // alert('Event Deleted Successfully')
                getEnquiries();
            }
        }

    })

})


function getEnquiries(){ 


    $.ajax({
        type: "GET",
        url: "./api/enquiry-show.php",       
        dataType: "JSON",
        success: function (response) {
            var enlist='';
           
            

            for(i=0; i<response.length; i++){
                enlist+="<tr>";
                enlist+="<td>"+(i+1)+"</td>";
                enlist+="<td>"+response[i].name+"</td>";
                enlist+="<td>"+response[i].email+"</td>";                
                enlist+="<td>"+response[i].contact+"</td>";
                enlist+="<td>"+response[i].message+"</td>";               
                enlist+="<td><button class='item delete' data-id='"+response[i].id+"'><i class='zmdi zmdi-delete'></i> </button></td>";
                enlist+="</tr>";
            }

            $("#enquiry-table").html(enlist)
 
        },
        error: function(response){
            console.log('error', response)
        }

    });

 }