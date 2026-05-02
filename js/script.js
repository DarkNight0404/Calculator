const display = document.querySelector(".display");
const buttonsWrap = document.querySelector(".buttons");



let total = 0;
let operatorChosen = false;
let reset = false;
let operator;
let previous = 0;

buttonsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest("button.box");
    if (!btn) return;

    const value = btn.textContent;

    if (value === "+" || value === "-" || value === "/" || value === "*") {
        operatorChosen = true;
        reset = false;
        operator = value;
        previous = Number(display.textContent);
    } else if (value === "ce") {
        display.textContent = "0";
    } else if (value === "=") {
        switch(operator) {
            case "+":
                display.textContent = previous += Number(display.textContent); 
                break;
            case "-":
                display.textContent = previous -= Number(display.textContent); 
                break;
            case "/":
                display.textContent = previous /= Number(display.textContent); 
                break;
            case "*":
                display.textContent = previous *= Number(display.textContent); 
                break;   
        }
    } else {
        if (operatorChosen && !reset) {
            reset = true;
            display.textContent = value;
        } else {
            if (display.textContent === "0") {
                display.textContent = value;

            } else {
                display.textContent += value;
            }
        }
    }

});