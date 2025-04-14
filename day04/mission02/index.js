const output = document.getElementById("result");
const operations = document.querySelectorAll("button");

for (let button of operations) {
    button.onclick = function () {
        const num1 = Number(document.getElementById("num1").value);
        const num2 = Number(document.getElementById("num2").value);

        if (!isFinite(num1) || !isFinite(num2)) {
            output.textContent = "숫자를 입력하세요: ";
            return;
        }

        switch (this.innerText) {
            case "+":
                output.textContent = num1 + num2;
                break;
            case "−":
                output.textContent = num1 - num2;
                break;
            case "×":
                output.textContent = num1 * num2;
                break;
            case "÷":
                output.textContent = num1 / num2;
                break;
            default:
                output.textContent = "지원하지 않는 연산자입니다.";
        }
    };
}