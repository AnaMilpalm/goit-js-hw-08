const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function  handleValue(event) {
 if(!input || input ===""){
    output.textContent = "Anonymous!"
 } else {
    output.textContent = event.currentTarget.value.trim();
 }
}


input.addEventListener('input', handleValue);
    


