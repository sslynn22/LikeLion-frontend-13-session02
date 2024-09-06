const book = {
    title: '자바스크립트 첫걸음',
    author: '김효빈',

    getSummary: function () {
        return `책 제목은 ${this.title}이고 저자는 ${this.author}입니다.`;
    },
};

console.log(book.getSummary());
