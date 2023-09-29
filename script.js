function clearResult(){

    const result = document.getElementById("display");
    result.value = '';
} 


function appendNumber(value){
    const input = document.getElementById("display");
    input.value += value;

    
}

function appendOperator(operator){
    const input = document.getElementById('display');
    if (input.value === '') {
        return; 
    }
    input.value += operator;
}

function calculateResult(){
    const resultInput = document.getElementById('display');
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
} 


