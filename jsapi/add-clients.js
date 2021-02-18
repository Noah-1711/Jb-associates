var total;

function getUsers() { $.ajax({ type: "GET", url: "./api/get-users.php", dataType: "json", success: function(t) { count = 1; var a = '<option value="0"> Select User </option>'; for (i = 0; i < t.length; i++) "inactive" != t[i].status && (a += "<option value=" + t[i].id + ">" + t[i].username + "</option>");
            $("#assigned_user, .assigned_user").html(a) } }) }

function getClients() { $.ajax({ type: "GET", url: "./api/get-clients.php", dataType: "json", success: function(t) { count = 1; var a = ""; for (i = 0; i < t.length; i++) a += "<tr>", a += "<td>", a += "" + count, a += "</td>", a += "<td>", a += "" + t[i].clientname, a += "</td>", a += "<td>", a += "" + t[i].address, a += "</td>", a += "<td>", a += "" + t[i].firmname, a += "</td>", a += "<td>", a += "" + t[i].contact, a += "</td>", a += "<td>", a += "" + t[i].email, a += "</td>", a += "<td>", a += "" + t[i].task, a += "</td>", a += "<td>", a += "" + t[i].assigned_username, a += "</td>", a += "<td>", a += "" + t[i].status, a += "</td>", a += "<td>", a += "" + t[i].total_amount, a += "</td>", a += "<td>", a += "" + t[i].deposited_amount, a += "</td>", a += "<td>", a += "" + t[i].remaining_amount, a += "</td>", a += "<td>", a += "" + t[i].submission_date, a += "</td>", a += "<td>", a += "" + t[i].registered_date, a += "</td>", a += "<td>", a += '<button class="btn btn-sm btn-update btn-warning" title="update task" data-id=' + t[i].id + '><i class="fa fa-edit"></i><button>', a += "</td>", count++;
            $("#clients-table").html(a) } }) }
$(document).ready(function() { $(".datepicker").datepicker({ autoclose: !0, format: "dd/mm/yyyy" }), getClients(), $(".submitBtn").click(function() { $("#fullnameError").html(""), $("#firmnameError").html(""), $("#contactError").html(""), $("#emailError").html(""), $("#addressError").html(""), $("#remarksError").html(""), $("#assignedError").html(""), $("#totalError").html(""), $("#depositedError").html(""), $("#lastdateError").html(""); var t = $("#fullname").val(),
            a = $("#firmname").val(),
            e = $("#contact").val(),
            n = $("#email").val(),
            s = $("#address").val(),
            r = $("#taskdesc").val(),
            u = $("#assigned_user").val(),
            l = $("#assigned_user option").html(),
            o = $("#totamount").val(),
            i = $("#depamount").val(),
            d = $("#remamount").val(),
            m = $("#subdate").val();
        t || (!1, $("#fullnameError").html("please enter fullname")), "" == a && (!1, $("#firmnameError").html("please enter firmname")), "" == e && (!1, $("#contactError").html("please enter contact number")), "" == n && (!1, $("#emailError").html("please enter email")), "" == s && (!1, $("#addressError").html("please enter address")), "" == r && (!1, $("#remarksError").html("please enter remarks")), 0 == u && (!1, $("#assignedError").html("please select")), "" == o && (!1, $("#totalError").html("please enter total amount")), "" == i && (!1, $("#depositedError").html("please enter deposited amount")), "" == m && (!1, $("#lastdateError").html("please enter dater ")), !0 && $.ajax({ type: "POST", url: "./api/add-client.php", data: { clientname: t, firmname: a, contact: e, email: n, address: s, task: r, assigned_userid: u, assigned_username: l, total_amount: o, deposited_amount: i, remaining_amount: d, submission_date: m }, dataType: "json", success: function(t) { 1 === t.status && (alert("Client Successfully Added"), getClients()) } }) }), getUsers() }), $("#totamount").keyup(function() {
    (total = parseInt($("#totamount").val())) ? $("#depamount").removeAttr("readonly"): $("#depamount").attr("readonly", !0) }), $("#depamount").keyup(function() { console.log(total); var t = parseInt($(this).val()),
        a = total - t;
    $("#remamount").val(a) }), $("body").on("click", ".btn-update", function() { var t = $(this).attr("data-id");
    $(".updateBtn").attr("data-id", t), $.ajax({ type: "GET", url: "./api/get-clients-by-id.php", data: { clientid: t }, dataType: "json", success: function(t) { console.log(t), $("#ufullname").val(t[0].clientname), $("#ufirmname").val(t[0].firmname), $("#ucontact").val(t[0].contact), $("#uemail").val(t[0].email), $("#uaddress").val(t[0].address), $("#utaskdesc").val(t[0].task), $("#uassigned_user").val(t[0].id), $("#current_status").val(t[0].status), $("#utotamount").val(t[0].total_amount), $("#udepamount").val(t[0].deposited_amount), $("#uremamount").val(t[0].remaining_amount), $("#usubdate").val(t[0].submission_date); var a = parseInt($("#utotamount").val());
            $("#utotamount").keyup(function() { a = parseInt($("#utotamount").val()), iudepamount = parseInt($("#udepamount").val()), newRemaining = a - iudepamount, console.log(newRemaining), $("#uremamount").val(newRemaining) }), $("#udepamount").keyup(function() { console.log(a); var t = parseInt($(this).val()),
                    e = a - t;
                $("#uremamount").val(e) }), $("#updateClientModal").modal("show") } }) }), $(".updateBtn").click(function() { id = $(this).attr("data-id"); var t = $("#ufullname").val(),
        a = $("#ufirmname").val(),
        e = $("#ucontact").val(),
        n = $("#uemail").val(),
        s = $("#uaddress").val(),
        r = $("#utaskdesc").val(),
        u = $("#uassigned_user").val(),
        l = $("#uassigned_user option:selected").html(),
        o = $("#utotamount").val(),
        i = $("#udepamount").val(),
        d = $("#uremamount").val(),
        m = $("#usubdate").val(),
        c = $("#current_status").val();
    $.ajax({ type: "POST", url: "./api/update-client.php", data: { id: id, uclientname: t, ufirmname: a, ucontact: e, uemail: n, uaddress: s, utask: r, uupdated_status: c, uassigned_userid: u, uassigned_username: l, utotal_amount: o, udeposited_amount: i, uremaining_amount: d, usubmission_date: m }, dataType: "json", success: function(t) { 1 === t.status && (alert("Client Successfully Updated"), getClients(), $("#updateClientModal").modal("hide")) }, error: function(t) { alert("Error Occured, Please Try After Sometime.") } }) });