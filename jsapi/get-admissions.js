$(document).ready(function () {
        
    getAdmissions();
  
});


function getAdmissions(){


    $.ajax({
        type: "GET",
        url: "./api/admission-show.php",       
        dataType: "JSON",
        success: function (response) {
            var adlist='';
           
            

            for(i=0; i<response.length; i++){
                adlist+="<tr>";
                adlist+="<td>"+response[i].fullname+"</td>";
                adlist+="<td>"+response[i].parentsname+"</td>";
                adlist+="<td>"+response[i].email+"</td>";
                adlist+="<td>"+response[i].contact+"</td>";
                adlist+="<td>"+response[i].gender+"</td>";
                adlist+="<td>"+response[i].dob+"</td>";
                adlist+="<td>"+response[i].aadhar+"</td>";
                adlist+="<td>"+response[i].nationality+"</td>";
                adlist+="<td>"+response[i].joiningdate+"</td>";
                adlist+="<td>"+response[i].occupation+"</td>";
                adlist+="<td>"+response[i].reason+"</td>";
                adlist+="<td>"+response[i].disability+"</td>";
                adlist+="<td>"+response[i].address+"</td>";
                adlist+="<td><img src='uploads/"+response[i].imagepath+"'></td>";
                adlist+="<td><button class='item delete' data-id='"+response[i].id+"'><i class='zmdi zmdi-delete'></i> </button></td>";
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
    var pname = $(this).parent().parent().find('td:nth-child(2)').html();
    var email = $(this).parent().parent().find('td:nth-child(3)').html();
    var contactno = $(this).parent().parent().find('td:nth-child(4)').html();
    var gender = $(this).parent().parent().find('td:nth-child(5)').html();
    var dob = $(this).parent().parent().find('td:nth-child(6)').html();
    var adhar= $(this).parent().parent().find('td:nth-child(7)').html();
    var nationality= $(this).parent().parent().find('td:nth-child(8)').html();
    var joiningdate = $(this).parent().parent().find('td:nth-child(9)').html();
    var occupation = $(this).parent().parent().find('td:nth-child(10)').html();
    var reason= $(this).parent().parent().find('td:nth-child(11)').html();
    var disability = $(this).parent().parent().find('td:nth-child(12)').html();
    var address = $(this).parent().parent().find('td:nth-child(13)').html();
    var imgpath = $(this).parent().parent().find('td:nth-child(14)').html();

    $("#fname").html(fname);
    $("#pname").html(pname);
    $("#email").html(email);
    $("#contact").html(contactno);
    $("#gender").html(gender);
    $("#dob").html(dob);
    $("#adhar").html(adhar);
    $("#nationality").html(nationality);
    $("#joiningdate").html(joiningdate);
    $("#occupation").html(occupation);
    $("#reason").html(reason);
    $("#disability").html(disability)   
    $("#address").html(address);
    $("#photo").html(imgpath);

    console.log(fname)
    $("#printmodal").modal('show')
})
$('body').on('click', '.delete', function() {
    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-admission.php',
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
