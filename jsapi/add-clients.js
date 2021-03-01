 
$(document).ready(function() {
    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    console.log($("#isWhatsapp").val())
    $('.datepicker').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy'
    })
    $('.datepicker').datepicker('setDate', today);
    getClients()
    getAgents()
    getServices()
    $(".submitBtn").click(function() {
        $('#fullnameError').html('');
        $('#firmnameError').html('');
        $('#contactError').html('');
        $('#emailError').html('');
        $('#addressError').html('');
        $('#remarksError').html('');
        $('#assignedError').html('');
        $('#totalError').html('');
        $('#depositedError').html('');
        $('#lastdateError').html('');
        var agentname = $("#agentname option:selected").html();
        var agent_id = $("#agentname").val();
        var servicename = $("#servicename option:selected").html();
        var service_id = $("#servicename").val();
        var paymentmode = $("#paymentmode").val();
        var fullname = $("#fullname").val();
        var firmname = $("#firmname").val();
        var contact = $("#contact").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var taskdesc = $("#taskdesc").val();
        var assigned_userid = $("#assigned_user").val();
        var assigned_user = $("#assigned_user option").html();
        var total_amount = $("#totamount").val();
        var deposited_amount = $("#depamount").val()
        var remaining_amount = $("#remamount").val();
        var last_date = $("#subdate").val();
        var flag = true
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


        // if (email == "") {
        //     flag = false;
        //     $('#emailError').html('please enter email');
        // }

        // if (address == "") {
        //     flag = false;
        //     $('#addressError').html('please enter address');
        // }
        // if (taskdesc == "") {
        //     flag = false;
        //     $('#remarksError').html('please enter remarks');
        // }
        // if (assigned_userid == 0) {
        //     flag = false;
        //     $('#assignedError').html('please select');
        // }
        // if (total_amount == "") {
        //     flag = false;
        //     $('#totalError').html('please enter total amount');
        // }
        // if (deposited_amount == "") {
        //     flag = false;
        //     $('#depositedError').html('please enter deposited amount');
        // }

        // if (last_date == "") {
        //     flag = false;
        //     $('#lastdateError').html('please enter dater ');
        // }
        if (flag = true) {

            $.ajax({
                type: "POST",
                url: "./api/add-client.php",
                data: { 'agentname':agentname, 'agent_id': agent_id, 'servicename':servicename, 'service_id':service_id, 'isWhatsapp':0, 'isPrint':0, 'paymentmode':paymentmode, 'clientname': fullname, 'firmname': firmname, 'contact': contact, 'email': email, 'address': address, 'task': taskdesc, 'assigned_userid': assigned_userid, 'assigned_username': assigned_user, 'total_amount': total_amount, 'deposited_amount': deposited_amount, 'remaining_amount': remaining_amount, 'submission_date': last_date },
                dataType: "json",
                success: function(response) {
                    if (response.status === 1) {
                        $.notify({
                            // options
                            message: 'Client Successfully Added' 
                        },{
                            // settings
                            type: 'success',
                            animate: {
                                enter: 'animated fadeInDown',
                                exit: 'animated fadeOutUp'
                            },
                            placement: {
                                from: "top",
                                align: "center"
                            },
                        });
                        getClients()

                    }
                }
            });
        }

    })
    getUsers();

    
 
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
        dataType: "json",
        success: function(response) {
            count = 1;
            var html = '<option value="0"> Select User </option>';

            for (i = 0; i < response.length; i++) {
                if (response[i].status != 'inactive') {
                    html += '<option value=' + response[i].id + '>' + response[i].username + '</option>';
                }

            }

            $("#assigned_user, .assigned_user").html(html)

        }
    });
}

function getServices(){
    $.ajax({
        type: "GET",
        url: "./api/get-services.php",
        data: "data",
        dataType: "json",
        success: function (response) {
            var html = '<option value="0"> Select Service </option>';

            for (i = 0; i < response.length; i++) {
                if (response[i].status != 'inactive') {
                    html += '<option value=' + response[i].id + '>' + response[i].services + '</option>';
                }

            }
            $("#servicename, .servicename").html(html)
        }
    });
}

function getAgents(){
    $.ajax({
        type: "GET",
        url: "./api/get-agents.php",
        data: "data",
        dataType: "json",
        success: function (response) {
            var html = '<option value="0"> Select Agent </option>';

            for (i = 0; i < response.length; i++) {
                if (response[i].status != 'inactive') {
                    html += '<option value=' + response[i].id + '>' + response[i].agentname + '</option>';
                }

            }
            $("#agentname, .agentname").html(html)
        }
    });
}

function getClients() {
    // var columns = {
        
    //         'agentname':'Agent Name',
        
    //         'servicename':'Form Name'
        
    //     }
      
    $.ajax({
        type: "GET",
        url: "./api/get-clients.php",
        dataType: "json",
        success: function(response) {
            count = 1;
            var html = '';

            for (i = 0; i < response.length; i++) {
               
            //     var start= $("#hiddenip").datepicker("getDate");
            //     var end = new Date(response[i].submission_date)
            //     console.log(start);    	 
   		    //    days = (end- start) / (1000 * 60 * 60 * 24);
            //    datediff=Math.round(days);
                //   alert(Math.round(days));
             //  if(datediff<=2) { //mention notify status here
                if(response[i].status == 'completed'){
                    html += '<tr class="completed-row">';
                }
                if(response[i].status == 'pending'){
                    html += '<tr class="pending-row">';
                }
                if(response[i].status == 'Rejected'){
                    html += '<tr class="rejected-row">';
                }
             //  }
             
              //  html += '<tr>';
                html += '<td>';
                html += '' + count + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].agentname + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].servicename + '';
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
                html += '' + response[i].isWhatsapp + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].isPrint + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].paymentmode + '';
                html += '</td>';
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
                html += '<td>';
                html += '<button class="btn btn-sm btn-update btn-warning" title="update task" data-id=' + response[i].id + '><i class="fa fa-edit"></i><button>';
                html += '</td>';
                count++;

            }

            $("#clients-table").html(html)
            $.notify({
                // options
                message: 'Client Successfully Retrived' 
            },{
                // settings
                type: 'success',
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                placement: {
                    from: "top",
                    align: "center"
                },
            });
            // var table = $('#table-sortable').tableSortable({
            //     data: response,
            //     sorting:false,
            //     columns: columns,
            //     rowsPerPage: 5,
            //     pagination: true,
            //     searchField:'#searchField',
            // });
            // table.setData(response,null,true);

           $('#tblclient').dataTable({
                // "destroy": true,     
               "ordering": false
           });


        }


    });
}


