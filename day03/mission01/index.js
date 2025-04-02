// click 이벤트를 사용해 버튼을 누르면 배경색이 바뀌도록 하기

// 버튼ID 를 들고옴
const btn = document.querySelector("#colorBtn");

// 이벤트 핸들링(Event Handling)
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';
})

// onclick = function(event) { // 이벤트 핸들러(Event Handler)
// 	event.target.style.backgroundColor = 'red';
//     if (event.target.style.backgroundColor = 'red') {
//         event.target.style.backgroundColor = 'white';
//     }
// };