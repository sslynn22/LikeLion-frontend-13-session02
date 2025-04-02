const btn = document.querySelector("#hoverBox");

btn.addEventListener("mouseenter", (e) => {
    btn.textContent = "hover 중!"; 
    btn.style.backgroundColor = 'red';
});

btn.addEventListener("mouseleave", (e) => {
    btn.textContent = "Hover me"; 
    btn.style.backgroundColor = 'gray';
});