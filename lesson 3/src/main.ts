interface person { 
    name: string; 
    age: number;
} 
function greet(person: person) {
    return `Hello ${person.name}`;
}

console.log(greet);