function requirePassword(){
    var pwPrompt = prompt("Please enter the password");
    alert(pwPrompt);
}

var editBtn = document.getElementById('edit-btn');
editBtn.addEventListener('click', requirePassword);

$(document).ready(function(){

});