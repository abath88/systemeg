function silnia(a) {
    let result = 1;

    for(let i = a; i > 0; i--){
        result *= i;
    }

    return result;
}

console.log(silnia(1), silnia(4), silnia(10));