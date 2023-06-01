var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var passError = document.getElementById('pass');

function validateName(){
    var name = document.getElementById('conatct-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'valid'
    return true
}