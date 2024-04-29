// use all keys
function appendToCalculate(num){
    const display = document.getElementById("display");
    display.value += num;
}

// Function Dl button
function deleteLastChar() {
    var display = document.getElementById("display");
    var currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}

// Ac button function
function clearDisplay(){
    display.value = "";
}

// Calculate use = button
function Calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}