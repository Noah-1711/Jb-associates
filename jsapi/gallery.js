

$(document).ready(function(e) {
    getImages();
    
    $("#galleryform").on('submit', function(e){
		e.preventDefault();
		 
    	$.ajax({
    		type: 'POST',
    		url: './api/gallery.php',
    		data: new FormData(this),
    		dataType: 'json',
    		contentType: false,
    		cache: false,
    		processData:false,
    		beforeSend: function(){
    			$('.submitBtn').attr("disabled","disabled");
				$('#galleryform').css("opacity",".5");
			 
    		},
            success: function(response){ //console.log(response);
            	$('.statusMsg').html('');
            	if(response.status == 1){
            		// getPhotos()
            		$('#galleryform')[0].reset();
            		$('.statusMsg').html('<p class="alert alert-success">'+response.message+'</p>');
            	}else{
            		$('.statusMsg').html('<p class="alert alert-danger">'+response.message+'</p>');
            	}
            	$('#galleryform').css("opacity","");
				$(".submitBtn").removeAttr("disabled");
                console.log(response)
                
                getImages();

            },
            error: function() {
                $('#galleryform').css("opacity", "");
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
        url: './api/delete-gallery-photo.php',
        method: 'POST',
        data: { 'id': id },
        success: function(data) {
            if (data.status === 1) {
                // alert('Event Deleted Successfully')
                getImages();
            }
        }

    })

})



function getImages(){
    
    $.ajax({
        type: "GET",
        url: "./api/gallery-show.php",       
        dataType: "JSON",
        success: function (response) {
            var gallist='';
           
            console.log('seccess', response)

            for(i=0; i<response.length; i++){
                gallist+="<tr>";
                gallist+="<td>"+(i+1)+"</td>"
                gallist+="<td>"+response[i].image_name+"</td>";
                gallist+="<td>"+response[i].image_desc+"</td>";               
                gallist+="<td><img src='uploads/"+response[i].image_path+"' style='height:100px !important' width='100px'></td>";
                gallist+="<td><button class='item delete' data-id='"+response[i].id+"'><i class='zmdi zmdi-delete'></i> </button></td>";
                gallist+="</tr>"
            }

            $("#gallery-table").html(gallist)
 
        },
        error: function(response){
            console.log('error', response)
        }

    });
}