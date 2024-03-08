
let number1 = 5;
let number2 = 10;

if (number1 > number2) {
    console.log("5<10");
} else if (number1 < number2) {
    console.log("10>5");
} else {
    console.log("5=5");
}   



function planeta(text) {
     const length = text.length;

     const stars = '*'.repeat(length + 4);
     console.log(stars);

     console.log(`* ${text} *`);

     console.log(stars);
}
const text = prompt('enter the sentence')
planeta(text);






// let nomers  = prompt("Номерди киргизиңиз :");

// while (nomers.toLowerCase() !== "токто") {
//     if (!isNaN(nomers)) {
//         console.log("сапталган сан: " + nomers);
//     }
//     nomers = prompt("Номерди киргизиңиз :");
// }





// const myObject = {
//     stringProperty: "Салам, дуйно!",
//     numberProperty: 42,
//     booleanProperty: true,
//     arrayProperty: [1, 2, 3, 4, 5],
//     objectProperty: { key: "value" },
//     undefinedProperty: undefined,
//     nullProperty: null
// };

// console.log(Object.values(myObject));