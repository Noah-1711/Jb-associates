$(document).ready(function () {
    var date = new Date();
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
   
    $('.datepicker').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy'
    })
    $('.datepicker').datepicker('setDate', today);
    getClients()
    getAgents()
    getServices()
    $(".submitBtn").click(function () {
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
        //  var servicename = $("#servicename option:selected").html();
        var service_id = $("#servicename").val();
        var paymentmode = $("#paymentmode").val();
        var fullname = $("#fullname").val();
        var firmname = $("#firmname").val();
        var contact = $("#contact").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var taskdesc = $("#taskdesc").val();
        var assigned_userid = $("#assigned_user").val();
        var assigned_user = $("#assigned_user option:selected").html();
        var total_amount = $("#totamount").val();
        var deposited_amount = $("#depamount").val()
        var remaining_amount = $("#remamount").val();
        var last_date = $("#subdate").val();
        var flag = true

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



        if (flag = true) {

            $.ajax({
                type: "POST",
                url: "./api/add-client.php",
                data: { 'agentname': agentname, 'agent_id': agent_id, 'servicename[]': service_id, 'service_id[]': service_id, 'isWhatsapp': 0, 'isPrint': 0, 'paymentmode': paymentmode, 'clientname': fullname, 'firmname': firmname, 'contact': contact, 'email': email, 'address': address, 'task': taskdesc, 'assigned_userid': assigned_userid, 'assigned_username': assigned_user, 'total_amount': total_amount, 'deposited_amount': deposited_amount, 'remaining_amount': remaining_amount, 'submission_date': last_date },
                dataType: "json",
                success: function (response) {
                    if (response.status === 1) {
                        $.notify({
                            // options
                            message: 'Client Successfully Added'
                        }, {
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
                        $('#tblclient').DataTable().destroy();
                        getClients()


                        $.ajax({
                            type: "POST",
                            url: "http://cloud.smsindiahub.in/vendorsms/pushsms.aspx",
                            data: { 'user': 'Aditya Bhalerao', 'password': 'aditya1646', 'msisdn': contact + ',9422461646', 'sid': 'SWSALT', 'msg': 'We welcome you to J.B. Associates, Thank you for choosing us for your ' + service_id + '. - J.B.Associates -Powered By SWS', 'fl': 0, 'gwid': 2 },
                            dataType: "dataType",
                            success: function (response) {
                                // http://219.90.67.240/vendorsms/pushsms.aspx?user=Aditya%20Bhalerao&password=aditya1646&msisdn=9422461646&sid=ABCXYZ&msg=Hello&fl=0&gwid=2 -->
                                if (response.ErrorCode == 000) {
                                    $.ajax({
                                        type: "POST",
                                        url: "http://cloud.smsindiahub.in/vendorsms/pushsms.aspx",
                                        data: { 'user': 'Aditya Bhalerao', 'password': 'aditya1646', 'msisdn': contact + ',9422461646', 'sid': 'SWSALT', 'msg': 'Dear Customer, Thank you for giving Rs '+ deposited_amount +' for serving '+ service_id +' in '+ paymentmode +'. - J.B Associates.', 'fl': 0, 'gwid': 2 },
                                        dataType: "dataType",
                                        success: function (response) {
                                            // http://219.90.67.240/vendorsms/pushsms.aspx?user=Aditya%20Bhalerao&password=aditya1646&msisdn=9422461646&sid=ABCXYZ&msg=Hello&fl=0&gwid=2 -->
                                            if (response.ErrorCode == 000) {
            
                                            }
                                        }
                                    });
                                }
                            }
                        });



                        


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
    } else {
        $("#depamount").removeAttr('readonly')

    }


})
$("#depamount").keyup(function () {
 
    var depamount = parseInt($(this).val());
    var remaining = total - depamount;
    $("#remamount").val(remaining)
})


function getUsers() {

    $.ajax({
        type: "GET",
        url: "./api/get-users.php",
        dataType: "json",
        success: function (response) {
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

function getServices() {
    $.ajax({
        type: "GET",
        url: "./api/get-services.php",
        data: "data",
        dataType: "json",
        success: function (response) {
            var html = '<option value="0"> Select Service </option>';

            for (i = 0; i < response.length; i++) {
                if (response[i].status != 'inactive') {
                    html += '<option value=' + response[i].services + '>' + response[i].services + '</option>';
                }

            }
            $("#servicename, .servicename").html(html).select2();
        }
    });
}

function getAgents() {
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

    $.ajax({
        type: "GET",
        url: "./api/get-clients.php",
        dataType: "json",
        success: function (response) {
            count = 1;
            var html = '';

            for (i = 0; i < response.length; i++) {
                var a = moment($("#hiddenip").datepicker("getDate"), 'DD/MM/YYYY');
                var b = moment(response[i].submission_date, 'DD/MM/YYYY');
                var diffDays = b.diff(a, 'days');


                if (diffDays <= 2 && response[i].status == 'completed') {
                    html += '<tr class="completed-row">';
                }
                if (diffDays > 2 && response[i].status == 'completed') {
                    html += '<tr class="completed-row">';
                }
                if (diffDays <= 2 && response[i].status == 'pending') {
                    html += '<tr class="blink">';
                }
                if (diffDays > 2 && response[i].status == 'pending') {
                    html += '<tr class="pending-row">';
                }
                if (diffDays <= 2 && response[i].status == 'Rejected') {
                    html += '<tr class="blink">';
                }
                if (diffDays > 2 && response[i].status == 'Rejected') {
                    html += '<tr class="Rejected-row">';
                }
 
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
                html += '' + response[i].sms_status + '';
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
                html += '<button class="btn btn-sm btn-update btn-info " title="Update Task" data-id=' + response[i].id + '><i class="fa fa-edit"></i><button>';
                if (response[i].sms_status == 'not_sent') {
                    html += '<button class="btn btn-sm btn-sms btn-warning" title="Send Reminder" data-id=' + response[i].id + '><i class="fa fa-envelope"></i><button>';

                }
                if (response[i].sms_status == 'sent') {
                    html += '<button class="btn btn-sm btn-rsms btn-warning" data-update="no" title="Resend Reminder" data-id=' + response[i].id + '>Notify Again<button>';

                }
                html += '</td>';
                count++;

            }

            $("#clients-table").html(html)



            $('#tblclient').dataTable({

                "ordering": false
            });


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
           

            $("#uagentname").val(response[0].agent_id);

            var servArray = response[0].service_id.split(',');


            // servArray=  servArray.map((item, index) => { return {id: index + 1, serviceName: item} });
            // console.log(servArray)
            $('.servicename').val(servArray)
            $('.servicename').select2().trigger('change');
            //  $("#uservicename").val(response[0].service_id);

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

$('body').on('click', '.btn-sms, .btn-rsms', function () {

    var isUpdate = $(this).attr('data-update');
    var id = $(this).attr('data-id');

    var receivers_no = $(this).parent().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev().prev().prev()
        .html();
    var client_name = $(this).parent().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev().prev()
        .html();
    var doi = $(this).parent().prev().prev()
        .html();
    var docs = $(this).parent().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev()
        .html();
    var service_details = $(this).parent().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev().prev().prev()
        .prev().prev().prev().prev()
        .html();

    var total_amount = $(this).parent().prev().prev()
    .prev().prev().prev().html();
    var remaining_amount = $(this).parent().prev().prev()
    .prev().html();
    var deposited_amount = $(this).parent().prev().prev()
    .prev().prev().html();



 


    $("#smsconf").modal('show')
    $("#smsconf").on('shown.bs.modal', function () {
        $("#recno").val(receivers_no)
        $("#receivers_name, #receivers_name_payment").html(client_name + ' ?');
        $("#doi").html(doi)
        $("#docs").val(docs)
        $("#total_amount_notify").html(total_amount);
        $("#total_deposited_amount_prev").html(deposited_amount);
        $("#remaining_prev").html(remaining_amount);
        $("#servdetails").html(service_details)
        
    })

    if (isUpdate != 'no' && id != undefined) {


        $("#sendsms").attr('data-id', id)

    }
    $("#sendsmsamt").attr('data-id', id)

})

$("#smsconf").on('hidden.bs.modal', function () {
    $("#sendsms").removeAttr('data-id')
})

$("#sendsms").click(function () {

    // var recname = $("#receivers_name").val();
    var recno = $("#recno").val();
    var recdocs = $("#docs").val();
    var recdoi = $("#doi").html();
    var msg = 'Dear Client, Your Document submission is due on '+recdoi+'. Please Submit your '+recdocs+' immediately before the due date. Ignore if already submitted. -J.B Associates. -Powered By SWS';
   
    var id = $(this).attr('data-id');
    if(id)
    {
         
        $.ajax({
            type: "POST",
            url: "http://cloud.smsindiahub.in/vendorsms/pushsms.aspx",
            // data: { 'user': 'Aditya Bhalerao', 'password': 'aditya1646', 'msisdn': recno + ',9422461646', 'sid': 'SWSALT', 'msg': msg, 'fl': 0, 'gwid': 2 },
            data: { 'user': 'Aditya Bhalerao', 'password': 'aditya1646', 'msisdn': recno, 'sid': 'SWSALT', 'msg': msg, 'fl': 0, 'gwid': 2 },
            dataType: "json",
            success: function (response) {
                 
                // http://219.90.67.240/vendorsms/pushsms.aspx?user=Aditya%20Bhalerao&password=aditya1646&msisdn=9422461646&sid=ABCXYZ&msg=Hello&fl=0&gwid=2 -->
                if (response.ErrorMessage == 'Success') {
                    $.ajax({
                        type: "POST",
                        url: "./api/update-client-sms-status.php",
                        data: {'id':id, 'sms_status':'sent'},
                        dataType: "json",
                        success: function (response) {
                            $.notify({

                                message: 'Message Sent Successfully'
                            }, {
            
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


                            $("#smsconf").modal('hide')
                        }
                    });
                }
            },
            error:function(err){
            
            }
        });

    }

    else{

        $.ajax({
            type: "POST",
            url: "http://cloud.smsindiahub.in/vendorsms/pushsms.aspx",
            // data: { 'user': 'Aditya Bhalerao', 'password': 'aditya1646', 'msisdn': recno + ',9422461646', 'sid': 'SWSALT', 'msg': msg, 'fl': 0, 'gwid': 2 },
            data: { 'user': 'Aditya Bhalerao', 'password': 'aditya1646', 'msisdn': recno, 'sid': 'SWSALT', 'msg': msg, 'fl': 0, 'gwid': 2 },
            dataType: "json",
            success: function (response) {
                // http://219.90.67.240/vendorsms/pushsms.aspx?user=Aditya%20Bhalerao&password=aditya1646&msisdn=9422461646&sid=ABCXYZ&msg=Hello&fl=0&gwid=2 -->
                if (response.ErrorMessage == 'Success') {
                    $.notify({

                        message: 'Message Resent Successfully'
                    }, {
    
                        type: 'warning',
                        animate: {
                            enter: 'animated fadeInDown',
                            exit: 'animated fadeOutUp'
                        },
                        placement: {
                            from: "top",
                            align: "center"
                        },
                    });
                    $("#smsconf").modal('hide')

                    
                }
            }
        });
    }


})

$("#sendsmsamt").click(function(){
        var id = $(this).attr('data-id');
        var remaining_amount_send_sms = parseInt($("#remaining_prev").html());
        var current_depositing_amount = parseInt($("#depositing_now").val());
        var total_deposited_amount = parseInt($("#total_deposited_amount_prev").html());
        var final_remaining_amount = remaining_amount_send_sms - current_depositing_amount;
        var final_deposited_amount = total_deposited_amount + current_depositing_amount;
        var paymentmode = $("#paymentmodeamt").val();
        var recnumberamt  = $("#recno").val();
        var servd = $("#servdetails").html();

        if(isNaN(current_depositing_amount) || current_depositing_amount==0){
            
            $('.amount-error').html('Please enter amount')

        }else{
 
            $.ajax({
                type: "POST",
                url: "./api/update-client-payment-status.php",
                data: {'id':id, 'uremaining_amount': final_remaining_amount, 'udeposited_amount':final_deposited_amount, 'upaymentmode':paymentmode},
                dataType: "json",
                success: function (response) {
                    if(response.status==1){
                        $.notify({
                
                            message: 'Payment Status Upadated'
                        }, {
        
                            type: 'success',
                            animate: {
                                enter: 'animated fadeInDown',
                                exit: 'animated fadeOutUp'
                            },
                            placement: {
                                from: "top",
                                align: "center"
                            },
                        })
                        getUsers();
                        var paymsg = 'Dear Customer, Thank you for giving Rs '+current_depositing_amount+' for serving '+servd+' in '+paymentmode+'. - J.B Associates.';
                       
                                    $.ajax({
                                        type: "POST",
                                        url: "http://cloud.smsindiahub.in/vendorsms/pushsms.aspx",
                                        // data: { 'user': 'Aditya Bhalerao', 'password': 'aditya1646', 'msisdn': recno + ',9422461646', 'sid': 'SWSALT', 'msg': msg, 'fl': 0, 'gwid': 2 },
                                        data: { 'user': 'Aditya Bhalerao', 'password': 'aditya1646', 'msisdn': recnumberamt, 'sid': 'SWSALT', 'msg': paymsg, 'fl': 0, 'gwid': 2 },
                                        dataType: "json",   
                                        crossDomain: true,                  
                                        success: function (response) {
                                            // http://219.90.67.240/vendorsms/pushsms.aspx?user=Aditya%20Bhalerao&password=aditya1646&msisdn=9422461646&sid=ABCXYZ&msg=Hello&fl=0&gwid=2 -->
                                            if (response.ErrorMessage == 'Success') {
                                                $.notify({
                            
                                                    message: 'Message Sent Successfully'
                                                }, {
                                
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
                                                $("#smsconf").modal('hide')
                            
                                                
                                            }
                                        }
                                    });
                        
                             


                    }
                }
            });


           

        }   


})

$('body').on('click', '.btn-rsms', function () {

    $("#smsconf").modal('show')

})


$(".updateBtn").click(function () {

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
        data: { 'id': id, 'uagentname': uagentname, 'uagent_id': uagent_id, 'uservicename[]': uservice_id, 'uservice_id[]': uservice_id, 'uisWhatsapp': sent_by_whatsapp, 'uisPrint': print_taken, 'upaymentmode': upaymentmode, 'uclientname': ufullname, 'ufirmname': ufirmname, 'ucontact': ucontact, 'uemail': uemail, 'uaddress': uaddress, 'utask': utaskdesc, 'uupdated_status': updated_status, 'uassigned_userid': uassigned_userid, 'uassigned_username': uassigned_user, 'utotal_amount': utotal_amount, 'udeposited_amount': udeposited_amount, 'uremaining_amount': uremaining_amount, 'usubmission_date': ulast_date },
        dataType: "json",
        success: function (response) {
            if (response.status === 1) {

                $.notify({

                    message: 'Client Successfully Updated'
                }, {

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
                $('#tblclient').DataTable().destroy();
                getClients()
                $("#updateClientModal").modal('hide');
                $("#updateClientModal").on('hidden.bs.modal', function () {
                    $("#uisWhatsapp").attr('checked', false)
                    $("#uisPrint").attr('checked', false)

                })
            }
        },
        error: function (err) {
            alert('Error Occured, Please Try After Sometime.')

        },
        failed: function (err) {
       
        }
    });


})