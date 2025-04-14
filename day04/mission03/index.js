const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.onclick = function () {
        const value = button.textContent;

        if (value === "=") {
            let expression = display.value;

            while (expression.includes("×")) {
                expression = expression.replace("×", "*");
            }

            while (expression.includes("÷")) {
                expression = expression.replace("÷", "/");
            } 
            display.value = eval(expression);
            
        } else if (value === "Clear") {
            display.value = "";
        } else {
            display.value += value;
        }
    };
});