$(document).ready(function() {

    getServices()
    $(".submitBtn").click(function() {
        $('#servicenameError').html('');
        $('#descriptionError').html('');

        //alert('hello')

        var servicename = $("#servicename").val();
        var description = $("#description").val();
        var flag = true


        if (flag == true) {
            $.ajax({
                type: "POST",
                url: "./api/add-services.php",
                data: { 'servicename': servicename, 'description': description },
                dataType: "json",
                success: function(response) {
                    if (response.status === 1) {
                        $.notify({
                            // options
                            message: 'Service Successfully Added'
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
                        getServices()

                    }
                }

            });

        }




    })



})

function getServices() {

    $.ajax({
        type: "GET",
        url: "./api/get-services.php",
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
                html += '' + response[i].services + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].description + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].status + '';
                html += '</td>';
                if (response[i].status == 'inactive') {
                    html += '<td>';
                    html += '<button class="btn btn-sm btn-act btn-success" data-id=' + response[i].id + ' title="Make service Active"><i class="fa fa-refresh"></i><button>';
                    html += '<button class="btn btn-sm btn-edit btn-warning" data-id=' + response[i].id + ' title="Edit service"><i class="fa fa-edit"></i><button>'
                    html += '</td>';
                } else {
                    html += '<td>';
                    html += '<button class="btn btn-sm btn-ina btn-danger" data-id=' + response[i].id + ' title="Make service Active"><i class="fa fa-trash"></i><button>';
                    html += '<button class="btn btn-sm btn-edit btn-warning" data-id=' + response[i].id + ' title="Edit service"><i class="fa fa-edit"></i><button>'
                    html += '</td>';
                }
                count++;

            }
            $('#tblservice').DataTable().destroy();
            $("#services-table").html(html)
            $('#tblservice').DataTable({
                "destroy": true,         
                "ordering": false
            });
            

        }
    });
}

$('body').on('click', '.btn-act', function() {
    // $('#tblservice').DataTable().destroy();
    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-retrive-service.php',
        method: 'POST',
        data: { 'id': id, 'retrive': 'retrive' },
        success: function(data) {
            if (data.status === 1) {
              
              
                getServices()
            }
        }

    })

})
$('body').on('click', '.btn-ina', function() {
    // $('#tblservice').DataTable().destroy();

    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-retrive-service.php',
        method: 'POST',
        data: { 'id': id },
        success: function(data) {
            if (data.status === 1) {
                getServices()
           
            

            }
        }

    })

})


$("body").on('click', '.btn-edit', function() {

    const id = $(this).attr('data-id');

    $.ajax({
        type: "GET",
        url: "./api/get-service-by-id.php",
        data: { 'userid': id },
        dataType: "json",
        success: function(response) {
            console.log(response)

            $("#uservicename").val(response[0].services)
            $("#udescription").val(response[0].description)
            $('.updateBtn').attr('data-id', response[0].id)
            $("#updateServiceModal").modal('show');
        }
    });


})

$(".updateBtn").click(function() {

    var id = $(this).attr('data-id')

    var uservicename = $("#uservicename").val()
    var udescription = $("#udescription").val()

    $.ajax({
        type: "POST",
        url: "./api/update-service.php",
        data: { 'id': id, 'uservicename': uservicename, 'udescription': udescription },
        dataType: "json",
        success: function(response) {
            $.notify({
                // options
                message: 'Service Successfully Updated'
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
            $("#updateServiceModal").modal('hide');

            getServices();
            
        }
    });
})