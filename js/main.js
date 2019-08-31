function requirePassword(){
    var pwPrompt = prompt("Please enter the password");
    alert(pwPrompt);
}

// $("#edit-btn").addEventListener('click', requirePassword);

/*var editBtn = document.getElementById('edit-btn');
editBtn.addEventListener('click', requirePassword);*/


$(document).ready(function(){
    // $("#edit-btn").addEventListener('click', requirePassword);
    $("#edit-btn").on('click', requirePassword);
});