### 미션1. 자바스크립트의 this

다음 코드에서 `regularFunction`과 `arrowFunction`이 있습니다.

두 함수 모두 `this`가 어떻게 작동하는지 확인하기 위해 각각 `this.value`를 출력하려고 합니다.

각 함수의 `this`가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 `this.value`를 출력할 수 있도록 코드를 수정하세요.
(주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)

```js
const obj = {
    value: 42,
    regularFunction: function () {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    },
    arrowFunction: () => {
        console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)
```

> [정답 보기](https://github.com/hbin12212/one-bite2/tree/main/day08/mission/answer/mission1/index.js)

### 미션2. 6-2. 동물 앨범 만들기-1-2

만든 동물 앨범 웹 페이지를 캡쳐해서 댓글에 올려주세요!!
