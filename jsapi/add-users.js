$(document).ready(function() {
    getUsers()
    $(".submitBtn").click(function() {
        $('#fullnameError').html('');
        $('#contactError').html('');
        $('#emailError').html('');
        $('#addressEror').html('');
        $('#passwordError').html('');


        var fullname = $("#fullname").val();
        var contact = $("#contact").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var password = $("#password").val();
        var flag = true;

        if (!fullname) {
            flag = false;
            $('#fullnameError').html('please enter fullname');
        }
        if (contact == "") {
            flag = false;
            $('#contactError').html('please enter contact number');
        }

        if (flag == true) {
            $.ajax({
                type: "POST",
                url: "./api/add-user.php",
                data: { 'name': fullname, 'contact': contact, 'email': email, 'address': address, 'password': password },
                dataType: "json",
                success: function(response) {
                    if (response.status === 1) {
                        $.notify({
                            // options
                            message: 'New user created'
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
                        getUsers()

                    }
                    if (response.status === 3) {
                        $.notify({
                            // options
                            message: 'User already exists!'
                        }, {
                            // settings
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
                }

            });

        }




    })



})

function getUsers() {

    $.ajax({
        type: "GET",
        url: "./api/get-users.php",
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
                html += '' + response[i].username + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].contact + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].role + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].email + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].address + '';
                html += '</td>'
                html += '<td>';
                html += '' + response[i].status + '';
                html += '</td>';
                if (response[i].status == 'inactive') {
                    html += '<td>';
                    html += '<button class="btn btn-sm btn-act btn-success" data-id=' + response[i].id + ' title="Make User Active"><i class="fa fa-refresh"></i><button>';
                    html += '<button class="btn btn-sm btn-edit btn-warning" data-id=' + response[i].id + ' title="Edit User"><i class="fa fa-edit"></i><button>'
                    html += '</td>';
                } else {
                    html += '<td>';
                    html += '<button class="btn btn-sm btn-ina btn-danger" data-id=' + response[i].id + ' title="Make User Active"><i class="fa fa-trash"></i><button>';
                    html += '<button class="btn btn-sm btn-edit btn-warning" data-id=' + response[i].id + ' title="Edit User"><i class="fa fa-edit"></i><button>'
                    html += '</td>';
                }
                count++;

            }

            $("#users-table").html(html)
            $('#tbluser').dataTable({
                // "destroy": true,     
                "ordering": false
            });

        }
    });
}

$('body').on('click', '.btn-act', function() {
    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-retrive-user.php',
        method: 'POST',
        data: { 'id': id, 'retrive': 'retrive' },
        success: function(data) {
            if (data.status === 1) {
                $('#tbluser').DataTable().destroy();

                getUsers()
            }
        }

    })

})
$('body').on('click', '.btn-ina', function() {
    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-retrive-user.php',
        method: 'POST',
        data: { 'id': id },
        success: function(data) {
            if (data.status === 1) {
                $('#tbluser').DataTable().destroy();

                getUsers()

            }
        }

    })

})


$("body").on('click', '.btn-edit', function() {

    const id = $(this).attr('data-id');

    $.ajax({
        type: "GET",
        url: "./api/get-user-by-id.php",
        data: { 'userid': id },
        dataType: "json",
        success: function(response) {
            console.log(response)

            $("#ufullname").val(response[0].username)
            $("#ucontact").val(response[0].contact)
            $("#uemail").val(response[0].email)
            $("#upassword").val(response[0].password)
            $("#uaddress").val(response[0].address)
            $('.updateBtn').attr('data-id', response[0].id)
            $("#updateUserModal").modal('show');
        }
    });


})

$(".updateBtn").click(function() {

    var id = $(this).attr('data-id')

    var ufullname = $("#ufullname").val()
    var ucontact = $("#ucontact").val()
    var uemail = $("#uemail").val()
    var upassword = $("#upassword").val()
    var uaddress = $("#uaddress").val()
    $.ajax({
        type: "POST",
        url: "./api/update-users.php",
        data: { 'id': id, 'ufullname': ufullname, 'ucontact': ucontact, 'uemail': uemail, 'upassword': upassword, 'uaddress': uaddress },
        dataType: "json",
        success: function(response) {
            // alert('User Updated')
            $('#tbluser').DataTable().destroy();
            getUsers();
            $("#updateUserModal").modal('hide');
        }
    });
})