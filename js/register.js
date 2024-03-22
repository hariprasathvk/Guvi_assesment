$(document).ready(function() {

    $('.form-container').submit(function(e) {
        e.preventDefault(); 

        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: './php/register.php',
            data: formData,
            success: function(response) {
                alert(response); 
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});