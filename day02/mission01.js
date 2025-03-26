// 미션1. 배열 [1, 2, 3, 4, 5]의 각각의 숫자를 제곱한 새로운 배열을 만들어서 출력
// 조건: 화살표 함수와 map() 메서드를 사용

let array = [1,2,3,4,5];
let doubleArray = array.map(x=> x**2);
console.log(doubleArray);