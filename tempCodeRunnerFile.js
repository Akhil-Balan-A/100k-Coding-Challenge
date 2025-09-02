function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet=function(){
        console.log(`Hi, I'm ${this.name}`);
    };
};

const p1 = new Person("Akhil", 25);
p1.greet();//Hi, I'm Akhil

