function sumAndDouble(...numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    const doubled = numbers.map((num) => num * 2);

    return { sum, doubled };
}

console.log(sumAndDouble(1, 2, 3, 4));
// 출력: { sum: 10, doubled: [2, 4, 6, 8] }
