function validationEmail(){
    var email = document.getElementById('email')
    var error = document.getElementById('error')

    if(!email.checkValidity()){
        error.style.display = "block"
    }
}

function redefinirMsg(){
    var error = document.getElementById('error')
    if(error.style.display == "block"){
        error.style.display = "none"
    }
}

