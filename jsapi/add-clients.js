$(document).ready(function() {
    $('.datepicker').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy'
    })
    getClients()
    $(".submitBtn").click(function() {

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
        var flag = false
            // console.log('auid', assigned_userid)
        if (!fullname) {
            flag = false;
            $('#fullnameError').html('please enter fullname');
        }
        if (firmname == "") {
            flag = false;
            $('#firmnameError').html('please enter firmname');
        }
        if (contact == "") {
            flag = false;
            $('#contactError').html('please enter contact number');
        }


        if (email == "") {
            flag = false;
            $('#emailError').html('please enter email');
        }

        if (address == "") {
            flag = false;
            $('#addressEror').html('please enter address');
        }
        if (taskdesc == "") {
            flag = false;
            $('#remarksError').html('please enter remarks');
        }
        // if (assigned_userid == "") {
        //     flag = false;
        //     $('#assignedError').html('please select ');
        // }
        if (assigned_userid == 0) {
            flag = false;
            $('#assignedError').html('please select');
        }
        if (total_amount == "") {
            flag = false;
            $('#totalError').html('please enter total amount');
        }
        if (deposited_amount == "") {
            flag = false;
            $('#depositedError').html('please enter deposited amount');
        }

        if (last_date == "") {
            flag = false;
            $('#lastdateError').html('please enter dater ');
        }
        if (flag = true) {

            $.ajax({
                type: "POST",
                url: "./api/add-client.php",
                data: { 'clientname': fullname, 'firmname': firmname, 'contact': contact, 'email': email, 'address': address, 'task': taskdesc, 'assigned_userid': assigned_userid, 'assigned_username': assigned_user, 'total_amount': total_amount, 'deposited_amount': deposited_amount, 'remaining_amount': remaining_amount, 'submission_date': last_date },
                dataType: "json",
                success: function(response) {
                    if (response.status === 1) {
                        alert('Client Successfully Added')
                        getClients()

                    }
                }
            });
        }

    })
    getUsers()

})
var total;
$("#totamount").keyup(function() {

    total = parseInt($("#totamount").val());

    if (!total) {
        $("#depamount").attr('readonly', true)
    } else {
        $("#depamount").removeAttr('readonly')

    }


})

$("#depamount").keyup(function() {
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
        success: function(response) {
            count = 1;
            var html = '<option value="0"> Select User </option>';

            for (i = 0; i < response.length; i++) {
                if (response[i].status != 'inactive') {
                    html += '<option value=' + response[i].id + '>' + response[i].username + '</option>';
                }

            }

            $("#assigned_user").html(html)

        }
    });
}

function getClients() {




    $.ajax({
        type: "GET",
        url: "./api/get-clients.php",
        // data: "data",
        dataType: "json",
        success: function(response) {
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
                html += '<button class="btn btn-sm btn-ina btn-danger" title="update task" data-id=' + response[i].id + '><i class="fa fa-edit"></i><button>';
                html += '</td>';
                // }
                count++;

            }

            $("#clients-table").html(html)

        }
    });
}