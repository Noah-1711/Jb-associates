$(document).ready(function () {
    $('.datepicker').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy'
    })
    getClients()
    $(".submitBtn").click(function () {

        var fullname = $("#fullname").val();
        var firmname = $("#firmname").val();
        var contact = $("#contact").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var taskdesc = $("#taskdesc").val();
        var assigned_userid = $("#assigned_user").val();
        var assigned_user = $("#assigned_user option").html();
        // var assigned_userid = localStorage.getItem('userid')
        var total_amount = $("#totamount").val();
        var deposited_amount = $("#depamount").val()
        var remaining_amount = $("#remamount").val();
        var last_date = $("#subdate").val();

        $.ajax({
            type: "POST",
            url: "./api/add-client.php",
            data: { 'clientname': fullname, 'firmname': firmname, 'contact': contact, 'email': email, 'address': address, 'task': taskdesc, 'assigned_userid': assigned_userid, 'assigned_username': assigned_user, 'total_amount': total_amount, 'deposited_amount': deposited_amount, 'remaining_amount': remaining_amount, 'submission_date': last_date },
            dataType: "json",
            success: function (response) {
                if (response.status === 1) {
                    alert('Client Successfully Added')
                    getClients()

                }
            }
        });

    })
    getUsers()

})
var total;
$("#totamount").keyup(function () {

    total = parseInt($("#totamount").val());

    if (!total) {
        $("#depamount").attr('readonly', true)
    }
    else {
        $("#depamount").removeAttr('readonly')

    }


})

$("#depamount").keyup(function () {
    console.log(total);
    var depamount = parseInt($(this).val());
    var remaining = total - depamount;
    $("#remamount").val(remaining)
})


function getUsers() {

    $.ajax({
        type: "GET",
        url: "./api/get-users.php",
        // data: "data",
        dataType: "json",
        success: function (response) {
            count = 1;
            var html = '<option> Select User </option>';

            for (i = 0; i < response.length; i++) {
                if (response[i].status != 'inactive') {
                    html += '<option value=' + response[i].id + '>' + response[i].username + '</option>';
                }

            }

            $("#assigned_user, .assigned_user").html(html)

        }
    });
}

function getClients() {




    $.ajax({
        type: "GET",
        url: "./api/get-clients.php",
        // data: "data",
        dataType: "json",
        success: function (response) {
            count = 1;
            var html = '';
            for (i = 0; i < response.length; i++) {
                html += '<tr>';
                html += '<td>';
                html += '' + count + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].clientname + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].address + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].firmname + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].contact + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].email + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].task + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].assigned_username + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].status + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].total_amount + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].deposited_amount + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].remaining_amount + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].submission_date + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].registered_date + '';
                html += '</td>';
                // if(response[i].status=='inactive'){
                //     html+='<td>';
                //     html+='<button class="btn btn-sm btn-act btn-success" data-id='+response[i].id+'><i class="fa fa-edit"></i><button>';
                //     html+='</td>';
                // }
                // else{
                html += '<td>';
                html += '<button class="btn btn-sm btn-update btn-warning" title="update task" data-id=' + response[i].id + '><i class="fa fa-edit"></i><button>';
                html += '</td>';
                // }
                count++;

            }

            $("#clients-table").html(html)

        }
    });
}


$('body').on('click', '.btn-update', function () {

    var id = $(this).attr('data-id');
    $('.updateBtn').attr('data-id', id)
    $.ajax({
        type: "GET",
        url: "./api/get-clients-by-id.php",
        data: { 'clientid': id },
        dataType: "json",
        success: function (response) {
            console.log(response)
            $("#ufullname").val(response[0].clientname);
            $("#ufirmname").val(response[0].firmname);
            $("#ucontact").val(response[0].contact);
            $("#uemail").val(response[0].email);
            $("#uaddress").val(response[0].address);
            $("#utaskdesc").val(response[0].task);
            $("#uassigned_user").val(response[0].id)
            $("#current_status").val(response[0].status)
            $("#utotamount").val(response[0].total_amount);
            $("#udepamount").val(response[0].deposited_amount);
            $("#uremamount").val(response[0].remaining_amount);
            $("#usubdate").val(response[0].submission_date)
            var utotal = parseInt($("#utotamount").val())

            $("#utotamount").keyup(function () {

                utotal = parseInt($("#utotamount").val());
                iudepamount = parseInt($("#udepamount").val());
                newRemaining = utotal - iudepamount;
                console.log(newRemaining)
               $("#uremamount").val(newRemaining)
            })

            $("#udepamount").keyup(function () {
                console.log(utotal);
                var udepamount = parseInt($(this).val());
                var uremaining = utotal - udepamount;
                $("#uremamount").val(uremaining)
            })

            $("#updateClientModal").modal('show');

        }
    });

})

$(".updateBtn").click(function(){
    id = $(this).attr('data-id');
    var ufullname = $("#ufullname").val();
    var ufirmname = $("#ufirmname").val();
    var ucontact = $("#ucontact").val();
    var uemail = $("#uemail").val();
    var uaddress = $("#uaddress").val();
    var utaskdesc = $("#utaskdesc").val();
    var uassigned_userid = $("#uassigned_user").val();
    var uassigned_user = $("#uassigned_user option:selected").html();
    // var assigned_userid = localStorage.getItem('userid')
    var utotal_amount = $("#utotamount").val();
    var udeposited_amount = $("#udepamount").val()
    var uremaining_amount = $("#uremamount").val();
    var ulast_date = $("#usubdate").val();
    var updated_status = $("#current_status").val()

    $.ajax({
        type: "POST",
        url: "./api/update-client.php",
        data: { 'id': id, 'uclientname': ufullname, 'ufirmname': ufirmname, 'ucontact': ucontact, 'uemail': uemail, 'uaddress': uaddress, 'utask': utaskdesc, 'uupdated_status':updated_status,'uassigned_userid': uassigned_userid, 'uassigned_username': uassigned_user, 'utotal_amount': utotal_amount, 'udeposited_amount': udeposited_amount, 'uremaining_amount': uremaining_amount, 'usubmission_date': ulast_date },
        dataType: "json",
        success: function (response) {
            if (response.status === 1) {
                alert('Client Successfully Updated')
                getClients()
                $("#updateClientModal").modal('hide');

            }
        },
        error: function(err){
            alert('Error Occured, Please Try After Sometime.')
            // console.log(err)
        }
    });


})