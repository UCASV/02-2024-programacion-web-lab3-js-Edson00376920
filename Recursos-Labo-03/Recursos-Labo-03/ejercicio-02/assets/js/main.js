const plus = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const split = (a, b) => {
    return a / b;
};

const requestNumber = (message) => {
    return parseFloat(prompt(message));
};

const selectOperation = (a, b) => {
    let opcion = parseInt(prompt("Introduce una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"));
    
    switch (opcion) {
        case 1:
            return plus(a, b);
        case 2:
            return subtract(a, b);
        case 3:
            return multiply(a, b);
        case 4:
            return split(a, b);
        default:
            alert("Operación no válida");
            return null;
    }
};

const main = () => {
    let a = requestNumber("Introduce el primer número:");
    let b = requestNumber("Introduce el segundo número:");
    
    let result = selectOperation(a, b);

    if (result !== null) {
        alert(`El resultado es: ${result}`);
    }
};

main();
