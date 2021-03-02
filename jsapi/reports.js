$(document).ready(function () {
    $('.datepicker').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy'

    })
    // getClientReport();



});


// function getClients() {

$("#date-button").click(function () {
    $('#fromdateError').html('');
    $('#todateError').html('');
    // $("#report-table").html('')

    // $('#filterstatus').html('')
    var fromdate = $('#fromdate').val();
    var todate = $('#todate').val();
    var filter = $('#filterstatus').val();
    var amount = $('#amount').val();
    if(fromdate == '' || todate == ''){
        
        $.notify({

            message: 'Please Select Both Dates!'
        }, {

            type: 'danger',
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            placement: {
                from: "top",
                align: "center"
            },
        });
    }
    if(filter==0 && amount==0){
      
        $.notify({

            message: 'Please Select Any Filter'
        }, {

            type: 'danger',
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            placement: {
                from: "top",
                align: "center"
            },
        });
    }

    if (amount != 0 && filter == 0) {
        
        $.ajax({
            type: "POST",
            url: "./api/client-amount-reports.php",
            data: {
                'main_amount': 'main_amount ',
                'from': fromdate,
                'to': todate,                
                'amount': amount
            },
            dataType: "json",
            success: function (response) {
                $("#doc-status").html("All clients");
                $("#fdate").html(fromdate);
                $("#tdate").html(todate);
                $("#amt").html(response.total)
                $("#amt_type").html(response.type)
                $("#stats-modal").modal('show');
                $("#stats-modal").on('hidden.bs.modal', function(){
                    $('#fromdate').val('');
                    $('#todate').val('');
                    $('#filterstatus').val(0);
                    $('#amount').val(0);
                })

            },
            error: function (err) {
                // alert(response);
                console.log(err);
            }

        });
    }
    if (amount == 0 && filter != 0) {
        
        $.ajax({
            type: "POST",
            url: "./api/client-status-report.php",
            data: { 'from': fromdate, 'to': todate, 'filter': filter },
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

                    count++;

                }

                $("#report-table").html(html)


            },
            error: function (err) {

            }
        });

    }
    if (filter != 0 && amount != 0) {
 

        $.ajax({
            type: "POST",
            url: "./api/client-status-amount-reports.php",
            data: {
                'main_amount': 'main_amount ',
                'from': fromdate,
                'to': todate,
                'filter': filter,
                'amount': amount
            },
            dataType: "json",
            success: function (response) {
                $("#doc-status").html(filter);
                $("#fdate").html(fromdate);
                $("#tdate").html(todate);
                $("#amt").html(response.total)
                $("#amt_type").html(response.type)
                $("#stats-modal").modal('show');
                $("#stats-modal").on('hidden.bs.modal', function(){
                    $('#fromdate').val('');
                    $('#todate').val('');
                    $('#filterstatus').val(0);
                    $('#amount').val(0);
                })

            },
            error: function (err) {
                // alert(response);
                console.log(err);
            }

        });


    }


    // var flag = true


    // if (flag ==true) {

    //     $.ajax({
    //         type: "POST",
    //         url: "./api/client-reports.php",
    //         data: { 'from': fromdate, 'to': todate, 'filter': filter },
    //         dataType: "json",

    //         success: function(response) {
    //             count = 1;
    //             var html = '';
    //             for (i = 0; i < response.length; i++) {
    //                 html += '<tr>';
    //                 html += '<td>';
    //                 html += '' + count + '';
    //                 html += '</td>';
    //                 html += '<td>';
    //                 html += '' + response[i].clientname + '';
    //                 html += '</td>';
    //                 html += '<td>';
    //                 html += '' + response[i].address + '';
    //                 html += '</td>'
    //                 html += '<td>';
    //                 html += '' + response[i].firmname + '';
    //                 html += '</td>'
    //                 html += '<td>';
    //                 html += '' + response[i].contact + '';
    //                 html += '</td>'
    //                 html += '<td>';
    //                 html += '' + response[i].email + '';
    //                 html += '</td>'
    //                 html += '<td>';
    //                 html += '' + response[i].task + '';
    //                 html += '</td>'
    //                 html += '<td>';
    //                 html += '' + response[i].assigned_username + '';
    //                 html += '</td>';
    //                 html += '<td>';
    //                 html += '' + response[i].status + '';
    //                 html += '</td>';
    //                 html += '<td>';
    //                 html += '' + response[i].total_amount + '';
    //                 html += '</td>';
    //                 html += '<td>';
    //                 html += '' + response[i].deposited_amount + '';
    //                 html += '</td>';
    //                 html += '<td>';
    //                 html += '' + response[i].remaining_amount + '';
    //                 html += '</td>';
    //                 html += '<td>';
    //                 html += '' + response[i].submission_date + '';
    //                 html += '</td>';
    //                 html += '<td>';
    //                 html += '' + response[i].registered_date + '';
    //                 html += '</td>';

    //                 count++;

    //             }
    //             console.log(response)
    //             $("#report-table").html(html)
    //             gettotalReport(fromdate, todate, filter, amount);

    //         },
    //         error: function(err) {
    //             console.log(err);
    //         }

    //     })
    // }

})
    // }





// function gettotalReport(fromdate, todate, filter, amount) {

//     $.ajax({
//         type: "POST",
//         url: "./api/client-reports.php",
//         data: {
//             'main_amount': 'main_amount ',
//             'from': fromdate,
//             'to': todate,
//             'filter': filter,
//             'amount': amount
//         },
//         dataType: "json",
//         success: function(response) {
//             var total = response.total;
//            alert(response);
//             $("#amountamt").html(total);

//         },
//         error: function(response) {
//             alert(response);
//            console.log(response);
//         }

//     });


// }