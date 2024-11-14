//ejrcicio9 desestructuracion anidada

const person = {
    name: 'Angel',
    address: {
        street: '4ta calle',
        city: 'Guatemala',
        zip: '12345',
    }
}
const { name, address: { street, city, zip } } = person;
console.log(name, street, city, zip); 