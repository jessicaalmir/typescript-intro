
function addNumbers(a: number, b: number): number {
    return a + b;

}

const addNumbersArrow = (a: number, b: number): string =>{
    return `${ a + b }`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number= 2){
    return firstNumber * base;
}

//const result: number = addNumbers(1,2);
//
//const result2: string = addNumbersArrow(3,4);

//console.log(result, result2);

interface Character{
    name: string;
    hp: number;
    showHp:() => void;
}

const healCharacter =( character: Character, amount: number) =>{
    character.hp += amount;
}

const strider : Character = {
    name: 'Strinder',
    hp: 50,
    showHp: function (): void {
        console.log(`Life points ${this.hp}`)
    }
}

healCharacter(strider, 20);
healCharacter(strider, 50);

strider.showHp();
export {};