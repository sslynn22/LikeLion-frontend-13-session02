// 미션3. 콜백 함수로 메서지 포맷 바꾸기
// 조건: 콜백 함수와 대문자로 바꾸는 메서드를 사용

function formatName(string, callback) {
    return callback(string);
}

let upperCase = x => x.toUpperCase();
let greeting = x => x.toLowerCase(); 

console.log(formatName("seoin", upperCase));
console.log(formatName("SEOIN", greeting));