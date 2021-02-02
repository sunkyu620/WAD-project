/*
Code taken from: Darin
Link: "https://codepen.io/dsenneff/pen/2d338b0adf97472ebc5d473cf1fa910b"
*/

function formValidation (){
    var email = document.signin.email;
    var password = document.signin.password;
}

function showError(input, message) {
    //gets the parent div
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = message;
}
  
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    } else {
        showError(input,'Email is not invalid');
    }
}

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}

form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([email, password]);
    checkEmail(email);

});

