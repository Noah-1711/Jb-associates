$(document).ready(function() {
    getUsers()
    $(".submitBtn").click(function() {

            //alert('hello')

            var fullname = $("#fullname").val();
            var contact = $("#contact").val();
            var email = $("#email").val();
            var address = $("#address").val();
            var password = $("#password").val()


            if (fullname == "") {
                flag = false;
                $('#fullname').html('please enter fullname');
            }
            if (contact == "") {
                flag = false;
                $('#contact').html('please enter contact number');
            }


            if (email == "") {
                flag = false;
                $('#email').html('please enter email');
            }


            if (address == "") {
                flag = false;
                $('#address').html('please enter address');
            }
            if (password == "") {
                flag = false;
                $('#password').html('please enter password');
            }
            if (flag = true) {

                $.ajax({
                        type: "POST",
                        url: "./api/add-user.php",
                        data: { 'name': fullname, 'contact': contact, 'email': email, 'address': address, 'password': password },
                        dataType: "json",
                        success: function(response) {
                            if (response.status === 1) {
                                alert('User Successfully Added')
                                getUsers()

                            }
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
                html += '' + response[i].username + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].contact + '';
                html += '</td>'
                    // html+='<td>';
                    // html+=''+response[i].password+'';
                    // html+='</td>'
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

        }
    });
}

$('body').on('click', '.btn-act', function() {
    const id = $(this).attr('data-id');
    // const retrive = $(this).attr('data-retrive');
    $.ajax({
        url: './api/delete-retrive-user.php',
        method: 'POST',
        data: { 'id': id, 'retrive': 'retrive' },
        success: function(data) {
            if (data.status === 1) {
                getUsers()
            }
        }

    })

}) $('body').on('click', '.btn-ina', function() {
    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-retrive-user.php',
        method: 'POST',
        data: { 'id': id },
        success: function(data) {
            if (data.status === 1) {
                getUsers()

            }
        }

    })

})

// {
// 	"senderId": "SMSINI",
// 	"message": "8275325686:hello",
// 	"message_language_type": "english",
// 	"which_route": "p",
// 	"contacts": "1",
// 	"is_schedule": "y",
// 	"schedule_type": "one_time",
// 	"schedule_time": "1613499420"
// }"schedule_type": "one_time",
// 	"schedule_time": "1613499420"
// }"schedule_type": "one_time",
// 	"schedule_time": "1613499420"
// }