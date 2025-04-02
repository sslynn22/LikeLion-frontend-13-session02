const btn = document.querySelector("#box");

btn.addEventListener("mousedown", (e) => {
    if  (e.button === 0) {
        btn.textContent = "마우스 왼쪽 버튼!"; 
    } else if (e.button === 1) {
       btn.textContent = "마우스 휠!"; 
    } else if (e.button === 2) {
       btn.textContent = "마우스 오른쪽 버튼!"; 
    }
});

btn.addEventListener("mouseup", (e) => {
    btn.textContent = "클릭해보세요"; 
});

btn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});