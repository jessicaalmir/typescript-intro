export class Person{

    // public name: string;
    // public address: string;

    constructor (
        public name: string, 
        private address: string = 'No Address'
        ){
    }
}

// export class Hero extends Person{
//     constructor(
//         alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName)
//     }
// }

export class Hero {
    //public person: Person;
    constructor(
        alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        //this.person = new Person(realName);
    }
}
const person: Person = new Person( 'Tony Starks', 'Miami');
const ironman = new Hero('Ironman', 45, 'Tony Starks', person);

console.log(ironman);