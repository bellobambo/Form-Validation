const submit = document.getElementById('submit');


submit.addEventListener('click' ,click);

function click(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const error = document.getElementById('error');

    submit.style.background = 'rgb(133, 130, 130)'

if(username == ''){

error.style.display = 'block';
return false

}else{
    error.style.display = 'none'
}

const email = document.getElementById('email').value;
const error1 = document.getElementById('error1');

if(email == ''){
    error1.style.display = 'block';
}else{
    error1.style.display = 'none';
}


const password = document.getElementById('password').value;
const error2 = document.getElementById('error2');

if(password == ''){
    error2.style.display = 'block';
}else{
    error2.style.display = 'none'
}


const check = document.getElementById('check').value;
const error3 = document.getElementById('error3');

if(check == ''){
    error3.style.display = 'block';
    return false
}else{
    error3.style.display = 'none'
}

}