$(document).ready(function(){
    $('.form-container').submit(function(e){
        e.preventDefault(); 

        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: './php/login.php',
            data: formData,
            success: function(response) {
                if (response == "Incorrect Password") {
                    alert(response);
                } else {
                    localStorage.setItem('username', response); 
                    window.location.href = "profile.html"; 
                }
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});