const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');

const error = document.getElementById('error');
const errorEmail = document.getElementById('errorEmail');
const errorUsername = document.getElementById('errorUsername');
const errorPassword = document.getElementById('errorPassword');
const errorPassword2 = document.getElementById('errorPassword2');
const errorPassword3 = document.getElementById('errorPassword3');
const errorPasswordVerify = document.getElementById('errorPasswordVerify');

var input = document.getElementsByTagName('input');

//makes sign up input boxes turn grey when highlighted
$('input').focus(function(){
    $(this).css('background', '#bdb8d7');
});
$('input').blur(function(){
    $(this).css('background', 'white');
});



form.addEventListener('submit', (e) =>{
    
    //array to hold error messages
    let messages = [];

    //if username field is empty form cannot be submitted
    if (username.value.trim() === '' || username.value === null || username.length < 0)
    {
        e.preventDefault();
        messages[0] = "Username is required";
        errorUsername.innerText = messages[0];
    }

     if (username.value.trim() !== '' && username.value !== null)
    {
        messages[0] = " ";
        errorUsername.innerText = messages[0];
    }

  

    //if password does not contain at least one uppercase then form cannot be submitted
    if(password.value.search(/[A-Z]/) == -1 || password.length < 0)
    {
        e.preventDefault();
        messages[1] = "must contain at least one uppercase";
        errorPassword.innerText = messages[1];
    }
    if(password.value.search(/[A-Z]/) !== -1 || password.length < 0)
    {
        
        messages[1] = " ";
        errorPassword.innerText = messages[1];
    }

    



    //if password does not contain at least one number then form cannot be submitted 
    if(password.value.search(/[0-9]/) == -1 || password.length < 0){
        e.preventDefault();
        messages[2] = "must contain at least one number";
        errorPassword2.innerText = messages[2];
    }
    if(password.value.search(/[0-9]/) !== -1){
        messages[2] = " ";
        errorPassword2.innerText = messages[2];
    }



    //if password is not between 8 and 20 characters then form cannot be submitted
    if(password.value.length < 8 || password.value.length > 20 || password.length < 0){
        e.preventDefault();
        messages[3] = "must be 8 to 20 characters";
        errorPassword3.innerText =messages[3];
    }
    if(password.value.length > 7 && password.value.length < 21){
        
        messages[3] = " ";
        errorPassword3.innerText =messages[3];
    }
    

    //if the password and verify password field are not the same then form cannot be submitted
    if(password.value !== password2.value || password2.length < 0) {
        e.preventDefault();
        messages[4] = 'Passwords do not match';
        errorPasswordVerify.innerText = messages[4];
    }
    if(password.value == password2.value) {
        
        messages[4] = ' ';
        errorPasswordVerify.innerText = messages[4];
    }

    

   

    

});