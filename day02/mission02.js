function mapWithCallback(array, callback) {
    result = callback(array);
    return result;
}

function double(array) {
    let result = array.map(x=>x**2);
    return result;
}

function addTen(array) {
    let result = array.map(x=>x+10)
    return result;
}

console.log(mapWithCallback([1, 2, 3], double));
console.log(mapWithCallback([1, 2, 3], addTen));