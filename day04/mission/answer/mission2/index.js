function Animal(type, sound) {
    this.type = type;
    this.sound = sound;

    this.makeSound = function () {
        return `${this.type}이(가) ${this.sound} 소리를 냅니다.`;
    };
}

const dog = new Animal('개', '멍멍');
console.log(dog.makeSound());

const cat = new Animal('고양이', '야옹');
console.log(cat.makeSound());
