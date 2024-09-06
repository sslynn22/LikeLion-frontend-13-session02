### 미션1. 생성자 함수

아래와 같은 fakeApiCall 함수가 있습니다. 이 함수는 2초 후에 사용자 정보를 반환합니다.

async와 await를 사용하여 이 API 호출을 기다리고, 사용자 이름을 콘솔에 출력하는 fetchUserData 함수를 작성하세요.

```js
function fakeApiCall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'John Doe', age: 30 });
        }, 2000);
    });
}

// fetchUserData 함수 완성

fetchUserData();
```

> [정답 보기](https://github.com/hbin12212/one-bite2/tree/main/day06/mission/answer/mission1/index.js)