$('body').on('click', '.btn-update', function() {

    var id = $(this).attr('data-id');
    $('.updateBtn').attr('data-id', id)
    $.ajax({
        type: "GET",
        url: "./api/get-clients-by-id.php",
        data: { 'clientid': id },
        dataType: "json",
        success: function(response) {
            console.log(response)
             
             $("#uagentname").val(response[0].agent_id);
           
            $("#uservicename").val(response[0].service_id);            
            
            $("#sent_by_whatsapp").val(response[0].isWhatsapp);
            $("#print_taken").val(response[0].isPrint);
            
            $("#upaymentmode").val(response[0].paymentmode)
            $("#ufullname").val(response[0].clientname);
            $("#ufirmname").val(response[0].firmname);
            $("#ucontact").val(response[0].contact);
            $("#uemail").val(response[0].email);
            $("#uaddress").val(response[0].address);
            $("#utaskdesc").val(response[0].task);
            $("#uassigned_user").val(response[0].assigned_userid)
            $("#current_status").val(response[0].status)
            $("#utotamount").val(response[0].total_amount);
            $("#udepamount").val(response[0].deposited_amount);
            $("#uremamount").val(response[0].remaining_amount);
            $("#usubdate").val(response[0].submission_date)
            var utotal = parseInt($("#utotamount").val())

            $("#utotamount").keyup(function() {

                utotal = parseInt($("#utotamount").val());
                iudepamount = parseInt($("#udepamount").val());
                newRemaining = utotal - iudepamount;
                console.log(newRemaining)
                $("#uremamount").val(newRemaining)
            })

            $("#udepamount").keyup(function() {
                console.log(utotal);
                var udepamount = parseInt($(this).val());
                var uremaining = utotal - udepamount;
                $("#uremamount").val(uremaining)
            })
      

            $("#updateClientModal").modal('show');
           

        }
    });

})

  
$(".updateBtn").click(function() {
    
    id = $(this).attr('data-id');
    var uagentname = $("#uagentname option:selected").html();
 
    var uagent_id = $("#uagentname").val();
    var uservicename = $("#uservicename option:selected").html();
    var uservice_id = $("#uservicename").val();
    var ufullname = $("#ufullname").val();
    var ufirmname = $("#ufirmname").val();
    var ucontact = $("#ucontact").val();
    var uemail = $("#uemail").val();
    var uaddress = $("#uaddress").val();
    var utaskdesc = $("#utaskdesc").val();
    var upaymentmode = $("#upaymentmode").val();
    var uassigned_userid = $("#uassigned_user").val();
    var uassigned_user = $("#uassigned_user option:selected").html();
    var utotal_amount = $("#utotamount").val();
    var udeposited_amount = $("#udepamount").val()
    var uremaining_amount = $("#uremamount").val();
    var ulast_date = $("#usubdate").val();
    var updated_status = $("#current_status").val()
    var sent_by_whatsapp = $("#sent_by_whatsapp").val()
    var print_taken = $("#print_taken").val()

    $.ajax({
        type: "POST",
        url: "./api/update-client.php",
        data: { 'id': id, 'uagentname':uagentname, 'uagent_id': uagent_id, 'uservicename':uservicename, 'uservice_id':uservice_id, 'uisWhatsapp':sent_by_whatsapp,'uisPrint':print_taken, 'upaymentmode':upaymentmode, 'uclientname': ufullname, 'ufirmname': ufirmname, 'ucontact': ucontact, 'uemail': uemail, 'uaddress': uaddress, 'utask': utaskdesc,'uupdated_status': updated_status, 'uassigned_userid': uassigned_userid, 'uassigned_username': uassigned_user, 'utotal_amount': utotal_amount, 'udeposited_amount': udeposited_amount, 'uremaining_amount': uremaining_amount, 'usubmission_date': ulast_date },
        dataType: "json",
        success: function(response) {
            if (response.status === 1) {
                // alert('Client Successfully Updated')
                $.notify({
                    // options
                    message: 'Client Successfully Updated' 
                },{
                    // settings
                    type: 'success',
                    animate: {
                        enter: 'animated fadeInDown',
                        exit: 'animated fadeOutUp'
                    },
                    placement: {
                        from: "top",
                        align: "center"
                    },
                });
                getClients()
                $("#updateClientModal").modal('hide');
                $("#updateClientModal").on('hidden.bs.modal', function(){
                    $("#uisWhatsapp").attr('checked',false)
                    $("#uisPrint").attr('checked',false)
    
                })
            }
        },
        error: function(err) {
            alert('Error Occured, Please Try After Sometime.')

        },
        failed: function(err){
            console.log(err)
        }
    });


})