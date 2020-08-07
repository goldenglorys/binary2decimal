function verifyInput(params) {
    let rule = /^[01]+$/g;
    let result = rule.test(params)
    if(!result){
        warning.innerHTML = 'Enter either 0 or 1';
        document.getElementsByTagName('button')[0].setAttribute('disabled', true);
    }
    else{
        warning.innerHTML = ''
        document.getElementsByTagName('button')[0].removeAttribute('disabled');
    }
}

function convert() {
    let binary = binaryvalue.value;
    let binaryLength = binary.length;
    let binaryToArray = binary.split('');
    let ouutputDecimal = 0;
    binaryToArray.forEach(element => {
        binaryLength = binaryLength - 1
        ouutputDecimal += (element * Math.pow(2, binaryLength));
    });
    display.innerHTML = ouutputDecimal
}
