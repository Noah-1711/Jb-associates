$(document).ready(function() {
    $('.datepicker').datepicker({
            autoclose: true,
            format: 'dd/mm/yyyy'
        })
        // getClientReport();

    getClients();

});


function getClients() {

    $("#date-button").click(function() {
        $('#fromdateError').html('');
        $('#todateError').html('');
        $('#filterstatus').html('')
        var fromdate = $('#fromdate').val();
        var todate = $('#todate').val();
        // var filter = $('#filterstatus').val();


        var flag = true


        if (flag = true) {

            $.ajax({
                type: "POST",
                url: "./api/get-clients.php",
                data: {
                    'from': fromdate,
                    'to': todate


                },
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

                        count++;

                    }
                    console.log(response)
                    $("#report-table").html(html)


                },
                error: function(err) {
                    console.log(err);
                }





            })
        };

    })
}



function getClientReport() {




    $.ajax({
        type: "GET",
        url: "./api/get-clients.php",
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

                count++;

            }

            $("#report-table").html(html)


        }


    });
}