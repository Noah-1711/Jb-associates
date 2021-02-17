$(document).ready(function(e) {
    getVideos();
    
    $("#videoform").on('submit', function(e){
		e.preventDefault();
		 
    	$.ajax({
    		type: 'POST',
    		url: './api/videos.php',
    		data: new FormData(this),
    		dataType: 'json',
    		contentType: false,
    		cache: false,
    		processData:false,
    		beforeSend: function(){
    			$('.submitBtn').attr("disabled","disabled");
				$('#videoform').css("opacity",".5");
			 
    		},
            success: function(response){ //console.log(response);
            	$('.statusMsg').html('');
            	if(response.status == 1){
            		// getPhotos()
            		$('#videoform')[0].reset();
            		$('.statusMsg').html('<p class="alert alert-success">'+response.message+'</p>');
            	}else{
            		$('.statusMsg').html('<p class="alert alert-danger">'+response.message+'</p>');
            	}
            	$('#videoform').css("opacity","");
				$(".submitBtn").removeAttr("disabled");
                console.log(response)
                
                getVideos();

            },
            error: function() {
                $('#videoform').css("opacity", "");
                $(".submitBtn").removeAttr("disabled");
            }
        });
    });

    $("#file").change(function() {
    	var file = this.files[0];
    	var fileType = file.type;
    	var match = [ 'image/jpeg', 'image/png', 'image/jpg'];
    	if(!((fileType == match[0]) || (fileType == match[1]) || (fileType == match[2]) )){
    		alert('Sorry only JPG, JPEG, & PNG files are allowed to upload.');
    		$("#file").val('');
    		return false;
    	}
    });

});


$('body').on('click', '.delete', function() {
    const id = $(this).attr('data-id');
    $.ajax({
        url: './api/delete-video.php',
        method: 'POST',
        data: { 'id': id },
        success: function(data) {
            if (data.status === 1) {
                // alert('Event Deleted Successfully')
                getVideos();
            }
        }

    })

})

function getVideos(){

    $.ajax({
        type: "GET",
        url: "./api/videos-show.php",       
        dataType: "JSON",
        success: function (response) {
            var enlist='';
                     

            for(i=0; i<response.length; i++){
                enlist+="<tr>";
                enlist+="<td>"+(i+1)+"</td>";
                enlist+="<td>"+response[i].name+"</td>";
                enlist+="<td>"+response[i].description+"</td>";                
                enlist+="<td><a href='"+response[i].link+"' target='_blank'>Preview</a></td>";
                enlist+="<td><img src='"+response[i].thumbnail+"' height='75px' width='75px' /></td>";
                           
                enlist+="<td><button class='item delete' data-id='"+response[i].id+"'><i class='zmdi zmdi-delete'></i> </button></td>";
                enlist+="</tr>";
            }

            $("#videos-table").html(enlist)
 
        },
        error: function(response){
            console.log('error', response)
        }

    });
}

$(document).ready(function () {
        


  
});