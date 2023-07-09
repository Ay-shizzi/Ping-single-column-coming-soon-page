const input = document.getElementById('input_field');
const errorMessage = document.getElementById('error-message');
const btn = document.getElementById('btn');
let mailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

btn.addEventListener('click', email)

function email(){
    if(input.value.match(mailValid)){
        errorMessage.style.display = 'none'
        input.style.border = '1px solid var(---Gray)'
    }else if(input.value == ''){
        errorMessage.style.display = 'block'
        input.style.border = '1px solid hsl(354, 100%, 66%)'
    }else{
        errorMessage.style.display = 'block'
        input.style.border = '1px solid hsl(354, 100%, 66%)'
    }
}