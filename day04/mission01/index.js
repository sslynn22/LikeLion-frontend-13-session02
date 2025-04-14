function add() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const result = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "숫자를 입력하세요: ";
        return;
    }
    result.textContent = num1 + num2;
}

// enter 를 누르면 add 함수 동작
document.getElementById("num2").addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        add();
    }
})