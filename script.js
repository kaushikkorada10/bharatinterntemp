let FahrenheitInput = document.getElementById("FahrenheitInput");
let FahrenheitOutput = document.getElementById("FahrenheitOutput");

let CelsiusInput = document.getElementById("CelsiusInput");
let CelsiusOutput = document.getElementById("CelsiusOutput");


let CelsiusButton = document.getElementById("CelsiusButton");
let FahrenheitButton = document.getElementById("FahrenheitButton");

CelsiusButton.onclick = function(){
    if(CelsiusInput.value !== ""){
        let result = (CelsiusInput.value * (9/5)) + 32;
        FahrenheitOutput.value = result;
    }
}

FahrenheitButton.onclick = function(){
    if(FahrenheitInput.value !== ""){
        let result = (FahrenheitInput.value - 32 )*(5/9);
        CelsiusOutput.value = result;
    }
}