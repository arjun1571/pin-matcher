function getPin(){
    const pin = genaratePin();
    const pinString = pin + '';
    if(pinString.length==4){
        return pin;
    }
    else{
        return getPin();
    }
}

function genaratePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById("genarate-btn").addEventListener("click",function(){
    const pin = getPin();
    const displayPin = document.getElementById("input-pin");
    displayPin.value=pin;
     
 })

 document.getElementById("calculator").addEventListener("click",function(event){
    const Number = event.target.innerText;
    const numberValue = document.getElementById("input-number");
    const previousValue = numberValue.value;
    if(isNaN(Number)){
        if(Number=="C"){
            numberValue.value= "";
        }
        else if(Number=="<"){
            const digit = previousValue.split('');
            digit.pop();
            const remaningDigit = digit.join("");
            numberValue.value=remaningDigit;

        }

    }
    else{
        
        
        const newValue = previousValue + Number;
        numberValue.value = newValue;
    }
 })