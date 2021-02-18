$(document).ready(function() {
    getUsers()
    $(".submitBtn").click(function() {

        //alert('hello')

        var fullname = $("#fullname").val();
        var contact = $("#contact").val();
        var email = $("#email").val();
        var address = $("#address").val();
        var password = $("#password").val();
        var flag = false;

        if (!fullname) {
            flag = false;
            $('#fullnameError').html('please enter fullname');
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
        if (password == "") {
            flag = false;
            $('#passwordError').html('please enter password');
        }
        if (flag == true) {

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

            });

        }




    })


    // $(document).ready(function () {
    //     // http://cloud.smsindiahub.in/vendorsms/pushsms.aspx?user=abc&password=xyz&msisdn=919898xxxxxx&sid=SenderId&msg=test%20message&fl=0&gwid=2
    //     $.ajax({
    //         type: "POST",
    //         url: "http://cloud.smsindiahub.in/vendorsms/pushsms.aspx",
    //         crossDomain: true,
    //         data: {'user':'Aditya Bhalerao', 'password':'aditya1646', 'mssidn':'9422461646', 'msg':'hi aditya','fl':0, 'gwid':2},
    //         dataType: "json",
    //         success: function (response) {
    //             console.log(response)
    //         }
    //     });

    // });

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

})
$('body').on('click', '.btn-ina', function() {
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


$("body").on('click', '.btn-edit', function(){
 
    const id = $(this).attr('data-id');
    
    $.ajax({
        type: "GET",
        url: "./api/get-user-by-id.php",
        data: {'userid': id},
        dataType: "json",
        success: function (response) {
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

$(".updateBtn").click(function(){

    var id = $(this).attr('data-id')

    var ufullname = $("#ufullname").val()
    var ucontact = $("#ucontact").val()
    var uemail = $("#uemail").val()
    var upassword = $("#upassword").val()
    var uaddress = $("#uaddress").val()

    // console.log(ufullname, ucontact, uemail, upassword, uaddress)

    $.ajax({
        type: "POST",
        url: "./api/update-users.php",
        data: {'id':id, 'ufullname':ufullname, 'ucontact':ucontact, 'uemail': uemail, 'upassword':upassword, 'uaddress':uaddress},
        dataType: "json",
        success: function (response) {
            alert('User Updated')
            getUsers();
            $("#updateUserModal").modal('hide');
        }
    });
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