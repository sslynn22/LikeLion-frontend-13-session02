const obj = {
    value: 42,
    regularFunction: function () {
        console.log(this.value); // 호출한 객체인 obj를 가리킵니다
    },
    arrowFunction: function () {
        // 일반 함수로 변경
        console.log(this.value);
    }, // 화살표 함수로 작성하면 obj가 아닌 전역 객체를 가리키기 때문에 일반 함수로 수정합니다.
};

obj.regularFunction();
obj.arrowFunction();
