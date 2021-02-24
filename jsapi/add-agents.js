$(document).ready(function() {
    getAgents()
    $(".submitBtn").click(function() {

        //alert('hello')

        var fullname = $("#fullname").val();
        var contact = $("#contact").val();
      
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
                url: "./api/add-agents.php",
                data: { 'name': fullname, 'contact': contact },
                dataType: "json",
                success: function(response) {
                    if (response.status === 1) {
                        $.notify({
                            // options
                            message: 'Agent Successfully Added' 
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

                        getAgents()

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

function getAgents() {

    $.ajax({
        type: "GET",
        url: "./api/get-agents.php",
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
                html += '' + response[i].agentname + '';
                html += '</td>';
                html += '<td>';
                html += '' + response[i].contact + '';
                html += '</td>'
            
                html += '<td>';
                html += '' + response[i].status + '';
                html += '</td>';
                if (response[i].status == 'inactive') {
                    html += '<td>';
                    html += '<button class="btn btn-sm btn-act btn-success" data-id=' + response[i].id + ' title="Make User Active"><i class="fa fa-refresh"></i><button>';
                    html += '<button class="btn btn-sm btn-edit btn-warning" data-id=' + response[i].id + ' title="Edit Agent"><i class="fa fa-edit"></i><button>'
                    html += '</td>';
                } else {
                    html += '<td>';
                    html += '<button class="btn btn-sm btn-ina btn-danger" data-id=' + response[i].id + ' title="Make User Active"><i class="fa fa-trash"></i><button>';
                    html += '<button class="btn btn-sm btn-edit btn-warning" data-id=' + response[i].id + ' title="Edit Agent"><i class="fa fa-edit"></i><button>'
                    html += '</td>';
                }
                count++;

            }

            $("#agents-table").html(html)

        }
    });
}

$('body').on('click', '.btn-act', function() {
    const id = $(this).attr('data-id');
    // const retrive = $(this).attr('data-retrive');
    $.ajax({
        url: './api/delete-retrive-agent.php',
        method: 'POST',
        data: { 'id': id, 'retrive': 'retrive' },
        success: function(data) {
            if (data.status === 1) {
                getAgents()
            }
        }

    })

})
$('body').on('click', '.btn-ina', function() {
    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-retrive-agent.php',
        method: 'POST',
        data: { 'id': id },
        success: function(data) {
            if (data.status === 1) {
                getAgents()

            }
        }

    })

})


$("body").on('click', '.btn-edit', function(){
 
    const id = $(this).attr('data-id');
    
    $.ajax({
        type: "GET",
        url: "./api/get-agents-by-id.php",
        data: {'agentId': id},
        dataType: "json",
        success: function (response) {

            console.log(response)

            $("#ufullname").val(response[0].agentname)
            $("#ucontact").val(response[0].contact)
            // $("#uemail").val(response[0].email)          
            $('.updateBtn').attr('data-id', response[0].id)        
            $("#updateAgentModal").modal('show');

        }
    });
      

})

$(".updateBtn").click(function(){

    var id = $(this).attr('data-id')

    var ufullname = $("#ufullname").val()
    var ucontact = $("#ucontact").val()


    // console.log(ufullname, ucontact, uemail, upassword, uaddress)

    $.ajax({
        type: "POST",
        url: "./api/update-agents.php",
        data: {'id':id, 'ufullname':ufullname, 'ucontact':ucontact},
        dataType: "json",
        success: function (response) {
            if(response.status === 1){
                $.notify({
                    // options
                    message: 'Agent Successfully Updated' 
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
                getUsers();
                $("#updateAgentModal").modal('hide');
            }
     
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