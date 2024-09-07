const searchNumber = (numbers, target ) => {
    for (let i=0; i< numbers.length; i++){
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
}

const requestNumber = () => {
    let search = prompt ("introduzca un numero para buscar")
    return Number(search)
}

const main = () => {
    let numbers = [2, 4, 6, 8, 9]

    const targetNumber = requestNumber(); 
    const index = searchNumber(numbers, targetNumber); 

    if (index !== -1) {
        alert(`El número ${targetNumber} se encuentra en el índice ${index} del arreglo.`);
    } else {
        alert(`El número ${targetNumber} no se encuentra en el array.`);}
}

main();
