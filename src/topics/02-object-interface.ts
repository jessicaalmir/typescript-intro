const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character{
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 1000,
    skills: ['Bash', 'Counter'],
    homeTown: 'New York'
}

console.table(strider);

export {};